import { useSignIn } from "@clerk/expo/legacy";
import { router } from "expo-router";
import { styled } from "nativewind";
import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const getErrorMessage = (error: unknown) => {
  if (
    typeof error === "object" &&
    error !== null &&
    "errors" in error &&
    Array.isArray(error.errors)
  ) {
    const firstError = error.errors[0];
    if (
      typeof firstError === "object" &&
      firstError !== null &&
      "longMessage" in firstError &&
      typeof firstError.longMessage === "string"
    ) {
      return firstError.longMessage;
    }
  }

  return "Nous n’avons pas pu vous connecter. Vérifiez vos informations et réessayez.";
};

export default function SignIn() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [step, setStep] = useState<"credentials" | "verification">(
    "credentials",
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activateSession = async (sessionId: string | null | undefined) => {
    if (!sessionId) {
      setErrorMessage(
        "La connexion nécessite une étape supplémentaire. Demandez un nouveau code et réessayez.",
      );
      return false;
    }

    if (!setActive) {
      setErrorMessage(
        "La session n’a pas pu être ouverte. Revenez à la connexion.",
      );
      return false;
    }

    await setActive({ session: sessionId });
    router.replace("/(tabs)");
    return true;
  };

  const submit = async () => {
    const normalizedEmail = email.trim().toLowerCase();
    setErrorMessage("");

    if (!normalizedEmail || !normalizedEmail.includes("@")) {
      setErrorMessage("Saisissez une adresse e-mail valide.");
      return;
    }

    if (!password) {
      setErrorMessage("Saisissez votre mot de passe.");
      return;
    }

    if (!isLoaded) return;

    setIsSubmitting(true);
    try {
      const result = await signIn.create({
        identifier: normalizedEmail,
        password,
      });

      if (result.status === "complete") {
        await activateSession(result.createdSessionId);
      } else {
        const emailCodeFactor = result.supportedFirstFactors?.find(
          (factor) =>
            factor.strategy === "email_code" &&
            "emailAddressId" in factor &&
            typeof factor.emailAddressId === "string",
        );

        if (!emailCodeFactor || !("emailAddressId" in emailCodeFactor)) {
          setErrorMessage(
            "Une étape supplémentaire est nécessaire pour terminer la connexion.",
          );
          return;
        }

        if (!signIn.prepareFirstFactor) {
          setErrorMessage(
            "La vérification e-mail n’est pas disponible. Réessayez.",
          );
          return;
        }

        await signIn.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId: emailCodeFactor.emailAddressId,
        });
        setStep("verification");
      }
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const verifySignIn = async () => {
    const normalizedCode = code.trim();
    setErrorMessage("");

    if (normalizedCode.length < 4) {
      setErrorMessage("Saisissez le code reçu par e-mail.");
      return;
    }

    if (!isLoaded) return;

    setIsSubmitting(true);
    try {
      const result = await signIn.attemptFirstFactor({
        strategy: "email_code",
        code: normalizedCode,
      });

      if (result.status === "complete") {
        await activateSession(result.createdSessionId);
      } else {
        setErrorMessage(
          "Une étape supplémentaire est encore nécessaire pour terminer la connexion.",
        );
      }
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="auth-safe-area">
      <KeyboardAvoidingView
        className="auth-screen"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="auth-scroll"
          contentContainerClassName="auth-content"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="auth-brand-block">
            <View className="auth-logo-wrap">
              <View className="auth-logo-mark">
                <Text className="auth-logo-mark-text">W</Text>
              </View>
              <View>
                <Text className="auth-wordmark">Wiladati</Text>
                <Text className="auth-wordmark-sub">
                  Votre compagnon maternité
                </Text>
              </View>
            </View>
            <Text className="auth-title text-center">
              {step === "credentials"
                ? "Ravie de vous revoir"
                : "Vérifiez votre e-mail"}
            </Text>
            <Text className="auth-subtitle">
              {step === "credentials"
                ? "Retrouvez vos repères, vos semaines et tous vos conseils au même endroit."
                : `Nous avons envoyé un code à ${email.trim()}.`}
            </Text>
          </View>

          <View className="auth-card">
            <View className="auth-form">
              {step === "verification" ? (
                <>
                  <View className="auth-field">
                    <Text className="auth-label">Code de vérification</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={[styles.input, styles.codeInput]}
                      keyboardType="number-pad"
                      maxLength={8}
                      onChangeText={setCode}
                      placeholder="000000"
                      placeholderTextColor="#9B92A8"
                      value={code}
                    />
                  </View>
                  {errorMessage ? (
                    <Text className="auth-error">{errorMessage}</Text>
                  ) : null}
                  <Pressable
                    className={`auth-button ${isSubmitting ? "auth-button-disabled" : ""}`}
                    disabled={isSubmitting}
                    onPress={verifySignIn}
                  >
                    {isSubmitting ? (
                      <ActivityIndicator color="#210255" />
                    ) : (
                      <Text className="auth-button-text">Confirmer</Text>
                    )}
                  </Pressable>
                  <Pressable
                    className="auth-secondary-button"
                    disabled={isSubmitting}
                    onPress={() => {
                      setCode("");
                      setStep("credentials");
                    }}
                  >
                    <Text className="auth-secondary-button-text">
                      Modifier mes informations
                    </Text>
                  </Pressable>
                </>
              ) : (
                <>
                  <View className="auth-field">
                    <Text className="auth-label">Adresse e-mail</Text>
                    <TextInput
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect={false}
                      style={[styles.input, errorMessage && styles.inputError]}
                      keyboardType="email-address"
                      onChangeText={setEmail}
                      placeholder="vous@exemple.com"
                      placeholderTextColor="#9B92A8"
                      returnKeyType="next"
                      value={email}
                    />
                  </View>

                  <View className="auth-field">
                    <View className="flex-row items-center justify-between">
                      <Text className="auth-label">Mot de passe</Text>
                      <Text className="auth-helper">8 caractères minimum</Text>
                    </View>
                    <TextInput
                      autoComplete="password"
                      style={[styles.input, errorMessage && styles.inputError]}
                      onChangeText={setPassword}
                      placeholder="Votre mot de passe"
                      placeholderTextColor="#9B92A8"
                      secureTextEntry
                      value={password}
                    />
                  </View>

                  {errorMessage ? (
                    <Text className="auth-error">{errorMessage}</Text>
                  ) : null}

                  <Pressable
                    className={`auth-button ${isSubmitting ? "auth-button-disabled" : ""}`}
                    disabled={isSubmitting}
                    onPress={submit}
                  >
                    {isSubmitting ? (
                      <ActivityIndicator color="#210255" />
                    ) : (
                      <Text className="auth-button-text">Se connecter</Text>
                    )}
                  </Pressable>
                </>
              )}
            </View>
          </View>

          <View className="auth-link-row">
            <Text className="auth-link-copy">Pas encore de compte ?</Text>
            <Pressable onPress={() => router.replace("/(auth)/sign-up")}>
              <Text className="auth-link">Créer mon compte</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 16,
    color: "#210255",
    fontFamily: "sans-medium",
    fontSize: 16,
  },
  inputError: {
    borderColor: "#dc2626",
  },
  codeInput: {
    textAlign: "center",
    letterSpacing: 6,
  },
});

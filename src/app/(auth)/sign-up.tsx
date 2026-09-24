import { useSignUp } from "@clerk/expo/legacy";
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

const getMissingFieldsMessage = (fields: unknown[]) => {
  const labels: Record<string, string> = {
    email_address: "adresse e-mail",
    first_name: "prénom",
    last_name: "nom",
    password: "mot de passe",
    username: "nom d’utilisateur",
    legal_accepted: "acceptation des conditions",
    phone_number: "numéro de téléphone",
    protect_check: "contrôle de sécurité",
  };
  const names = fields
    .map((field) => labels[String(field)] ?? String(field))
    .filter(Boolean);

  return names.length
    ? `Informations restantes : ${names.join(", ")}.`
    : "Le code est valide, mais Clerk demande encore une information pour terminer l’inscription.";
};

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

  return "Nous n’avons pas pu créer votre compte. Vérifiez vos informations et réessayez.";
};

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [step, setStep] = useState<"details" | "verification">("details");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitDetails = async () => {
    const normalizedEmail = email.trim().toLowerCase();
    setErrorMessage("");

    if (!firstName.trim()) {
      setErrorMessage("Indiquez votre prénom.");
      return;
    }

    if (!normalizedEmail || !normalizedEmail.includes("@")) {
      setErrorMessage("Saisissez une adresse e-mail valide.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage(
        "Votre mot de passe doit contenir au moins 8 caractères.",
      );
      return;
    }

    if (!isLoaded) return;

    setIsSubmitting(true);
    try {
      await signUp.create({
        emailAddress: normalizedEmail,
        password,
        firstName: firstName.trim(),
        lastName: lastName.trim() || undefined,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setStep("verification");
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const verifyEmail = async () => {
    if (isSubmitting) return;

    setErrorMessage("");
    if (code.trim().length < 4) {
      setErrorMessage("Saisissez le code reçu par e-mail.");
      return;
    }

    if (!isLoaded) return;

    setIsSubmitting(true);
    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: code.trim(),
      });

      if (result.status === "complete" && result.createdSessionId) {
        await setActive({ session: result.createdSessionId });
        router.replace("/(tabs)");
      } else if (result.status === "complete") {
        setErrorMessage(
          "Votre e-mail est confirmé, mais l’inscription n’est pas terminée. Revenez en arrière et réessayez.",
        );
      } else {
        setErrorMessage(getMissingFieldsMessage(result.missingFields));
      }
    } catch (error) {
      const message = getErrorMessage(error);
      if (
        /already verified|déjà vérifié|deja verifie/i.test(message) &&
        signUp.status === "complete" &&
        signUp.createdSessionId
      ) {
        await setActive({ session: signUp.createdSessionId });
        router.replace("/(tabs)");
        return;
      }
      setErrorMessage(message);
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
              {step === "details"
                ? "Commencez votre aventure"
                : "Vérifiez votre e-mail"}
            </Text>
            <Text className="auth-subtitle">
              {step === "details"
                ? "Un espace doux et personnel pour vous accompagner à chaque étape."
                : `Nous avons envoyé un code à ${email.trim()}.`}
            </Text>
          </View>

          <View className="auth-card">
            {step === "details" ? (
              <View className="auth-form">
                <View className="flex-row gap-3">
                  <View className="auth-field flex-1">
                    <Text className="auth-label">Prénom</Text>
                    <TextInput
                      autoCapitalize="words"
                      style={styles.input}
                      onChangeText={setFirstName}
                      placeholder="Votre prénom"
                      placeholderTextColor="#9B92A8"
                      value={firstName}
                    />
                  </View>
                  <View className="auth-field flex-1">
                    <Text className="auth-label">Nom</Text>
                    <TextInput
                      autoCapitalize="words"
                      style={styles.input}
                      onChangeText={setLastName}
                      placeholder="Optionnel"
                      placeholderTextColor="#9B92A8"
                      value={lastName}
                    />
                  </View>
                </View>
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
                    value={email}
                  />
                </View>
                <View className="auth-field">
                  <Text className="auth-label">Mot de passe</Text>
                  <TextInput
                    autoComplete="new-password"
                    style={[styles.input, errorMessage && styles.inputError]}
                    onChangeText={setPassword}
                    placeholder="8 caractères minimum"
                    placeholderTextColor="#9B92A8"
                    secureTextEntry
                    value={password}
                  />
                </View>
                <View nativeID="clerk-captcha" />
                {errorMessage ? (
                  <Text className="auth-error">{errorMessage}</Text>
                ) : null}
                <Pressable
                  className={`auth-button ${isSubmitting ? "auth-button-disabled" : ""}`}
                  disabled={isSubmitting}
                  onPress={submitDetails}
                >
                  {isSubmitting ? (
                    <ActivityIndicator color="#210255" />
                  ) : (
                    <Text className="auth-button-text">Créer mon espace</Text>
                  )}
                </Pressable>
                <Text className="auth-helper text-center">
                  Vos informations restent privées et sécurisées.
                </Text>
              </View>
            ) : (
              <View className="auth-form">
                <View className="auth-field">
                  <Text className="auth-label">Code de vérification</Text>
                  <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={[
                      styles.input,
                      styles.codeInput,
                      errorMessage && styles.inputError,
                    ]}
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
                  onPress={verifyEmail}
                >
                  {isSubmitting ? (
                    <ActivityIndicator color="#210255" />
                  ) : (
                    <Text className="auth-button-text">
                      Confirmer mon e-mail
                    </Text>
                  )}
                </Pressable>
                <Pressable
                  className="auth-secondary-button"
                  disabled={isSubmitting}
                  onPress={() => setStep("details")}
                >
                  <Text className="auth-secondary-button-text">
                    Modifier mon adresse
                  </Text>
                </Pressable>
              </View>
            )}
          </View>

          <View className="auth-link-row">
            <Text className="auth-link-copy">
              {step === "details"
                ? "Vous avez déjà un compte ?"
                : "Vous souhaitez vous connecter ?"}
            </Text>
            <Pressable onPress={() => router.replace("/(auth)/sign-in")}>
              <Text className="auth-link">Se connecter</Text>
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

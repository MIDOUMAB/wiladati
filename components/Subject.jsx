import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../constants/icons";

const Subject = ({
  title,
  description,
  number,
  handlePress,
  isLoading,
  isRTL = false,
  source,
  backgroundColor = "#DDEFEA",
  accentColor = "#EA7A53",
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={isLoading}
      onPress={handlePress}
      accessibilityRole="button"
      className="w-full h-50.5 overflow-hidden rounded-2xl bg-white shadow-lg shadow-[#081126]/15"
    >
      {source ? (
        <Image source={source} className="w-full h-full" resizeMode="cover" />
      ) : (
        <View className="h-full w-full " style={{ backgroundColor }}>
          <View
            className="absolute -right-8 -top-10 h-40 w-40 rounded-full opacity-30"
            style={{ backgroundColor: accentColor }}
          />
          <View
            className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full border-18 opacity-20"
            style={{ borderColor: accentColor }}
          />
        </View>
      )}
      <View
        className="absolute bottom-0 left-0 right-0 flex-row items-end px-3 pb-4 pt-3"
        style={[styles.overlay, isRTL && styles.rtlRow]}
      >
        <Text
          className="text-xl font-sans-bold uppercase text-white/70 text-center pb-2 px-2 "
          style={isRTL ? styles.rtlText : styles.ltrText}
        >
          {number}
        </Text>
        <View
          className="mr-3 h-10 w-1 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
        <View className="min-w-0 flex-1">
          {/* <Text
            className="mb-1 text-xs font-sans-bold uppercase tracking-[1.5px] text-white/70"
            style={isRTL ? styles.rtlText : styles.ltrText}
          >
            {number}
          </Text> */}
          <Text
            className="text-xl font-sans-bold text-white"
            style={isRTL ? styles.rtlText : styles.ltrText}
          >
            {title}
          </Text>
          {description ? (
            <Text
              className="mt-1 text-sm font-sans-medium text-white/80"
              style={isRTL ? styles.rtlText : styles.ltrText}
            >
              {description}
            </Text>
          ) : null}
        </View>
        <View className="ml-3 h-9 w-9 items-center justify-center rounded-full bg-white/20">
          <Image
            source={icons.back}
            resizeMode="contain"
            className="h-5 w-5"
            style={{ tintColor: "#FFF8ED", transform: [{ rotate: "180deg" }] }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Subject;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(8,17,38,0.62)",
  },
  rtlRow: { flexDirection: "row-reverse" },
  rtlText: { textAlign: "right", writingDirection: "rtl" },
  ltrText: { textAlign: "left", writingDirection: "ltr" },
});

import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDirection } from "../src/hooks/use-app-direction";
const SubjectVideo = ({
  title,
  description,
  handlePress,
  isLoading,
  source,
}) => {
  const { t } = useTranslation();
  const direction = useAppDirection();
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={isLoading}
      onPress={handlePress}
      className="w-full h-[170px] rounded-xl shadow-xl shadow-black-100 bg-white overflow-hidden"
    >
      <Image source={source} className="w-full h-full" resizeMode="cover" />
      <View style={styles.overlay}>
        <Text
          className={`text-white text-lg font-bold ${direction === "rtl" ? "text-right" : "text-left"}`}
        >
          {title}
        </Text>
        {/* <Text className={`text-white text-sm mt-1 leading-snug ${languageData === 'ar' ? 'text-right' : 'text-left'}`}>{description}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default SubjectVideo;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "rgba(0,0,0,0.45)",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

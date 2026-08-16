import images from "@/../constants/images";
import "@/../global.css";
import DateTimePickerAndroid from "@react-native-community/datetimepicker";
import { styled } from "nativewind";
import { useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../../constants/icons";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [edd, setEdd] = useState();
  const [countWeeks, setCountWeeks] = useState(0);
  const [countDays, setCountDays] = useState(0);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const countWeeksAndDays = (startDate, endDate) => {
    const diffInMs = Math.abs(endDate - startDate);
    const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const weeks = Math.floor(totalDays / 7);
    setCountWeeks(weeks);
    const remainingDays = totalDays % 7;
    setCountDays(remainingDays);

    const newDate = new Date(startDate);
    newDate.setFullYear(startDate.getFullYear() + 1);
    newDate.setMonth(startDate.getMonth() - 3);
    newDate.setDate(startDate.getDate() + 7);
    setEdd(newDate);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateOfBirth(currentDate);
        countWeeksAndDays(currentDate, new Date());
      }
    } else {
      toggleDatePicker();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="home-header">
        <View className="home-user">
          <Image source={images.avatar} className="home-avatar" />
          <Text className="home-user-name">Username</Text>
        </View>
        <Pressable>
          <Image source={icons.add} className="home-add-icon" />
        </Pressable>
      </View>

      <View className="home-balance-card">
        <Text className="home-balance-label">Date de premiere</Text>
        <View className="home-balance-row bg-amber-100">
          <View>
            {showPicker && (
              <DateTimePickerAndroid
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
                maximumDate={new Date()}
              />
            )}
            <Pressable onPress={toggleDatePicker}>
              <TextInput
                className={
                  "bg-white mt-1 rounded-xl px-3 text-base border-blueColor border-2"
                }
                placeholder="dd-mm-yyyy"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                placeholderTextColor="#11182744"
                editable={false}
              />
            </Pressable>
          </View>
        </View>
        <View className="home-balance-row">
          <Text className="home-balance-amount">1200</Text>
          <Text className="home-balance-date">{`${edd}`}</Text>
        </View>
      </View>

      <View className="px-5 py-6 space-y-2">
        <View className="px-4 pt-3 mb-4">
          <Text className={`font-pmedium text-sm text-primary py-2 `}></Text>
        </View>
        {/* {countWeeks == 0 || countWeeks > 42 && 
                    <View className=" items-center">
                       <Image
                        source={images.empty}
                        className="w-[450px] h-[250px] mt-5 items-center justify-center"
                        resizeMode="cover"
                      />
                      <Text className="text-2xl font-semibold text-gray-800">Aucune Information</Text>
                   </View>
                  } */}
        {/* {countWeeks != 0 && countWeeks <= 42 && 
                  <>
                  <View className=" items-center mb-5">
                    <Image
                      source={weekImages[countWeeks - 1]}
                      className="w-56 h-56 rounded-full shadow-md"
                      resizeMode="cover"
                    />
                    <View className="flex-row flex-wrap justify-between w-full mt-4 px-4 gap-x-2">
                      {countWeeks > 4 && 
                        <>
                          <View className="items-center w-[23%]">
                            <Text className="text-sm font-semibold text-gray-700">{t("weight")}</Text>
                            <Text className="text-sm font-semibold text-blue-700">{informations[countWeeks-1][1]}</Text>
                          </View>
                        </>
                      }
                      <View className={`items-center w-[49%] ${countWeeks <= 4 ? 'w-[100%]' : 'w-[48%]'} justify-center`}>
                        <Text className="text-xs font-bold text-gray-900 w-[62%] text-center ">{t("AccTitle")}</Text>
                        <Text className="text-lg font-semibold text-blue-700 ">
                          {`${formatDate(edd)} `}
                        </Text>
                      </View>
                      {countWeeks > 4 && 
                        <>
                          <View className="items-center w-[21%]">
                            <Text className="text-sm font-semibold text-gray-700">{t("width")}</Text>
                            <Text className="text-sm font-semibold text-blue-700">{informations[countWeeks-1][0]}</Text>
                          </View>
                        </>
                      }
                    </View>
                  </View>
                  
                    <View className="w-full flex-1 px-5 py-5 rounded-lg shadow-sm shadow-gray-300 overflow-hidden ">
                      
                      
                          <Text className={`text-base text-center font-psemibold text-gray-800`}>
                            {t(`age`)}
                          </Text>
                          <Text className="text-base text-center font-psemibold text-blue-700">
                            {t("weeksDays",{countWeeks:countWeeks, countDays:countDays})}
                          </Text>
                        
      
                        <View className="flex-1 justify-center mt-4">
                            {t(`weeks.${countWeeks}.intro`, { returnObjects: true }).slice(0, 3).map((s, i) => (
                              <Text  key={i} className={`text-base text-gray-800 mb-2 ${textAlign} ${pad3}`}>
                                  {s}
                              </Text>
                            ))}
      
                            <TouchableOpacity 
                                  activeOpacity={0.7}
                                  className={`bg-blueColor rounded-xl min-h-[10px] justify-center items-center p-3 mx-4 mt-5 ${textAlign} `}
                                  onPress={() => router.push('/weeks')}
                              >
                                  <Text className={` font-psemibold text-base text-white`}>{t(`voirPlus`)}</Text>
                              </TouchableOpacity>
                        </View>
                    </View>
                      
                    </>
                    } */}
      </View>
    </SafeAreaView>
  );
}

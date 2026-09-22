import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, Image, StyleSheet, Pressable, TouchableOpacity, FlatList } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import Subject from '../../components/Subject';
import { images } from '../../constants'
import { icons } from "../../constants";
import SubjectVideo from '../../components/SubjectVideo';
import { useState, useEffect, useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Select, { ISelectItem } from "rn-custom-select-dropdown";
import { useLanguage } from '../../hooks/useLanguage'
import { useTranslation } from "react-i18next"

const weekImages = [images.week1Img,images.week2Img,images.week3Img,images.week4Img,images.week5Img,images.week6Img,images.week7Img,images.week8Img,images.week9Img,images.week10Img,images.week11Img,images.week12Img,images.week13Img,images.week14Img,images.week15Img,images.week16Img,images.week17Img,images.week18Img,images.week19Img,images.week20Img,images.week21Img,images.week22Img,images.week23Img,images.week24Img,images.week25Img,images.week26Img,images.week27Img,images.week28Img,images.week29Img,images.week30Img,images.week31Img,images.week32Img,images.week33Img,images.week34Img,images.week35Img,images.week36Img,images.week37Img,images.week38Img,images.week39Img,images.week40Img,images.week41Img,images.week42Img,]

const weeks = () => {
    const { t } = useTranslation()
    const { languageData } = useLanguage()
    const normalizedWeeks = languageData === 'ar' ? [{"label": "الأسبوع 1", "value": "1"}, {"label": "الأسبوع 2", "value": "2"}, {"label": "الأسبوع 3", "value": "3"}, {"label": "الأسبوع 4", "value": "4"}, {"label": "الأسبوع 5", "value": "5"}, {"label": "الأسبوع 6", "value": "6"}, {"label": "الأسبوع 7", "value": "7"}, {"label": "الأسبوع 8", "value": "8"}, {"label": "الأسبوع 9", "value": "9"}, {"label": "الأسبوع 10", "value": "10"}, {"label": "الأسبوع 11", "value": "11"}, {"label": "الأسبوع 12", "value": "12"}, {"label": "الأسبوع 13", "value": "13"}, {"label": "الأسبوع 14", "value": "14"}, {"label": "الأسبوع 15", "value": "15"}, {"label": "الأسبوع 16", "value": "16"}, {"label": "الأسبوع 17", "value": "17"}, {"label": "الأسبوع 18", "value": "18"}, {"label": "الأسبوع 19", "value": "19"}, {"label": "الأسبوع 20", "value": "20"}, {"label": "الأسبوع 21", "value": "21"}, {"label": "الأسبوع 22", "value": "22"}, {"label": "الأسبوع 23", "value": "23"}, {"label": "الأسبوع 24", "value": "24"}, {"label": "الأسبوع 25", "value": "25"}, {"label": "الأسبوع 26", "value": "26"}, {"label": "الأسبوع 27", "value": "27"}, {"label": "الأسبوع 28", "value": "28"}, {"label": "الأسبوع 29", "value": "29"}, {"label": "الأسبوع 30", "value": "30"}, {"label": "الأسبوع 31", "value": "31"}, {"label": "الأسبوع 32", "value": "32"}, {"label": "الأسبوع 33", "value": "33"}, {"label": "الأسبوع 34", "value": "34"}, {"label": "الأسبوع 35", "value": "35"}, {"label": "الأسبوع 36", "value": "36"}, {"label": "الأسبوع 37", "value": "37"}, {"label": "الأسبوع 38", "value": "38"}, {"label": "الأسبوع 39", "value": "39"}, {"label": "الأسبوع 40", "value": "40"}, {"label": "الأسبوع 41", "value": "41"}, {"label": "الأسبوع 42", "value": "42"}] : [{"label": "Semaine 1", "value": "1"}, {"label": "Semaine 2", "value": "2"}, {"label": "Semaine 3", "value": "3"}, {"label": "Semaine 4", "value": "4"}, {"label": "Semaine 5", "value": "5"}, {"label": "Semaine 6", "value": "6"}, {"label": "Semaine 7", "value": "7"}, {"label": "Semaine 8", "value": "8"}, {"label": "Semaine 9", "value": "9"}, {"label": "Semaine 10", "value": "10"}, {"label": "Semaine 11", "value": "11"}, {"label": "Semaine 12", "value": "12"}, {"label": "Semaine 13", "value": "13"}, {"label": "Semaine 14", "value": "14"}, {"label": "Semaine 15", "value": "15"}, {"label": "Semaine 16", "value": "16"}, {"label": "Semaine 17", "value": "17"}, {"label": "Semaine 18", "value": "18"}, {"label": "Semaine 19", "value": "19"}, {"label": "Semaine 20", "value": "20"}, {"label": "Semaine 21", "value": "21"}, {"label": "Semaine 22", "value": "22"}, {"label": "Semaine 23", "value": "23"}, {"label": "Semaine 24", "value": "24"}, {"label": "Semaine 25", "value": "25"}, {"label": "Semaine 26", "value": "26"}, {"label": "Semaine 27", "value": "27"}, {"label": "Semaine 28", "value": "28"}, {"label": "Semaine 29", "value": "29"}, {"label": "Semaine 30", "value": "30"}, {"label": "Semaine 31", "value": "31"}, {"label": "Semaine 32", "value": "32"}, {"label": "Semaine 33", "value": "33"}, {"label": "Semaine 34", "value": "34"}, {"label": "Semaine 35", "value": "35"}, {"label": "Semaine 36", "value": "36"}, {"label": "Semaine 37", "value": "37"}, {"label": "Semaine 38", "value": "38"}, {"label": "Semaine 39", "value": "39"}, {"label": "Semaine 40", "value": "40"}, {"label": "Semaine 41", "value": "41"}, {"label": "Semaine 42", "value": "42"}]
    const textAlign = languageData === 'ar' ? 'text-right' : 'text-left'
    const pad2 = languageData === 'ar' ? 'pr-2' : 'pl-2'
    const pad3 = languageData === 'ar' ? 'pr-3' : 'pl-3'
    const pad4 = languageData === 'ar' ? 'pr-4' : 'pl-4'
    const pad6 = languageData === 'ar' ? 'pr-6' : 'pl-6'

    const [selectedValue, setSelectedValue] = useState(null)
  
  return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white">
            <GestureHandlerRootView style={{ flex: 1 }} >
                <ScrollView className="px-5 py-6">
    
                    {/* Header */}
                    <View className={`flex-row items-center mb-6 ${languageData === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <Pressable
                        className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center shadow-sm"
                        onPress={() => router.push('/bookmark')}
                    >
                        <Image
                        source={icons.leftArrow}
                        resizeMode="contain"
                        tintColor="#374151"
                        className="w-5 h-5"
                        style={languageData === 'ar' ? { transform: [{ scaleX: -1 }] } : {}}
                        />
                    </Pressable>
                    <Text className={`w-[90%] text-2xl font-extrabold text-[#6A0DAD] ${languageData === 'ar' ? 'text-right mr-2' : 'text-left ml-2'}`}>{t(`weeksTitle`)}</Text>
                    </View>

                    <Select
                    placeholder= {languageData === 'ar' ? 'اختر أسبوع' : 'selectionner une semaine'}
                        data={normalizedWeeks}
                        value={selectedValue}
                        onChange={(newValue) => {
                            setSelectedValue(newValue);
                        }}
                    />

                    {selectedValue && (
                        <View className="mb-10">
                            {/* Week Title */}
                            <Text className={`text-2xl font-semibold text-blue-700 mb-5 mt-7 ${textAlign}`}>
                                {t(`weeks.${selectedValue.value}.label`)}
                            </Text>
                            {/* <Image
                                source= {weekImages[selectedValue.value - 1]}
                                style={{ width: "100%", height: 300, resizeMode: "cover", marginBottom: 10 }}
                            /> */}


                            {/* Intro */}
                            {t(`weeks.${selectedValue.value}.intro`, { returnObjects: true }).map((c, i) => (
                                <Text key={i} className={`text-base leading-relaxed text-gray-800 mb-2 ${textAlign} ${pad3}`}>
                                {c}
                                </Text>
                            ))}


                            {( selectedValue.value == 41 && 
                                <>
                                    <Text className={`text-xl font-semibold text-[#8811dc] mb-3 mt-5 ${textAlign}`}>
                                        {t(`weeks.${selectedValue.value}.remarque.0`)}
                                    </Text>
                                    <Text className={`text-base text-gray-600 ${textAlign} ${pad2}`}>{t(`weeks.${selectedValue.value}.remarque.1`)}</Text>
                                    <Text className={`text-base text-gray-600 ${textAlign} ${pad2}`}>{t(`weeks.${selectedValue.value}.remarque.2`)}</Text>
                                </>
                            )}


                            {/* Symptômes */}
                            {t(`weeks.${selectedValue.value}.symptomes`, { returnObjects: true })?.length > 0 && (
                                <>
                                    <Text className={`text-xl font-semibold text-[#8811dc] mb-3 mt-5 ${textAlign}`}>
                                    {t(`weeksSymptomes`)}
                                    </Text>

                                    {t(`weeks.${selectedValue.value}.symptomes`, { returnObjects: true }).map((s, i) => (
                                    <Text key={i} className={`text-base leading-relaxed text-gray-800 mb-2 ${textAlign} ${pad3}`}>
                                        • {s}
                                    </Text>
                                    ))}
                                </>
                            )}

                            {( selectedValue.value == 42 && 
                                <>
                                    <Text className={`text-xl font-semibold text-[#8811dc] mb-3 mt-5 ${textAlign}`}>
                                        {t(`weeks.${selectedValue.value}.remarque.0`)}
                                    </Text>
                                    <Text className={`text-base text-gray-600 ${textAlign} ${pad2}`}>{t(`weeks.${selectedValue.value}.remarque.1`)}</Text>
                                    <Text className={`text-base text-gray-600 ${textAlign} ${pad2}`}>{t(`weeks.${selectedValue.value}.remarque.2`)}</Text>
                                    <Text className={`text-base text-gray-600 font-semibold my-2 ${textAlign} ${pad2}`}>{t(`weeks.${selectedValue.value}.remarque.3`)}</Text>
                                    <Text className={`text-base text-gray-600 ${textAlign} ${pad2}`}>{t(`weeks.${selectedValue.value}.remarque.4`)}</Text>
                                </>
                            )}

                             {/* Conseils */}
                            {t(`weeks.${selectedValue.value}.conseils`, { returnObjects: true })?.length > 0 && (
                                <>
                                    <Text className={`text-xl font-semibold text-[#8811dc] mb-3 mt-5 ${textAlign}`}>
                                        {t(`weeksConseils`)}
                                    </Text>
                                    {t(`weeks.${selectedValue.value}.conseils`, { returnObjects: true }).map((c, i) => (
                                        <Text key={i} className={`text-base leading-relaxed text-gray-800 mb-2 ${textAlign} ${pad3}`}>
                                        • {c}
                                        </Text>
                                    ))}
                                </>
                            )}



                            {( selectedValue.value == 37 && 
                                <>
                                    <Text className={`text-xl font-semibold text-[#8811dc] mb-3 mt-5 ${textAlign}`}>
                                        {t(`weeks.${selectedValue.value}.note.0`)}
                                    </Text>
                                    <Text className={`text-base text-gray-600 ${textAlign} ${pad2}`}>{t(`weeks.${selectedValue.value}.note.1`)}</Text>
                                    <View className={`space-y-2 mt-2 ${pad3}`}>
                                        <Text className={`text-base text-gray-600 font-semibold ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.2`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.3`)}</Text>
                                        <Text className={`text-base text-gray-600 font-semibold ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.4`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.5`)}</Text>
                                    </View>
                                    <Text className={`text-xl font-semibold text-[#8811dc] mb-3 mt-5 ${textAlign}`}>
                                        {t(`weeks.${selectedValue.value}.note.6`)}
                                    </Text>
                                    <View className={`space-y-2 ${pad2}`}>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.7`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.8`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.9`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.10`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.11`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.12`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.13`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.14`)}</Text>
                                    </View>
                                    
                                </>
                            ) ||
                            ( selectedValue.value == 38 && 
                                <>
                                    <Text className={`text-xl font-semibold text-[#8811dc] mb-3 mt-5 ${textAlign}`}>
                                        {t(`weeks.${selectedValue.value}.note.0`)}
                                    </Text>
                                    <View className={`space-y-2 mt-2 ${pad3}`}>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{'\u2022'} {t(`weeks.${selectedValue.value}.note.2`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{'\u2022'} {t(`weeks.${selectedValue.value}.note.3`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{'\u2022'} {t(`weeks.${selectedValue.value}.note.4`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{'\u2022'} {t(`weeks.${selectedValue.value}.note.5`)}</Text>
                                    </View>
                                </>
                            ) || 
                            (selectedValue.value == 40 && (
                                <>
                                    <Text className={`text-xl font-semibold text-[#8811dc] mb-3 mt-5 ${textAlign}`}>
                                        {t(`weeks.${selectedValue.value}.note.0`)}
                                    </Text>
                                    <Text className={`text-base text-gray-600 ${textAlign} ${pad2}`}>{t(`weeks.${selectedValue.value}.note.1`)}</Text>

                                </>
                                )
                                
                            ) || 
                            (selectedValue.value == 42 && (
                                <>
                                    <Text className={`text-xl font-semibold text-[#8811dc] mb-3 mt-5 ${textAlign}`}>
                                        {t(`weeks.${selectedValue.value}.note.0`)}
                                    </Text>
                                    <Text className={`text-base text-gray-600 ${textAlign} ${pad2}`}>{t(`weeks.${selectedValue.value}.note.1`)}</Text>
                                </>
                                )
                                
                            ) ||
                            (selectedValue.value != 37 && t(`weeks.${selectedValue.value}.note`, { returnObjects: true })?.length > 0 && (
                                <>
                                    {t(`weeks.${selectedValue.value}.note`, { returnObjects: true }).map((s, i) => (
                                        <Text key={i} className={`text-base leading-relaxed text-gray-800 mb-2 ${textAlign}`}>
                                        {s}
                                        </Text>
                                    ))}
                                </>
                                )
                                
                            )}


{/* 
                            {t(`weeks.${selectedValue.value}.note`, { returnObjects: true })?.length > 0 && (
                                <>
                                    {t(`weeks.${selectedValue.value}.note`, { returnObjects: true }).map((s, i) => (
                                        <Text key={i} className={`text-base leading-relaxed text-gray-800 mb-2 ${textAlign}`}>
                                        {s}
                                        </Text>
                                    ))}
                                </>
                            )}

                             ( selectedValue.value === 37 && 
                                <>
                                    <Text className={`text-xl font-semibold text-[#8811dc] mb-3 mt-5 ${textAlign}`}>
                                        {t(`weeks.${selectedValue.value}.note.0`)}
                                    </Text>
                                    <Text className={`text-base text-gray-600 ${textAlign} ${pad2}`}>{t(`weeks.${selectedValue.value}.note.1`)}</Text>
                                    <View className={`space-y-2 mt-2 ${pad3}`}>
                                        <Text className={`text-base text-gray-600 font-semibold ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.2`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.3`)}</Text>
                                        <Text className={`text-base text-gray-600 font-semibold ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.4`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.5`)}</Text>
                                    </View>
                                    <Text className={`text-xl font-semibold text-[#8811dc] mb-3 mt-5 ${textAlign}`}>
                                        {t(`weeks.${selectedValue.value}.note.6`)}
                                    </Text>
                                    <View className={`space-y-2 ${pad2}`}>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.7`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.8`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.9`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.10`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.11`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.12`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.13`)}</Text>
                                        <Text className={`text-base text-gray-600 ${textAlign}`}>{t(`weeks.${selectedValue.value}.note.14`)}</Text>
                                    </View>
                                    
                                </>
                            )
                        
                         */}
                        




                        </View>
                            
                    )}

                    
    
                </ScrollView>
            </GestureHandlerRootView>
            <StatusBar backgroundColor='#161622' style='light'/>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default weeks
import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { icons } from "../../constants";
import SubjectVideo from '../../components/SubjectVideo';
import { useTranslation } from "react-i18next";
import { useLanguage } from '../../hooks/useLanguage';

const avantAccouch = () => {

  const { t, i18n } = useTranslation();
  const { languageData } = useLanguage();

  return (
    <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView>
                <View className="w-full flex-1 px-5 py-6 ">
    
                   <View className={`flex-row items-center mb-6 ${languageData === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <Pressable
                      className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center shadow-sm"
                      onPress={() => router.push('/create')}
                    >
                      <Image
                        source={icons.leftArrow}
                        resizeMode="contain"
                        tintColor="#374151"
                        className="w-5 h-5"
                        style={languageData === 'ar' ? { transform: [{ scaleX: -1 }] } : {}}
                      />
                    </Pressable>
                    <Text className={`text-2xl font-extrabold text-[#6A0DAD] ${languageData === 'ar' ? 'mr-2' : 'ml-2'}`}>{t("avantAccouchTitle")}</Text>
                  </View>
          
                   {/* Intro */}
                  <Text className={`text-base text-gray-700 mb-5 ${languageData === 'ar' ? 'text-right' : 'text-left'}`}>
                    {t("avantAccouchIntro")}
                  </Text>
                    <View className="flex-1 gap-y-3 w-[100%]">
                      <Text className={`text-xl font-extrabold text-[#1E3A8A] ml-35 mb-5 ${languageData === 'ar' ? 'text-right' : 'text-left'}`}>
                        1- {t("avantAccouchMentale")}
                        </Text>
                      <View className="flex-1 w-full h-[170px] ">
                        <SubjectVideo
                          title={t("avantAccouchFear")}
                          description={t("avantAccouchFear")}
                          handlePress={() => router.push('/peur')}
                          source={images.laPeurImg}
                        />                  
                      </View>
                      <View className="flex-1 w-full h-[170px]">
                        <SubjectVideo
                          title={t("avantAccouchRelaxation")}
                          description={t("avantAccouchRelaxation")}
                          handlePress={() => router.push('/relaxationEtRespiration')}
                          source={images.relaxetRespireImg}
                        />                  
                      </View>
                      <View className="flex-1 w-full h-[170px] mb-5">
                        <SubjectVideo
                          title={t("avantAccouchPartenaire")}
                          description={t("avantAccouchPartenaire")}
                          handlePress={() => router.push('/partner')}
                          source={images.partenaireImg}
                        />                  
                      </View>
                      <Text className={`text-xl font-extrabold text-[#1E3A8A] ml-35 mb-5 ${languageData === 'ar' ? 'text-right' : 'text-left'}`}>
                        2- {t("avantAccouchPhysique")}
                        </Text>
                      <View className="flex-1 w-full h-[170px]">
                        <SubjectVideo
                          title={t("avantAccouchFood")}
                          description={t("avantAccouchFood")}
                          handlePress={() => router.push('/alimentation')}
                          source={images.alimentationImg}
                        />                  
                      </View>
                      <View className="flex-1 w-full h-[170px]">
                        <SubjectVideo
                          title={t("sportTitle")}
                          description={t("avantAccouchSport")}
                          handlePress={() => router.push('/sport')}
                          source={images.sport1Img}
                        />                  
                      </View>
                      <View className="flex-1 w-full h-[170px]">
                        <SubjectVideo
                          title={t("sportKeigelTitle")}
                          description={t("avantAccouchSport")}
                          handlePress={() => router.push('/sportKeigel')}
                          source={images.sport2Img}
                        />                  
                      </View>
                      
                      <View className="flex-1 w-full h-[170px]">
                        <SubjectVideo
                          title={t("avantAccouchMassage")}
                          description={t("avantAccouchMassage")}
                          handlePress={() => router.push('/massage')}
                          source={images.massagePerineeImg}
                        />                  
                      </View>
                      {/* <View className="flex-1 w-full h-[170px]">
                        <SubjectVideo
                          title={t("avantAccouchStimulateur")}
                          description={t("avantAccouchStimulateur")}
                          handlePress={() => router.push('/stimulateur')}
                          source={images.stimulateursImg}
                        />                  
                      </View>
                      <View className="flex-1 w-full h-[170px]">
                        <SubjectVideo
                          title={t("birthBagTitle")}
                          description={t("birthBagTitle")}
                          handlePress={() => router.push('/valise')}
                          source={images.stimulateursImg}
                        />                  
                      </View> */}
                    </View>
    
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light'/>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default avantAccouch
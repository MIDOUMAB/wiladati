import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import Subject from '../../components/Subject';
import { images } from '../../constants'
import { icons } from "../../constants";
import SubjectVideo from '../../components/SubjectVideo';
import { getLanguage } from '../../lang/i18n';
import { useTranslation } from "react-i18next";
import { useLanguage } from '../../hooks/useLanguage';
import { useState, useEffect } from "react";



const pendantAccouch = () => {
  
  
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
                            tintColor="#210255"
                            className="w-5 h-5"
                            style={languageData === 'ar' ? { transform: [{ scaleX: -1 }] } : {}}
                          />
                        </Pressable>
                        <Text className={`text-2xl font-extrabold text-[#6A0DAD] ${languageData === 'ar' ? 'mr-2' : 'ml-2'}`}>{t("apresAccouchement.title")}</Text>
                      </View>
                      <View className="mt-10 flex-1 gap-y-3 w-[100%]">

                        <View className="flex-1 w-full h-[170px] ">
                          <SubjectVideo
                            title={t("apresAccouchement.periodePostpartum.title")}
                            description={t("apresAccouchement.periodePostpartum.title")}
                            handlePress={() => router.push('/periodePostpartum')}
                            source={images.periodPostPartumImg}
                          />                  
                        </View>
                        <View className="flex-1 w-full h-[170px]">
                          <SubjectVideo
                            title={t("apresAccouchement.allaitementMaternel.title")}
                            description={t("apresAccouchement.allaitementMaternel.title")}
                            handlePress={() => router.push('/allaitementMaternel')}
                            source={images.allaitementMaternelImg}
                          />                  
                        </View>
                        <View className="flex-1 w-full h-[170px]">
                          <SubjectVideo
                            title={t("apresAccouchement.hygienePersonnelle.title")}
                            description={t("apresAccouchement.hygienePersonnelle.title")}
                            handlePress={() => router.push('/hygienePersonnelle')}
                            source={images.hygienePersonnelImg}
                          />                  
                        </View>
                        <View className="flex-1 w-full h-[170px]">
                          <SubjectVideo
                            title={t("apresAccouchement.alimentation.1")}
                            description={t("apresAccouchement.alimentation.1")}
                            handlePress={() => router.push('/alimentationApres')}
                            source={images.alimentationApresImg}
                          />                  
                        </View>
                        <View className="flex-1 w-full h-[170px]">
                          <SubjectVideo
                            title={t("apresAccouchement.conseilsNourrisson.title")}
                            description={t("apresAccouchement.conseilsNourrisson.title")}
                            handlePress={() => router.push('/conseilsBebe')}
                            source={images.bebeImg}
                          />                  
                        </View>
                        <View className="flex-1 w-full h-[170px]">
                          <SubjectVideo
                            title={t("apresAccouchement.medicaments.title")}
                            description={t("apresAccouchement.medicaments.title")}
                            handlePress={() => router.push('/medicaments')}
                            source={images.medicamentsImg}
                          />                  
                        </View>
                        
                      </View>
        
                    </View>
                </ScrollView>
                <StatusBar backgroundColor='#161622' style='light'/>
            </SafeAreaView>
        </SafeAreaProvider>
  )
}

export default pendantAccouch
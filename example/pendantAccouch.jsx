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
            <SafeAreaView  className="flex-1 bg-white">
                <ScrollView>
                    <View className="w-full flex-1 px-5 py-6">
        
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
                    <Text className={`text-2xl font-extrabold text-[#6A0DAD] ${languageData === 'ar' ? 'mr-2' : 'ml-2'}`}>{t("pendantAccouchement.title")}</Text>
                  </View>

                      <View className="mt-10 flex-1 gap-y-3 w-[100%]">

                        <View className="flex-1 w-full h-[170px] ">
                          <SubjectVideo
                            title={t("pendantAccouchement.gestionPeurAnxiete.title")}
                            handlePress={() => router.push('/gestionPeurAnxiete')}
                            source={images.gestionDePeurImg}
                          />                  
                        </View>
                        <View className="flex-1 w-full h-[170px]">
                          <SubjectVideo
                            title={t("pendantAccouchement.massageRelaxation.title")}
                            description={t("pendantAccouchement.massageRelaxation.title")}
                            handlePress={() => router.push('/massageRelaxation')}
                            source={images.massageEtRelaxationImg}
                          />                  
                        </View>
                        <View className="flex-1 w-full h-[170px]">
                          <SubjectVideo
                            title={t("pendantAccouchement.techniques_respiration.title")}
                            description={t("pendantAccouchement.techniques_respiration.title")}
                            handlePress={() => router.push('/techniquesRespiration')}
                            source={images.techniqueDeRespirationImg}
                          />                  
                        </View>
                        <View className="flex-1 w-full h-[170px]">
                          <SubjectVideo
                            title={t("pendantAccouchement.technique_poussee.title")}
                            description={t("pendantAccouchement.technique_poussee.title")}
                            handlePress={() => router.push('/techniquePoussee')}
                            source={images.techniqueDePousseeImg}
                          />                  
                        </View>
                        <View className="flex-1 w-full h-[170px]">
                          <SubjectVideo
                            title={t("pendantAccouchement.role_proches.title")}
                            description={t("pendantAccouchement.role_proches.title")}
                            handlePress={() => router.push('/roleProches')}
                            source={images.roleDesProchesImg}
                          />                  
                        </View>                        
                        <View className="flex-1 w-full h-[170px]">
                          <SubjectVideo
                            title={t("pendantAccouchement.cesarienne.title")}
                            description={t("pendantAccouchement.cesarienne.title")}
                            handlePress={() => router.push('/cesarienne')}
                            source={images.cesarienneImg}
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
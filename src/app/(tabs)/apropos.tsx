import { styled } from "nativewind";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const Apropos = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="px-5 py-6 space-y-4">
          {/* Header */}
          <View className="items-center w-full mb-4">
            <Text className="text-3xl font-extrabold text-[#6A0DAD] tracking-wide">
              Wiladati
            </Text>
          </View>

          {/* Section Title */}
          <Text className="text-2xl font-bold text-[#1E3A8A] mb-2 ">
            À propos de l'application
          </Text>

          {/* Intro paragraphs */}
          <Text className="text-base leading-relaxed text-gray-700 ">
            Bienvenue sur ton application
          </Text>
          <Text className="text-base leading-relaxed text-gray-700 ">
            La première application algérienne dédiée aux femmes enceintes dans
            leur parcours vers l'accouchement. Cette application a été créée
            pour répondre au besoin des mamans algériennes d'avoir une source
            fiable et complète d'informations médicales et psychologiques afin
            d'être mieux informées, moins anxieuses et soutenues dans les
            moments les plus sensibles et les plus complexes de leur maternité.
          </Text>
          <Text className="text-base leading-relaxed text-gray-700 ">
            Plus qu'un simple guide pour les mamans, c'est un outil qui :
          </Text>

          {/* Bulleted points */}
          <View className="space-y-2 ${pad2}">
            <Text className="text-base text-gray-600 ">
              {"\u2022"} Soutient le rôle d'accompagnement essentiel de la
              sage-femme.
            </Text>
            <Text className="text-base text-gray-600 ">
              {"\u2022"} Sert de support moderne et de référence pour les
              étudiantes sages-femmes dans leur formation au quotidien.",
              "aProposNote": "Remarque : Cette application est un support
              numérique moderne, conçu pour t'accompagner au quotidien. Il est
              important de souligner qu'elle ne remplace en aucun cas la
              préparation classique ni ton suivi médical ; il s'agit plutôt d'un
              outil complémentaire conçu pour améliorer ton expérience et
              t'apporter un soutien supplémentaire.
            </Text>
          </View>

          {/* Note */}
          <Text className="text-base italic text-gray-500 mt-4 ">
            Remarque : Cette application est un support numérique moderne, conçu
            pour t'accompagner au quotidien. Il est important de souligner
            qu'elle ne remplace en aucun cas la préparation classique ni ton
            suivi médical ; il s'agit plutôt d'un outil complémentaire conçu
            pour améliorer ton expérience et t'apporter un soutien
            supplémentaire.
          </Text>

          {/* Goals */}
          <Text className="text-xl font-semibold text-[#1E3A8A] mt-6 mb-2 ">
            Elle vise a :
          </Text>
          <View className="space-y-2">
            <Text className="text-base text-gray-600">
              {"\u2022"} Accompagner les futures mamans dans le suivi détaillé
              du développement de leur bébé, de la 1ère à la 42ème semaine.
            </Text>
            <Text className="text-base text-gray-600">
              {"\u2022"} Fournir des explications claires et accessibles sur les
              différentes étapes du travail et de l'accouchement, afin de
              préparer les futures mamans physiquement et psychologiquement à la
              naissance.
            </Text>
            <Text className="text-base text-gray-600">
              {"\u2022"} Servir de guide pratique pour identifier les vraies
              contractions, reconnaître les signes d'alerte ou d'approche, et
              s'informer sur les stimulateurs d'accouchement ainsi que sur la
              préparation de la valise de maternité.
            </Text>
            <Text className="text-base text-gray-600">
              {"\u2022"} Guider les nouvelles mamans sur les soins essentiels en
              post-partum pour favoriser une récupération physique et un
              bien-être optimal après l'accouchement.
            </Text>
          </View>

          <View className="flex-1 items-center w-full">
            <Text className="text-2xl font-extrabold text-[#6A0DAD] tracking-wide mt-5 mb-3">
              Équipe du projet
            </Text>

            <Text className="text-base font-semibold text-gray-700 text-center">
              Conception et Contenu scientifique :
            </Text>
            <Text className="text-xl font-semibold text-[#1E3A8A] text-center mb-3">
              SAYAH Nourhane et BENOUIOUA Raounek
            </Text>

            <Text className="text-base font-semibold text-gray-700">
              Développement et Réalisation technique :
            </Text>
            <Text className="text-xl font-semibold text-[#1E3A8A] text-center mb-3">
              BENZINA Mohamed Amine
            </Text>

            <Text className="text-base font-semibold text-gray-700">
              Proposition du projet :
            </Text>
            <Text className="text-xl font-semibold text-[#1E3A8A] text-center mb-3">
              BOUTAHRAOUI Mohamed
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Apropos;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'

export default function App() {
  return (
    <View style={tw`my-auto mx-auto`}>
      <Text style={tw`text-xl text-blue-500`}>Template Minimum pour lancer une App React Native</Text>
      <Text style={tw`text-xl text-blue-500 text-center`}>Avec une config Tailwind CSS</Text>
      <Text style={tw`text-xl text-blue-500 text-center`}>Node Sass pour gérer les fichiers styles scss</Text>
      <StatusBar style="auto" />
    </View>
  );
}


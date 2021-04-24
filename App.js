import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './src/components/Main';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}


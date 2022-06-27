import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from '@capacitor/core';
import React from 'react';

export default function App() {
  return (
    <WebView 
    style={styles.container}
    source={{uri : 'https://localhost:44375/'}}
    sharedCookiesEnabled ={true}
    thirdPartyCookiesEnabled={true}/>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
//import logo from '../../assets/logo-hub.png';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo-hub.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 18,
  },
  logo: {
    height: 200,
    width: 400,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});


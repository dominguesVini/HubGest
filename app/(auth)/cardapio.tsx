import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardapioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página de Cardápio</Text>
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
});

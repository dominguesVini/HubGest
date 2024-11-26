import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';

type InfoItemProps = {
  iconName: keyof typeof FontAwesome.glyphMap;
  label: string;
  route: string; 
};

const { width, height } = Dimensions.get('window'); // Dimensões da tela

const InfoItem: React.FC<InfoItemProps> = ({ iconName, label, route }) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(route)} // Navega para a rota
    >
      <FontAwesome name={iconName} size={42} color="#003D80" style={styles.icon} />
      <Text style={styles.infoText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 15,  // Ajuste para ter apenas espaçamento vertical
    paddingHorizontal: 0, // Sem padding horizontal
    borderBottomWidth: 2, // Somente borda inferior
    borderBottomColor: 'blue', // Cor da borda inferior
    backgroundColor: '#f0f0f0',
  },
  icon: {
    marginRight: 15, 
  },
  infoText: {
    fontSize: width * 0.045,
    color: 'black',
    textAlign: 'left', 
    flex: 1,
  },
});

export default InfoItem;

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImagemPerfil from '../../components/ImagemPerfil';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // Para os ícones
const PlaceholderImage = require('../../assets/Ellipse.png');
import { useState } from 'react';
import InfoItem from '../../components/InfosPerfil';

export default function PerfilScreen() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <ImagemPerfil imgSource={PlaceholderImage} selectedImage={selectedImage} onPress={pickImageAsync} />
      <View style={styles.containerInfosPessoal}>
      <Text style={styles.nome}>Isabela da Silva Sauro</Text>
      <Text style={styles.departmento}>Tecnologia da Informação</Text>
      </View>
      
      {/* Adicionando os itens com ícones */}
      <View style={styles.infoContainer}>
        <InfoItem iconName="user" label="Informações Pessoais" route='/detalhesPerfil'/>
        <InfoItem iconName="graduation-cap" label="Escolaridade" route='/escolaridade'/>
        <InfoItem iconName="calendar" label="Minhas Férias" route='/ferias'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#003D80',
  },
  containerInfosPessoal: {
    fontSize: 30,
    marginTop: 360,
    fontWeight: 'bold',
    color: '#003D80',
  },
  departmento: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
  },
  infoContainer: {
    marginTop: 100,
    width: '80%',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 40,  // Aumenta o espaçamento entre os itens
    justifyContent: 'flex-start',  // Centraliza os itens horizontalmente
  },
  infoText: {
    fontSize: 24,
    color: 'black',
    marginLeft: 10, 
  },
});

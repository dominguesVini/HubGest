import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImagemPerfil from '../../components/ImagemPerfil';
import InfoItem from '../../components/InfosPerfil';

const PlaceholderImage = require('../../assets/Ellipse.png');

const { width, height } = Dimensions.get('window'); // Dimensões da tela

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
      alert('Você não selecionou nenhuma imagem.');
    }
  };

  return (
    <View style={styles.container}>
      <ImagemPerfil imgSource={PlaceholderImage} selectedImage={selectedImage} onPress={pickImageAsync} />

      <View style={styles.containerInfosPessoal}>
        <Text style={styles.nome}>Isabela da Silva Sauro</Text>
        <Text style={styles.departmento}>Tecnologia da Informação</Text>
      </View>

      <View style={styles.infoContainer}>
        <InfoItem iconName="user" label="Informações Pessoais" route="/detalhesPerfil" />
        <InfoItem iconName="graduation-cap" label="Escolaridade" route="/escolaridade" />
        <InfoItem iconName="calendar" label="Minhas Férias" route="/ferias" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Melhor alinhamento para telas maiores
    paddingTop: height * 0.05, // Espaçamento dinâmico superior
    backgroundColor: '#F5F5F5', // Fundo para destacar o design
  },
  nome: {
    fontSize: width * 0.06, // Fonte responsiva
    fontWeight: 'bold',
    color: '#003D80',
    textAlign: 'center',
    marginTop: height * 0.02,
  },
  containerInfosPessoal: {
    alignItems: 'center',
    marginTop: height * 0.27, // Espaçamento dinâmico abaixo da imagem
  },
  departmento: {
    fontSize: width * 0.045, // Fonte ajustada
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  infoContainer: {
    marginTop: height * 0.05,
    width: '90%', // Ajuste para ocupar a maior parte da tela
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  infoText: {
    fontSize: width * 0.045,
    color: 'black',
    marginLeft: 10,
  },
});

import { Pressable, StyleSheet, Dimensions } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

const { width, height } = Dimensions.get('window'); // Dimensões da tela

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
  onPress?: () => void;
};

export default function ImagemPerfil({ imgSource, selectedImage, onPress }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return (
    <>
      <Pressable onPress={onPress} style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </Pressable>
      <Image
        source={require('../assets/azulPerfil.png')} // Imagem no cabeçalho
        style={styles.headerImage}
      />
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    top: height * 0.08, // Ajuste dinâmico da posição
    zIndex: 1,
  },
  image: {
    width: width * 0.5, // Tamanho proporcional à largura
    height: width * 0.5,
    borderRadius: (width * 0.5) / 2, // Faz com que a imagem seja circular
  },
  headerImage: {
    width: '100%',
    height: height * 0.25, // Altura ajustável
    position: 'absolute',
    top: 0,
    zIndex: 0,
  },
});

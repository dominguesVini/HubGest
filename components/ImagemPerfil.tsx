import { Pressable, StyleSheet } from 'react-native';
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
  onPress?: () => void
};

export default function ImagemPerfil({ imgSource, selectedImage,onPress }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return (
    <>
  <Pressable onPress={onPress} style={styles.image}>
     <Image source={imageSource} style={styles.image} />

  </Pressable>
       <Image
       source={require('../assets/azulPerfil.png')} // URL da imagem no header
       style={styles.headerImage}
     />
     </>
  )

}

const styles = StyleSheet.create({
  image: {
    width: 280,
    height: 280,
    borderRadius: 150,
    position: 'absolute',
    top: 60,
    zIndex: 1,
  },
  headerImage: {
    width: '100%',
    height: 230,
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
});

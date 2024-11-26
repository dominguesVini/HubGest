import { router } from 'expo-router';
import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logo from '../assets/logo-hub.png';

export default function _screen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);


  const handleLogin = (user: string, password: string) => {
    if ((user && user.trim() === '') || (password && password?.trim() === '')) {
      console.log('sss');
     // ToastAndroid.show('Usuário e senha são obrigatórios!', ToastAndroid.SHORT);
      return;
    } else {
      console.log('2222');
      router.push('/(tabs)/inicio');
    }
  }

  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.logo} />  

      <Text style={styles.title}>Entre</Text>
     <Text style={styles.registerText}>
        Novo por aqui?{" "}
      <Text
          style={styles.registerLink}
          onPress={() => router.push("registrar")}
        >
          Registre-se aqui
        </Text>
        </Text>


      <Text style={styles.label}>Endereço de E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="seuemail@exemplo.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha:</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Crie uma senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          textContentType='password'
        />
      </View>

      <Text style={styles.forgotPassword}>Esqueci minha senha</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleLogin(email,password)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 280,
    height: 200,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  registerText: {
    color: '#555',
    marginBottom: 30,
  },
  registerLink: {
    color: '#003366',
    textDecorationLine: 'underline',
  },
  label: {
    alignSelf: 'flex-start',
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  showPassword: {
    padding: 10,
    color: '#333',
  },
  forgotPassword: {
    color: '#003366',
    alignSelf: 'flex-end',
    marginBottom: 30,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

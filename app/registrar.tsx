import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Checkbox from 'expo-checkbox';
import { router } from "expo-router";
import logo from '../assets/logo-hub.png';

export default function RegisterScreen() {
  const [isChecked, setIsChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
      <Image source={logo} style={styles.logo} />  
      </View>

      {/* Form */}
      <Text style={styles.title}>Registre-se</Text>
      <Text style={styles.subTitle}>
        Já possui uma conta?{" "}
        <Text style={styles.linkText} onPress={() => router.push("")}>Entre aqui</Text>
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#B0B0B0"
        />
        <TextInput
          style={styles.input}
          placeholder="seuemail@exemplo.com"
          placeholderTextColor="#B0B0B0"
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Crie uma senha"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Text>{passwordVisible ? "👁️" : "🙈"}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.passwordHint}>
          Escolha uma senha com, no mínimo, 8 caracteres.
        </Text>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>
            Eu aceito os{" "}
            <Text style={styles.linkText}>Termos & Condições</Text> e li e
            entendi a{" "}
            <Text style={styles.linkText}>Política de Privacidade</Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}   onPress={() => router.push("")}>Próximo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoText: {
    fontSize: 32,
    color: "#1A1A1A",
  },
  logoBold: {
    fontWeight: "bold",
    color: "#001F54",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 14,
    color: "#808080",
    marginBottom: 24,
  },
  linkText: {
    color: "#001F54",
    textDecorationLine: "underline",
  },
  form: {
    width: "100%",
  },
  input: {
    height: 50,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
  },
  passwordContainer: {
    position: "relative",
  },
  passwordInput: {
    paddingRight: 40,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 14,
  },
  passwordHint: {
    fontSize: 12,
    color: "#B0B0B0",
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 12,
    color: "#1A1A1A",
    flex: 1,
  },
  button: {
    backgroundColor: "#001F54",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

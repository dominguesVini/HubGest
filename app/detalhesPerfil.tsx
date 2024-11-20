import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function InformacoesPessoaisScreen() {
  const [aposentado, setAposentado] = useState(false); // Estado para "Aposentado"

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Informações Pessoais</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Endereço</Text>
        <TextInput style={styles.input} placeholder="Rua" defaultValue="Rua das Flores" />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Número" defaultValue="123" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Bairro" defaultValue="Centro" />
        </View>
        <TextInput style={styles.input} placeholder="Cidade" defaultValue="São Paulo" />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="CEP" defaultValue="01000-000" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="País" defaultValue="Brasil" />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Telefone</Text>
        <TextInput style={styles.input} placeholder="Celular" defaultValue="(11) 99999-9999" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Estado Civil</Text>
        <TextInput style={styles.input} placeholder="Estado Civil" defaultValue="Solteiro" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Raça/Cor</Text>
        <TextInput style={styles.input} placeholder="Raça/Cor" defaultValue="Pardo" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Aposentado?</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.optionButton, aposentado === false ? styles.optionSelected : null]}
            onPress={() => setAposentado(false)}
          >
            <Text style={[styles.optionText, aposentado === false && styles.optionTextSelected]}>Não</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.optionButton, aposentado === true ? styles.optionSelected : null]}
            onPress={() => setAposentado(true)}
          >
            <Text style={[styles.optionText, aposentado === true && styles.optionTextSelected]}>Sim</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f4f8",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    paddingBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
  },
  optionButton: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#fff",
  },
  optionSelected: {
    backgroundColor: "#0056b3",
  },
  optionText: {
    fontSize: 16,
    color: "#555",
  },
  optionTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#028A51", // Verde
    paddingVertical: 12,
    borderRadius: 30, // Botão arredondado
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

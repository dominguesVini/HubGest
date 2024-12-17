import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";

const DetalhesScreen = () => {
  const { width } = useWindowDimensions();
  const params = useLocalSearchParams();

  // Acesse o item como string e deserializa
  const feriasDetails = params?.itemString ? JSON.parse(params.itemString.toString()) : null;

  // Se feriasDetails não estiver disponível, exiba uma mensagem de carregamento
  if (!feriasDetails) {
    return <Text>Carregando...</Text>;
  }

  const circleSize = width * 0.6; // Tornar o círculo proporcional à largura da tela

  return (
    <>
      <Text style={styles.title}>Detalhes das férias</Text>
      <View style={styles.container}>
        {/* Card de Período Aquisitivo */}
        <View style={styles.card}>
          <Ionicons name="calendar-outline" size={24} color="#0056b3" style={styles.icon} />
          <View style={styles.cardContent}>
            <Text style={styles.periodo}>Período aquisitivo</Text>
            <Text style={styles.saldo}>{feriasDetails.periodo}</Text>
          </View>
        </View>

        {/* Card de Período Concessivo */}
        <View style={styles.card}>
          <Ionicons name="leaf-outline" size={24} color="#0056b3" style={styles.icon} />
          <View style={styles.cardContent}>
            <Text style={styles.periodo}>Período concessivo</Text>
            <Text style={styles.saldo}>{feriasDetails.concessivo}</Text>
          </View>
        </View>

        {/* Círculo com Dias Restantes */}
        <View
          style={[
            styles.circle,
            { width: circleSize, height: circleSize, borderRadius: circleSize / 2 },
          ]}
        >
          <Text style={styles.circleText}>{feriasDetails.saldo}</Text>
          <Text style={styles.circleSubtext}>Dias</Text>
        </View>

        {/* Informações adicionais */}
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>
            <Ionicons name="ellipse" size={10} color="#0056b3" /> Saldo
          </Text>
          <Text style={styles.infoValue}>{feriasDetails.saldo}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>
            <Ionicons name="ellipse" size={10} color="#888" /> Dias usufruídos
          </Text>
          <Text style={styles.infoValue}>{feriasDetails.diasUsufruidos || 0}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>
            <Ionicons name="ellipse" size={10} color="green" /> Dias restantes
          </Text>
          <Text style={styles.infoValue}>{feriasDetails.diasRestantes || 0}</Text>
        </View>
      </View>
    </>
  );
};

export default DetalhesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingHorizontal: "5%", // Espaçamento lateral dinâmico
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#2c3e50",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  periodo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  saldo: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  circle: {
    borderWidth: 10,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
  circleText: {
    fontSize: 24, // Dimensão reduzida para telas menores
    fontWeight: "bold",
    color: "#000",
  },
  circleSubtext: {
    fontSize: 16,
    color: "#888",
  },
  infoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 14,
    color: "#888",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

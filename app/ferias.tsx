import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Importando o hook useRouter

type FeriasItem = {
  id: string;
  periodo: string;
  saldo: number;
};

const feriasData: FeriasItem[] = [
  { id: "1", periodo: "09/03/2023 até 08/03/2024", saldo: 10 },
  { id: "2", periodo: "09/03/2021 até 08/03/2022", saldo: 0 },
  { id: "3", periodo: "09/03/2020 até 08/03/2021", saldo: 0 },
  { id: "4", periodo: "09/03/2018 até 08/03/2019", saldo: 0 },
];

export default function FeriasScreen() {
  const router = useRouter(); // Usando o hook useRouter para acessar a navegação

  const renderFeriasItem = ({ item }: { item: FeriasItem }) => (
    <View style={styles.card}>
      <Ionicons name="calendar-outline" size={24} color="#0056b3" style={styles.icon} />
      <View style={styles.cardContent}>
        <Text style={styles.periodo}>{item.periodo}</Text>
        <Text style={styles.saldo}>Saldo {item.saldo}</Text>
      </View>
      {/* Ao clicar no item, navega para a tela de detalhes, passando o id */}
      <Text
        style={styles.link}
        onPress={() => router.push(`/detalhesFerias`)} // Navegar para a rota de detalhes passando o id
      >
        Ver Detalhes
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Férias</Text>
      <FlatList
        data={feriasData}
        renderItem={renderFeriasItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    padding: 15,
    backgroundColor: "#2c3e50",
  },
  listContainer: {
    padding: 10,
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
  link: {
    color: "#0056b3",
    marginTop: 10,
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#444",
    marginTop: 5,
  },
});

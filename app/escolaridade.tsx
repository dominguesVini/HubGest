import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    title: "Análise de Sistemas",
    description: "Superior - Completo",
    icon: "school-outline",
  },
];

const EscolaridadeScreen = () => {
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Ionicons name={item.icon} size={32} color="#2C3E50" style={styles.icon} />
      <View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Escolaridade</Text>
      </View>

      {/* Lista de escolaridade */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default EscolaridadeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  header: {
    backgroundColor: "#2C3E50",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  list: {
    padding: 15,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
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
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  cardDescription: {
    fontSize: 14,
    color: "#7F8C8D",
    marginTop: 5,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#2C3E50",
    marginTop: 5,
  },
});

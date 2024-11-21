import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

export default function CardapioScreen() {
  const [selectedDate, setSelectedDate] = useState("05/08/2024");

  const menuData: Record<"Caseira" | "Lanches Ceia", string[]> = {
    Caseira: [
      "Suíno ao barbecue",
      "Lasanha de frango",
      "Ovos ao molho de tomate",
      "Risoto de rúcula com tomate seco",
      "Legumes sauté (batatas, cenoura, abobrinha, brócolis com couve-flor)",
      "Salada de agrião",
      "Salada de rabanete",
      "Salada de beterraba com cheiro-verde",
      "Creme cheesecake com calda de goiaba",
    ],
    "Lanches Ceia": [
      "X-bacon",
      "Croissant de chocolate",
      "Sopa de creme de batatas",
      "Salada de alface crespa",
      "Salada de tomate",
      "Sachê de maionese, catchup e mostarda",
      "Café/leite/chá/achocolatado/suco",
    ],
  };

  const renderSection = ({ item }: { item: string }) => (
    <View
      style={[
        styles.card,
        item === "Caseira" ? styles.caseiraCard : styles.lanchesCard,
      ]}
    >
      <View
        style={[
          styles.cardIndicator,
          item === "Caseira"
            ? styles.caseiraIndicator
            : styles.lanchesIndicator,
        ]}
      />
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.header}>Cardápio</Text>

      {/* Seleção de data */}
      <View style={styles.datePicker}>
        <Picker
          selectedValue={selectedDate}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedDate(itemValue)}
        >
          <Picker.Item label="05/08/2024" value="05/08/2024" />
          <Picker.Item label="06/08/2024" value="06/08/2024" />
        </Picker>
      </View>

      {/* Botão de Buscar */}
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchText}>Buscar</Text>
      </TouchableOpacity>

      {/* Destaque */}
      <View style={styles.highlightCard}>
        <Ionicons name="star" size={24} color="#FFD700" />
        <Text style={styles.highlightText}>Sexta do Bife Com Batata Frita</Text>
        <Ionicons name="star" size={24} color="#FFD700" />
      </View>

      {/* Lista de Itens */}
      <FlatList
        data={Object.keys(menuData)} // Renderiza "Caseira" e "Lanches Ceia"
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.sectionTitle}>Tipo de refeição: {item}</Text>
            <FlatList
              data={menuData[item as keyof typeof menuData]}
              keyExtractor={(item, index) => `${item}-${index}`}
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.card,
                    item === "Caseira"
                      ? styles.caseiraCard
                      : styles.lanchesCard,
                  ]}
                >
                  <View
                    style={[
                      styles.cardIndicator,
                      item === "Caseira"
                        ? styles.caseiraIndicator
                        : styles.lanchesIndicator,
                    ]}
                  />
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  datePicker: {
    marginBottom: 10,
  },
  picker: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
  },
  searchButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  searchText: {
    color: "#fff",
    fontWeight: "bold",
  },
  highlightCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF8E1",
    borderWidth: 1,
    borderColor: "#FFD700",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  highlightText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFA000",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2E7D32",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardIndicator: {
    width: 5,
    height: "100%",
    borderRadius: 2,
    marginRight: 10,
  },
  caseiraCard: {
    borderColor: "#4CAF50",
  },
  lanchesCard: {
    borderColor: "#FF5722",
  },
  caseiraIndicator: {
    backgroundColor: "#4CAF50",
  },
  lanchesIndicator: {
    backgroundColor: "#FF5722",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});

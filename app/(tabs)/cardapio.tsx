import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

// Função para formatar a data no formato YYYY-MM-DD
const getFormattedDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getAllDatesOfCurrentMonth = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // Mês atual (0-indexado)

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  let dates = [];
  for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
    dates.push(getFormattedDate(new Date(d))); // Formata e adiciona ao array
  }

  return dates;
};

// Definindo o formato dos dados do cardápio
type MenuData = Record<"Caseira" | "Lanches Ceia", string[]>;

export default function CardapioScreen() {
  // Inicializa o estado com a data atual no formato ISO
  const [selectedDate, setSelectedDate] = useState(getFormattedDate(new Date()));
  const [menuData, setMenuData] = useState<MenuData>({
    Caseira: [],
    "Lanches Ceia": [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    setDates(getAllDatesOfCurrentMonth()); // 🔹 Preenche a lista com todas as datas do mês
  }, []);

  // Função para buscar o cardápio no backend
  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      // Ajuste a URL conforme o endereço do seu backend
      const response = await fetch(`http://192.168.1.31:3000/api/cardapio/${selectedDate}`);

      if (!response.ok) {
        throw new Error("Erro ao buscar o cardápio");
      }

      const data: MenuData = await response.json();

      console.log("data", data);
      setMenuData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  // Verifica se ambos os arrays estão vazios
  const isMenuEmpty = !menuData.Caseira.length && !menuData["Lanches Ceia"].length;

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.header}>Cardápio</Text>

      {/* Seleção de data */}
      {/* 🔹 Picker com todas as datas do mês */}
      <View style={styles.datePicker}>
        <Picker
          selectedValue={selectedDate}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedDate(itemValue)}
        >
          {dates.map((date) => (
            <Picker.Item key={date} label={date} value={date} />
          ))}
        </Picker>
      </View>

      {/* Botão de Buscar */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchText}>Buscar</Text>
      </TouchableOpacity>

      {/* Mensagens de carregamento ou erro */}
      {loading && <ActivityIndicator size="large" color="#007BFF" />}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* Destaque */}
      <View style={styles.highlightCard}>
        <Ionicons name="star" size={24} color="#FFD700" />
        <Text style={styles.highlightText}>Sexta do Bife Com Batata Frita</Text>
        <Ionicons name="star" size={24} color="#FFD700" />
      </View>

      {/* Se não houver cardápio, exibe mensagem; caso contrário, renderiza a lista */}
      {isMenuEmpty ? (
        <View style={styles.noMenuContainer}>
          <Text style={styles.noMenuText}>
            Não há cardápio disponível para a data selecionada
          </Text>
        </View>
      ) : (
        <FlatList
          data={Object.keys(menuData)} // Renderiza as chaves: "Caseira" e "Lanches Ceia"
          keyExtractor={(item) => item}
          renderItem={({ item: tipoRefeicao }) => (
            <View>
              <Text style={styles.sectionTitle}>
                Tipo de refeição: {tipoRefeicao}
              </Text>
              <FlatList
                data={menuData[tipoRefeicao as keyof MenuData]}
                keyExtractor={(item, index) => `${item}-${index}`}
                renderItem={({ item }) => (
                  <View
                    style={[
                      styles.card,
                      tipoRefeicao === "Caseira"
                        ? styles.caseiraCard
                        : styles.lanchesCard,
                    ]}
                  >
                    <View
                      style={[
                        styles.cardIndicator,
                        tipoRefeicao === "Caseira"
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
      )}
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
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
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
  noMenuContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  noMenuText: {
    fontSize: 16,
    color: "#555",
  },
});

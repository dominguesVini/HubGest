import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Importando o hook useRouter

type FeriasItem = {
  id: string;
  periodo: string;
  saldo: number;
};


export default function FeriasScreen() {
  const router = useRouter(); // Usando o hook useRouter para acessar a navegação
  const [feriasData, setFeriasData] = useState<FeriasItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  const fetchFerias = async () => {
    try {
      const response = await fetch("http://192.168.1.31:3000/api/ferias");
      const data = await response.json();
      setFeriasData(data);
      setLoading(true);
    } catch (error) {
      console.error("Erro ao buscar férias:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFerias();
  }, []);

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
        onPress={() =>  {
          const itemString = JSON.stringify(item);
          router.push({ pathname: `/detalhesFerias`, params: { itemString } });
        }
         } // Navegar para a rota de detalhes passando o id
      >
        Ver Detalhes
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Férias</Text>
      {loading ? (
        // Exibir o indicador de carregamento enquanto os dados estão sendo buscados
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0056b3" />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      ) : (<FlatList
        data={feriasData}
        renderItem={renderFeriasItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      /> )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#888",
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

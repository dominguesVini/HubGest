import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView, Dimensions, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type EscolaridadeItem = {
  idCurso: string;
  nome: string;
  tipoCurso: string;
};

const data = [
  {
    id: "1",
    title: "Análise de Sistemas",
    description: "Superior - Completo",
    icon: "school-outline",
  },
];


const EscolaridadeScreen = () => {
  const [escolaridadeData, setEscolaridadeData] = useState<EscolaridadeItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchEscolaridade = async () => {
    try {
      const response = await fetch("http://192.168.1.31:3000/api/cursos/3");
      const data = await response.json();
      setEscolaridadeData(data);
      console.log(data)
      setLoading(true);
    } catch (error) {
      console.error("Erro ao buscar férias:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEscolaridade();
  }, []);


  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Ionicons name={"school-outline"} size={32} color="#2C3E50" style={styles.icon} />
      <View>
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <Text style={styles.cardDescription}>{item.tipoCurso}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Escolaridade</Text>
      </View>

           {loading ? (
             // Exibir o indicador de carregamento enquanto os dados estão sendo buscados
             <View style={styles.loadingContainer}>
               <ActivityIndicator size="large" color="#0056b3" />
               <Text style={styles.loadingText}>Carregando...</Text>
             </View>
           ) :
      <FlatList
      data={escolaridadeData}
        keyExtractor={(item) => item.idCurso}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      /> }
    </SafeAreaView>
  );
};

export default EscolaridadeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#888",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

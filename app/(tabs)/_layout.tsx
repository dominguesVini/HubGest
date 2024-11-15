import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
     <Tabs.Screen
        name="inicio"
        options={{
          headerStyle: {
            backgroundColor: '#334961', // Cor de fundo do header
          },
          headerTintColor: '#fff', // Cor do texto do header
          headerTitleAlign: 'center', // Centraliza o título
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: { height: 60 },
          tabBarLabelStyle: { paddingBottom: 5 },
          title: 'Inicio',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
     <Tabs.Screen
        name="cardapio"
        options={{
          title: 'Cárdapio',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="file-text" color={color} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          headerStyle: {
            backgroundColor: '#334961', // Cor de fundo do header
          },
          headerTintColor: '#fff', // Cor do texto do header
          headerTitleAlign: 'center', // Centraliza o título
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: { height: 60 },
          tabBarLabelStyle: { paddingBottom: 5 },

          title: 'Perfil',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}

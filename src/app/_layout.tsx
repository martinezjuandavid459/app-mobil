import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E10600", // Negro profundo para combinar con el fondo
        },
        headerTintColor: "#FFFFFF", 
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#0D0D12",
        },
        headerShadowVisible: false, 
      }}
    >

      <Stack.Screen
        name="index"
        options={{ title: "Paddock Store" }}
      />
      <Stack.Screen
        name="formulario"
        options={{ title: "Acceso VIP" }}
      />
      <Stack.Screen
        name="resultado"
        options={{ title: "Credencial" }}
      />
      <Stack.Screen
        name="imagenes"
        options={{ title: "Catálogo F1" }}
      />
      <Stack.Screen
        name="contacto"
        options={{ title: "Cuartel General" }}
      />
    </Stack>
  );
}
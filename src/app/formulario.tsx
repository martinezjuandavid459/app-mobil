import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Formulario() {
  const router = useRouter();

  // Estados obligatorios del laboratorio[cite: 1]
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");

  const enviar = () => {
    // Validación obligatoria[cite: 1]
    if (!nombre || !correo || !telefono || !ciudad) {
      alert("Todos los campos son obligatorios para el registro VIP.");
      return;
    }

    // Envío de parámetros[cite: 1]
    router.push({
      pathname: "/resultado",
      params: { nombre, correo, telefono, ciudad },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerForm}>
        <Text style={styles.titulo}>Acceso VIP</Text>
        <Text style={styles.subtitulo}>
          Únete a la lista para lanzamientos exclusivos.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Max Verstappen"
          placeholderTextColor="#4B5563"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="piloto@paddock.com"
          placeholderTextColor="#4B5563"
          keyboardType="email-address"
          autoCapitalize="none"
          value={correo}
          onChangeText={setCorreo}
        />

        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="300 000 0000"
          placeholderTextColor="#4B5563"
          keyboardType="numeric"
          value={telefono}
          onChangeText={setTelefono}
        />

        <Text style={styles.label}>Ciudad Residencia</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Pasto"
          placeholderTextColor="#4B5563"
          value={ciudad}
          onChangeText={setCiudad}
        />

        <Pressable style={styles.boton} onPress={enviar}>
          <Text style={styles.botonTexto}>Solicitar Acceso</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#0D0D12", padding: 20 },
  headerForm: { marginBottom: 24, marginTop: 10 },
  titulo: { fontSize: 28, fontWeight: "bold", color: "#FFFFFF", marginBottom: 4 },
  subtitulo: { color: "#9CA3AF", fontSize: 14 },
  card: {
    backgroundColor: "#1A1A24",
    padding: 24,
    borderRadius: 20,
  },
  label: { color: "#D1D5DB", fontWeight: "600", fontSize: 13, marginBottom: 8, letterSpacing: 0.5 },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.03)", // Fondo de cristal
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    color: "#FFFFFF",
    fontSize: 15,
  },
  boton: {
    backgroundColor: "#E10600",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  botonTexto: { color: "white", fontWeight: "bold", fontSize: 16, letterSpacing: 1 },
});
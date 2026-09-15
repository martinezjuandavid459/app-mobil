import { useLocalSearchParams, useRouter } from "expo-router";
// Agregamos Image y ScrollView a las importaciones
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Resultado() {
  const router = useRouter();
  // Recuperación de parámetros según la guía[cite: 1]
  const { nombre, correo, telefono, ciudad } = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Contenedor del logo para mantener la identidad de la Paddock Store */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/inicio.jpg")}
          style={styles.imagenHero}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.titulo}>Credencial Activa</Text>
      <Text style={styles.subtitulo}>Tus datos han sido verificados.</Text>

      <View style={styles.cardVip}>
        <View style={styles.headerVip}>
          <Text style={styles.textoVip}>PADDOCK PASS</Text>
          <Text style={styles.iconoVip}>🎫</Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.columna}>
            <Text style={styles.label}>Piloto Registrado</Text>
            <Text style={styles.valor}>{nombre}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.columna}>
            <Text style={styles.label}>Correo de Enlace</Text>
            <Text style={styles.valor}>{correo}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.columnaMitad}>
            <Text style={styles.label}>Frecuencia</Text>
            <Text style={styles.valor}>{telefono}</Text>
          </View>
          <View style={styles.columnaMitad}>
            <Text style={styles.label}>Sede</Text>
            <Text style={styles.valor}>{ciudad}</Text>
          </View>
        </View>
      </View>

      <Pressable style={styles.boton} onPress={() => router.replace("/")}>
        <Text style={styles.botonTexto}>Volver al Inicio</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Cambiamos flex: 1 por flexGrow: 1 para el ScrollView
  container: { flexGrow: 1, backgroundColor: "#0D0D12", justifyContent: "center", padding: 20 },
  logoContainer: {
    alignItems: "center",
    marginBottom: 24,
    marginTop: 10,
  },
  imagenHero: {
    width: "70%", // Un poco más pequeño para darle prioridad a la credencial VIP
    height: 90,
  },
  titulo: { fontSize: 26, fontWeight: "bold", color: "#FFFFFF", textAlign: "center", marginBottom: 6 },
  subtitulo: { color: "#9CA3AF", textAlign: "center", marginBottom: 30, fontSize: 14 },
  cardVip: {
    backgroundColor: "#1A1A24",
    borderRadius: 20,
    padding: 24,
    marginBottom: 30,
    borderTopWidth: 4,
    borderColor: "#E10600", // Acento de credencial
  },
  headerVip: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  textoVip: { color: "#E10600", fontWeight: "bold", fontSize: 18, letterSpacing: 2 },
  iconoVip: { fontSize: 24 },
  infoRow: { flexDirection: "row", marginBottom: 18 },
  columna: { flex: 1 },
  columnaMitad: { flex: 1 },
  label: { color: "#6B7280", fontSize: 11, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 },
  valor: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
  boton: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  botonTexto: { color: "#FFFFFF", fontWeight: "bold", fontSize: 15 },
});
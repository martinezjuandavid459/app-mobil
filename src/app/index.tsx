import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

function OpcionMenu({ icono, titulo, descripcion, onPress, variante = "completa" }: any) {
  const isCompleta = variante === "completa";

  return (
    
    <Pressable 
      style={[styles.card, isCompleta ? styles.cardCompleta : styles.cardMitad]} 
      onPress={onPress}
    >
      <View style={styles.cardHeader}>
        <View style={styles.iconoCaja}>
          <Text style={styles.icono}>{icono}</Text>
        </View>
        <Text style={styles.flecha}>↗</Text>
      </View>
      
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo}>{titulo}</Text>
        <Text style={styles.cardDescripcion} numberOfLines={2}>
          {descripcion}
        </Text>
      </View>
    </Pressable>
  );
}

export default function Inicio() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.hero}>

        <Image
          source={require("../../assets/images/inicio.jpg")}
          style={styles.imagenHero}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.etiqueta}>PADDOCK STORE</Text>
          <Text style={styles.titulo}>F1 Official Merch</Text>
          <Text style={styles.subtitulo}>
            Viste la pasión del automovilismo.
          </Text>
        </View>
      </View>

      
      <View style={styles.saludoBox}>
        <View>
          <Text style={styles.saludoTitulo}>Bienvenido al Paddock</Text>
          <Text style={styles.saludoTexto}>¿Que deseas explorar hoy?</Text>
        </View>
        <Text style={styles.avatarTexto}>🏎️</Text>
      </View>


     

      <Text style={styles.seccionTitulo}>Telemetría</Text>

  
      <View style={styles.bentoContainer}>
        <OpcionMenu
          icono="🎟️"
          titulo="Membresía VIP"
          descripcion="Regístrate para acceso anticipado."
          variante="completa"
          onPress={() => router.push("/formulario")}
        />
        
        <OpcionMenu
          icono="🧢"
          titulo="Catálogo"
          descripcion="Gorras y chaquetas."
          variante="mitad"
          onPress={() => router.push("/imagenes")}
        />
        
        <OpcionMenu
          icono="📍"
          titulo="Sedes"
          descripcion="Nuestras tiendas."
          variante="mitad"
          onPress={() => router.push("/contacto")}
        />
      </View>


      <View style={styles.destacado}>
        <Text style={styles.destacadoEmoji}>⭐</Text>
        <View style={styles.destacadoInfo}>
          <Text style={styles.destacadoTitulo}>Beneficios para miembros VIP</Text>
          <Text style={styles.destacadoTexto}>
            Acceso anticipado a eventos y productos exclusivos.
          </Text>
        </View>
      </View>

      <Text style={styles.footer}>
        ING Juan David Martinez · Desarrollo Móvil
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0D0D12",
    padding: 18,
  },
  hero: {
    height: 220,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  imagenHero: {
    width: "100%",
    height: "100%",
    opacity: 0.7, 
  },
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 22,
  },
  etiqueta: {
    color: "#E10600",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 6,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitulo: {
    color: "#FFFFFF",
    fontSize: 13,
  },
  saludoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  saludoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  saludoTexto: {
    color: "#9CA3AF",
    fontSize: 14,
    marginTop: 2,
  },
  avatarTexto: {
    fontSize: 32,
  },
  resumen: {
    backgroundColor: "#1A1A24",
    borderRadius: 16,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
  },
  resumenItem: {
    flex: 1,
    alignItems: "center",
  },
  resumenNumero: {
    color: "#E10600",
    fontSize: 20,
    fontWeight: "bold",
  },
  resumenTexto: {
    color: "#9CA3AF",
    fontSize: 11,
    marginTop: 4,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  separador: {
    width: 1,
    height: 30,
    backgroundColor: "#2D2D3A",
  },
  seccionTitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9CA3AF",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  
  /* ESTILOS DEL NUEVO BENTO BOX */
  bentoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#1A1A24",
    borderRadius: 20,
    padding: 18,
    marginBottom: 12,
    justifyContent: "space-between",
  },
  cardCompleta: {
    width: "100%",
    height: 120,
  },
  cardMitad: {
    width: "48%", // Esto pone dos tarjetas en la misma fila
    height: 160,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  iconoCaja: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(225, 6, 0, 0.15)", // Rojo sutil
    justifyContent: "center",
    alignItems: "center",
  },
  icono: {
    fontSize: 18,
  },
  flecha: {
    fontSize: 18,
    color: "#4B5563",
    fontWeight: "bold",
  },
  cardInfo: {
    marginTop: 10,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  cardDescripcion: {
    color: "#9CA3AF",
    fontSize: 12,
    lineHeight: 16,
  },
  /* FIN BENTO BOX */

  destacado: {
    backgroundColor: "#E10600", 
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  destacadoEmoji: {
    fontSize: 30,
    marginRight: 16,
  },
  destacadoInfo: {
    flex: 1,
  },
  destacadoTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  destacadoTexto: {
    color: "#FFD1D1",
    fontSize: 13,
    lineHeight: 18,
  },
  footer: {
    textAlign: "center",
    color: "#4B5563",
    fontSize: 12,
    marginTop: 24,
    marginBottom: 12,
  },
});
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Contacto() {
  return (
    
    
    <ScrollView contentContainerStyle={styles.container}>
      
     
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/inicio.jpg")}
          style={styles.imagenHero}
          resizeMode="contain" 
        />
      </View>

      <Text style={styles.titulo}>Sobre nosotros</Text>
      <Text style={styles.subtitulo}>¿Dónde estamos ubicados?</Text>

      <View style={styles.card}>
       
        <View style={styles.datoBloque}>
          <Text style={styles.label}>Universidad</Text>
          <Text style={styles.valor}>Universidad CESMAG</Text>
        </View>

        <View style={styles.datoBloque}>
          <Text style={styles.label}>Programa Técnico</Text>
          <Text style={styles.valor}>Ingeniería de Sistemas</Text>
        </View>

        <View style={styles.datoBloque}>
          <Text style={styles.label}>Asignatura</Text>
          <Text style={styles.valor}>Desarrollo Móvil</Text>
        </View>
        
        <View style={styles.lineaDivisoria} />

        <View style={styles.datoBloque}>
          <Text style={styles.label}>Correo de Soporte</Text>
          <Text style={styles.valor}>paddock@store.com</Text>
        </View>

        <View style={styles.datoBloque}>
          <Text style={styles.label}>Ciudad Base</Text>
          <Text style={styles.valor}>Pasto(Nariño)</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    backgroundColor: "#0D0D12", 
    justifyContent: "center", 
    padding: 20 
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  imagenHero: {
    width: "80%", 
    height: 120, 
    
  },
  titulo: { 
    fontSize: 26, 
    fontWeight: "bold", 
    textAlign: "center", 
    color: "#FFFFFF", 
    marginBottom: 4 
  },
  subtitulo: { 
    textAlign: "center", 
    color: "#9CA3AF", 
    marginBottom: 30, 
    fontSize: 14 
  },
  card: {
    backgroundColor: "#1A1A24",
    padding: 24,
    borderRadius: 20,
    marginBottom: 20,
  },
  datoBloque: { marginBottom: 18 },
  label: { 
    color: "#E10600", 
    fontSize: 11, 
    fontWeight: "bold", 
    textTransform: "uppercase", 
    letterSpacing: 1, 
    marginBottom: 4 
  },
  valor: { 
    color: "#FFFFFF", 
    fontSize: 16, 
    fontWeight: "600" 
  },
  lineaDivisoria: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    marginVertical: 10,
    marginBottom: 20,
  },
});
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Imagenes() {
  // 1. Arreglo de Equipos (Para el carrusel horizontal)
  const equipos = [
    {
      id: 101,
      nombre: "Scuderia Ferrari",
      tag: "Forza Ferrari",
      uri: "https://www.marca.com/multimedia/graficos/motor/2026/ferrari/web/perfil2025.jpg", 
    },
    {
      id: 102,
      nombre: "Red Bull Racing",
      tag: "Charge On",
      uri: "https://newsgpcdn.vshcdn.net/i/images/5022/snimek-obrazovky-2026-01-26-v-8-48-57_f.png",
    },
    {
      id: 103,
      nombre: "McLaren F1",
      tag: "Papaya Rules",
      uri: "https://cdn-7.motorsport.com/images/amp/0qgPdxkY/s6/diseno-del-mclaren-mcl40.jpg",
    },
    {
      id: 104,
      nombre: "Mercedes-AMG",
      tag: "Silver Arrows",
      uri: "https://objetos-xlk.estaticos-marca.com/uploads/2026/01/22/6971eee7eef61.jpeg",
    },
  ];

  // 2. Arreglo de Pilotos (Para la lista vertical principal)
  const pilotos = [
    {
      id: 1,
      nombre: "Lewis Hamilton",
      equipo: "Scuderia Ferrari",
      numero: "44",
      
      articulo: "articulos oficiales de el 7 veces Campeón del Mundo",
      uri: "https://external-preview.redd.it/2026-ferrari-season-preview-can-lewis-hamilton-finally-v0-MDYqv0s7zmpDsDeYww_eVUjtTr80KqR9meUUIl9fc_w.jpeg?auto=webp&s=5580a26417edd1f30e9ad5236e7494bdb5d421ee",
    },
    {
      id: 2,
      nombre: "Max Verstappen",
      equipo: "Red Bull Racing",
      numero: "3",
      
      articulo: "Camiseta del 4 veces Campeón del Mundo",
      uri: "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2026/1/16/sy8pllogaprdsnhtwge4/max-verstappen-yas-marina-2025",
    },
    {
      id: 3,
      nombre: "Lando Norris",
      equipo: "McLaren",
      numero: "1",
      
      articulo: "Articulos del actual campeón de la F1",
      uri: "https://cdn-8.motorsport.com/images/amp/YP7rewQ2/s1000/lando-norris-mclaren.webp",
    },
    {
      id: 4,
      nombre: "Fernando Alonso",
      equipo: "Aston Martin",
      numero: "14",
      
      articulo: "Articulos del piloto español bicampeón del mundo",
      uri: "https://automundo.com.ar/wp-content/uploads/2026/02/Fernando-Alonso-1.webp",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.tituloHeader}>Parrilla Actual</Text>
      <Text style={styles.subtituloHeader}>Elige tus colores para esta temporada.</Text>

      {/* SECCIÓN 1: CARRUSEL DE EQUIPOS */}
      <View style={styles.seccionContenedor}>
        <Text style={styles.tituloSeccion}>Escuderías</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.carrusel}
        >
          {equipos.map((equipo) => (
            <View style={styles.cardEquipo} key={equipo.id}>
              <Image source={{ uri: equipo.uri }} style={styles.imagenEquipo} />
              <View style={styles.overlayOscuro} />
              <View style={styles.infoEquipo}>
                <Text style={styles.nombreEquipo}>{equipo.nombre}</Text>
                <Text style={styles.tagEquipo}>{equipo.tag}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* SECCIÓN 2: LISTA DE PILOTOS OBLIGATORIA DEL LABORATORIO */}
      <View style={styles.seccionContenedor}>
        <Text style={styles.tituloSeccion}>Colección por Piloto</Text>
        
        {pilotos.map((piloto) => (
          <View style={styles.cardPiloto} key={piloto.id}>
            <Image source={{ uri: piloto.uri }} style={styles.imagenPiloto} />
            <View style={styles.overlayOscuro} />
            
            {/* Número del piloto flotante */}
            <View style={styles.insigniaNumero}>
              <Text style={styles.textoNumero}>{piloto.numero}</Text>
            </View>

            <View style={styles.infoPiloto}>
              <View>
                <Text style={styles.nombrePiloto}>{piloto.nombre}</Text>
                <Text style={styles.equipoPiloto}>{piloto.equipo}</Text>
                <Text style={styles.articuloPiloto}>{piloto.articulo}</Text>
              </View>
              
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    paddingTop: 10, 
    paddingBottom: 40,
    backgroundColor: "#0D0D12" 
  },
  tituloHeader: { 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "#FFFFFF", 
    paddingHorizontal: 20 
  },
  subtituloHeader: { 
    color: "#9CA3AF", 
    fontSize: 14, 
    marginBottom: 20,
    paddingHorizontal: 20 
  },
  seccionContenedor: {
    marginBottom: 24,
  },
  tituloSeccion: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  
  // ESTILOS CARRUSEL EQUIPOS
  carrusel: {
    paddingLeft: 20, // Da un margen inicial al carrusel
  },
  cardEquipo: {
    width: 140,
    height: 140,
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 16,
    backgroundColor: "#1A1A24",
    position: "relative",
  },
  imagenEquipo: {
    width: "100%",
    height: "100%",
  },
  infoEquipo: {
    position: "absolute",
    bottom: 12,
    left: 12,
    right: 12,
  },
  nombreEquipo: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 13,
  },
  tagEquipo: {
    color: "#D1D5DB",
    fontSize: 10,
    marginTop: 2,
  },

  // ESTILOS LISTA PILOTOS
  cardPiloto: {
    backgroundColor: "#1A1A24",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    marginHorizontal: 20,
    position: "relative",
    borderLeftWidth: 4,
    borderColor: "#E10600", // Acento rojo Racing
  },
  imagenPiloto: { 
    width: "100%", 
    height: 200 
  },
  overlayOscuro: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(13, 13, 18, 0.4)", // Solución aplicada sin absoluteFillObject
  },
  insigniaNumero: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "rgba(225, 6, 0, 0.9)", // Rojo translúcido
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  textoNumero: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
    fontStyle: "italic",
  },
  infoPiloto: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  nombrePiloto: { 
    color: "#FFFFFF", 
    fontWeight: "bold", 
    fontSize: 20,
    marginBottom: 2,
  },
  equipoPiloto: {
    color: "#9CA3AF",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  articuloPiloto: {
    color: "#D1D5DB",
    fontSize: 13,
  },
  cajaPrecio: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  precioPiloto: { 
    color: "#FFFFFF", 
    fontWeight: "bold", 
    fontSize: 16 
  },
});
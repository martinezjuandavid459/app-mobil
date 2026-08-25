import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
export default function HomeScreen(){
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>
      Desarrollo mobil
    </Text>
    <Text style={styles.texto}>
      Mi primera App
    </Text>
    <Text style={styles.texto}>
      ingenieria de sistemas
    </Text>
    <Text style={styles.mensaje}>
      Bienvenido a mi primera aplicación en React Native
    </Text>
    <Image
       source={{
         uri: 'https://hips.hearstapps.com/hmg-prod/images/2025-chevrolet-corvette-zr1-115-66a156005fa2c.jpg?crop=0.667xw:1.00xh;0.174xw,0&resize=1200:*https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500',
          }}
       style={styles.imagenCafe}
       />

    <Pressable>
      <View style={{backgroundColor: 'blue', padding: 10, marginTop: 20}}>
        <Text style={{color: 'white', fontSize: 20}}>Presioname</Text>
      </View>
    </Pressable>
    </View>



  );
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    titulo:{
      fontSize: 30,
      fontWeight: 'bold',
    },
    texto:{
      fontSize: 20,
      fontWeight: 'normal',
      marginTop: 10,
    },
    mensaje:{
      fontSize: 15,
      fontWeight: 'normal',
      marginTop: 10,
    },
      imagenCafe: {
    width: '100%',
    height: '30%',
  },


  




  }
);
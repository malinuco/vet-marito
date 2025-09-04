import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';
import Formulario from './src/components/Formulario';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        App de Citas Médicas {'\n'}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btnNC}
      >
        <Text style={styles.btntextNC}>Nueva Cita</Text>
      </Pressable>
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e293b', // Fondo oscuro moderno
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  title: {
    textAlign: 'center',
    fontSize: 34,
    color: '#f1f5f9',
    fontWeight: '700',
    marginBottom: 10,
    letterSpacing: 1,
    textShadowColor: '#0ea5e9',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  titleBold: {
    fontWeight: '900',
    color: '#38bdf8',
    fontSize: 36,
    textShadowColor: '#0ea5e9',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  btnNC: {
    backgroundColor: '#0ea5e9',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '60%',
    alignSelf: 'center',
    marginTop: 30,
    elevation: 5,
    shadowColor: '#38bdf8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  btntextNC: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 22,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
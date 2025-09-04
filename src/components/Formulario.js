import {Text, Modal, StyleSheet, View, TextInput, ScrollView, SafeAreaView, Pressable } from 'react-native'
import React from 'react'

export default function Form({modalVisible, setModalVisible}) {

  return (
        <Modal animationType="fade" visible={modalVisible}>
              <SafeAreaView style={styles.container}>
                <ScrollView>
                  <Text style={styles.titulo}>
                    Nueva {''} <Text style={styles.tituloBold}>Cita</Text>{''}
                </Text>
                <View style={styles.field}>
                  <Text style={styles.label}>Nombre del paciente</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Paciente"
                        placeholderTextColor="#000000ff"
                    />
                    <Text style={styles.label}>Nombre del propietario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Propietario"
                        placeholderTextColor="#000000ff"
                    />
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Numero de Celular</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Numero de Celular"
                    placeholderTextColor="#000000ff"
                    keyboardType='phone-pad'
                  />
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Correo Electronico</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Correo Electronico"
                    placeholderTextColor="#000000ff"
                    keyboardType='email-address'
                  />
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Sintomas</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Sintomas"
                    placeholderTextColor="#000000ff"
                  />
                </View>
                <Pressable style={styles.btn_cerrar} 
                    onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.btn_cerrar}>Cerrar</Text>
                  
                </Pressable>
                </ScrollView>
              </SafeAreaView>
        </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Fondo oscuro elegante
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginTop: 36,
    letterSpacing: 1,
    textShadowColor: '#0ea5e9',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  tituloBold: {
    fontWeight: '900',
    fontSize: 30,
    color: '#fbbf24',
    textShadowColor: '#f59e42',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  field: {
    marginVertical: 14,
    marginHorizontal: 28,
    backgroundColor: '#1e293b',
    borderRadius: 18,
    padding: 16,
    shadowColor: '#38bdf8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    marginBottom: 18,
  },
  label: {
    color: '#f1f5f9',
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#f1f5f9',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    fontSize: 17,
    color: '#0f172a',
    borderWidth: 1,
    borderColor: '#38bdf8',
    shadowColor: '#38bdf8',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  btn_cerrar: {
    backgroundColor: '#38bdf8',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '60%',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#0ea5e9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '800',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
import { Text, Modal, StyleSheet, View, TextInput, ScrollView, SafeAreaView, Pressable } from 'react-native';
import React from 'react';

export default function Formulario({ modalVisible, setModalVisible }) {
  return (
    <Modal animationType="fade" visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>
            Inscripción al <Text style={styles.tituloBold}>Instituto Tecnológico Superior Japón</Text>
          </Text>
          <View style={styles.field}>
            <Text style={styles.label}>Nombre Completo</Text>
            <TextInput
              style={styles.input}
              placeholder="Tu nombre completo"
              placeholderTextColor="#a3a3a3"
            />
            <Text style={styles.label}>Correo Electrónico</Text>
            <TextInput
              style={styles.input}
              placeholder="ejemplo@email.com"
              placeholderTextColor="#a3a3a3"
              keyboardType="email-address"
            />
            <Text style={styles.label}>Número de Celular</Text>
            <TextInput
              style={styles.input}
              placeholder="Tu número de celular"
              placeholderTextColor="#a3a3a3"
              keyboardType="phone-pad"
            />
            <Text style={styles.label}>¿Por qué te interesa el Instituto?</Text>
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Cuéntanos tu interés (opcional)"
              placeholderTextColor="#a3a3a3"
              multiline
            />
          </View>
          <Pressable style={styles.btn_enviar}>
            <Text style={styles.btn_enviar_text}>Enviar Inscripción</Text>
          </Pressable>
          <Pressable style={styles.btn_cerrar} onPress={() => setModalVisible(false)}>
            <Text style={styles.btn_cerrar_text}>Cerrar</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1333', // Morado oscuro elegante
  },
  titulo: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 36,
    letterSpacing: 1,
    textShadowColor: '#f7e017',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
    marginBottom: 10,
  },
  tituloBold: {
    fontWeight: '900',
    fontSize: 28,
    color: '#f7e017',
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  field: {
    marginVertical: 18,
    marginHorizontal: 24,
    backgroundColor: '#24124d',
    borderRadius: 18,
    padding: 18,
    shadowColor: '#f7e017',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 8,
    borderWidth: 1.5,
    borderColor: '#f7e017',
  },
  label: {
    color: '#f7e017',
    marginBottom: 8,
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
    fontSize: 16,
    color: '#1a1333',
    borderWidth: 1,
    borderColor: '#f7e017',
  },
  btn_enviar: {
    backgroundColor: '#6d28d9',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 32,
    alignSelf: 'center',
    marginTop: 18,
    marginBottom: 10,
    elevation: 6,
    shadowColor: '#f7e017',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    borderWidth: 2,
    borderColor: '#f7e017',
  },
  btn_enviar_text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 18,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textShadowColor: '#f7e017',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 6,
  },
  btn_cerrar: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '60%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#6d28d9',
  },
  btn_cerrar_text: {
    color: '#6d28d9',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 17,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable, View, Image, ScrollView, Linking } from 'react-native';
import Formulario from './src/components/Formulario';

const TABS = [
  { key: 'info', label: 'Información' },
  { key: 'mision', label: 'Misión' },
  { key: 'vision', label: 'Visión' },
  { key: 'razones', label: '¿Por qué elegirnos?' },
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tab, setTab] = useState('info');

  const renderTabContent = () => {
    switch (tab) {
      case 'info':
        return (
          <>
            {/* Quiénes Somos */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>¿Quiénes Somos?</Text>
              <Text style={styles.sectionText}>
                El Instituto Tecnológico Superior Japón (ITSJAPÓN) es una institución de educación superior tecnológica ubicada en Quito, Ecuador. Desde 1985, formamos profesionales altamente capacitados en áreas técnicas y tecnológicas, contribuyendo al desarrollo productivo y social del país.
                {"\n\n"}
                Ofrecemos carreras tecnológicas de tercer nivel, avaladas por la SENESCYT, con enfoque práctico, innovación y vinculación con el sector productivo.
              </Text>
            </View>
            {/* Oferta Académica */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Oferta Académica</Text>
              <Text style={styles.sectionText}>
                • Tecnología Superior en Desarrollo de Software{"\n"}
                • Tecnología Superior en Electromecánica{"\n"}
                • Tecnología Superior en Seguridad Industrial{"\n"}
                • Tecnología Superior en Mantenimiento Industrial{"\n"}
                • Tecnología Superior en Electricidad Industrial
              </Text>
            </View>
            {/* Servicios y Beneficios */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Servicios y Beneficios</Text>
              <Text style={styles.sectionText}>
                • Laboratorios modernos y equipados{"\n"}
                • Prácticas preprofesionales y vinculación con empresas{"\n"}
                • Bolsa de empleo y seguimiento a graduados{"\n"}
                • Programas de becas y ayudas económicas{"\n"}
                • Actividades extracurriculares y deportivas
              </Text>
            </View>
            {/* Testimonios */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Testimonios</Text>
              <Text style={styles.sectionText}>
                “Gracias al ITSJAPÓN conseguí mi primer empleo en una empresa tecnológica reconocida.”{"\n"}— Juan P., graduado de Software
                {"\n\n"}
                “La formación práctica y el apoyo de los docentes me permitieron crecer profesionalmente.”{"\n"}— María L., graduada de Electromecánica
              </Text>
            </View>
          </>
        );
      case 'mision':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Misión</Text>
            <Text style={styles.sectionText}>
              Formar profesionales líderes, innovadores y comprometidos con el desarrollo tecnológico y social del país, a través de una educación superior de calidad, orientada a la excelencia, la ética y la vinculación con el sector productivo.
            </Text>
          </View>
        );
      case 'vision':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Visión</Text>
            <Text style={styles.sectionText}>
              Ser un referente nacional en educación tecnológica superior, reconocidos por la calidad académica, la innovación y el impacto positivo en la sociedad y el sector productivo ecuatoriano.
            </Text>
          </View>
        );
      case 'razones':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>¿Por qué elegir el ITSJAPÓN?</Text>
            <Text style={styles.sectionText}>
              • Carreras tecnológicas con alta demanda laboral.{"\n"}
              • Docentes calificados y con experiencia en la industria.{"\n"}
              • Prácticas profesionales y vinculación directa con empresas.{"\n"}
              • Infraestructura moderna y laboratorios equipados.{"\n"}
              • Apoyo en empleabilidad y desarrollo profesional.{"\n"}
              • Becas y ayudas económicas para estudiantes destacados.
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('./assets/icon.jpg')}
            style={styles.logo}
          />
          <Text style={styles.title}>
            INSTITUTO TECNOLÓGICO SUPERIOR JAPÓN
          </Text>
          <Text style={styles.subtitle}>
            Educación Tecnológica para el Futuro del Ecuador
          </Text>
        </View>

        {/* Tab Buttons */}
        <View style={styles.tabBar}>
          {TABS.map((t) => (
            <Pressable
              key={t.key}
              style={[
                styles.tabBtn,
                tab === t.key && styles.tabBtnActive
              ]}
              onPress={() => setTab(t.key)}
            >
              <Text
                style={[
                  styles.tabBtnText,
                  tab === t.key && styles.tabBtnTextActive
                ]}
              >
                {t.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Tab Content */}
        {renderTabContent()}

        {/* Contacto */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contáctanos</Text>
          <Text style={styles.sectionText}>
            Dirección: Av. Amazonas N34-332 y Av. Atahualpa, Quito, Ecuador{"\n"}
            Teléfono: +593 2 225 1234{"\n"}
            Email: info@itsjapon.edu.ec{"\n"}
            Horario de atención: Lunes a Viernes, 09h00 a 18h00
          </Text>
          <Pressable
            style={styles.btn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.btnText}>Solicita más información</Text>
          </Pressable>
          <Pressable
            style={[styles.btn, { backgroundColor: '#FFD600', borderColor: '#4B3869', marginTop: 10 }]}
            onPress={() => Linking.openURL('https://itsjapon.edu.ec/')}
          >
            <Text style={[styles.btnText, { color: '#4B3869', textShadowColor: '#fff' }]}>Visita nuestra web</Text>
          </Pressable>
        </View>

        <Formulario
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18122B',
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    backgroundColor: '#231942',
    paddingVertical: 36,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    shadowColor: '#FFD600',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#FFD600',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 2,
    textShadowColor: '#FFD600',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFD600',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 6,
    fontWeight: '600',
    letterSpacing: 0.5,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#251B37',
    borderRadius: 18,
    marginHorizontal: 18,
    marginBottom: 18,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#FFD600',
  },
  tabBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  tabBtnActive: {
    backgroundColor: '#FFD600',
  },
  tabBtnText: {
    color: '#FFD600',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
  tabBtnTextActive: {
    color: '#4B3869',
  },
  section: {
    backgroundColor: '#251B37',
    borderRadius: 16,
    marginHorizontal: 18,
    marginVertical: 12,
    padding: 20,
    shadowColor: '#FFD600',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#FFD600',
  },
  sectionTitle: {
    color: '#FFD600',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: 1,
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  sectionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  btn: {
    backgroundColor: '#4B3869',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    alignSelf: 'center',
    marginTop: 18,
    elevation: 3,
    shadowColor: '#FFD600',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    borderWidth: 1.5,
    borderColor: '#FFD600',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
    textShadowColor: '#FFD600',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
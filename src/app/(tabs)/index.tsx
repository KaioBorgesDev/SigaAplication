import { HelloWave } from '@/src/components/HelloWave';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';
import { Link } from 'expo-router';
import { Image, StyleSheet, Platform } from 'react-native';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">SIGA v2.0</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Finalidade:</ThemedText>
        <ThemedText>
          App produzido por <ThemedText type="defaultSemiBold">Kaio Eduardo Borges</ThemedText>, com a finalidade de melhorar a experiência do aluno fatecano. 
        </ThemedText>
      </ThemedView>
      <ThemedText type="defaultSemiBold">
        Codigo em Open Source, disponivel no GitHub. Não baixe de fontes desconhecidas, não me responsabilizo por qualquer tipo de incidente.
      </ThemedText>
      <ThemedText type="defaultSemiBold">
      <Link href={"https://github.com/KaioBorgesDev/ProjectSIGA"}>Veja o <ThemedText type='link'>
      Link do repostório</ThemedText>.
      </Link>
      </ThemedText>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

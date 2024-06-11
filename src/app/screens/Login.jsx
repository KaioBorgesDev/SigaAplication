import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ParallaxScrollView from '@/src/components/ParallaxScrollView'; 
import { ThemedText } from '@/src/components/ThemedText'; 
import { ThemedView } from '@/src/components/ThemedView'; 
import CustomTextInput from '@/src/components/CustomTextInput';


const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      
      const formData = new FormData();
      formData.append('id', username); // Se o nome de usuário for o ID, ajuste aqui
      formData.append('password', password);
      
      const response = await axios.post('http://192.168.1.5:80/api/session/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer d6ae5d9bcb7e4885517c3f60cf11da66',
        },
        
      });
     
      const session = response.data.session_id;
      if (response.data.message) {
        alert("Sessao iniciada.")
        onLoginSuccess(session);   
      } else {
        
        alert('Erro', 'Não foi possível te achar. Verifique seus dados.');
      }
    } catch (error) {
      alert('Erro 500', 'Login mal sucedido, tente novamente mais tarde.');
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="umbrella" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Login</ThemedText>
      </ThemedView>
      <ThemedText>Coloque seu usuário e senha do SIGA.</ThemedText>
      <CustomTextInput
        label="Usuário"
        placeholder="Somente números."
        value={username}
        onChangeText={setUsername}
        security={false}
      />
      <CustomTextInput
        label="Senha"
        placeholder="Sua senha."
        value={password}
        onChangeText={setPassword}
        security = {true}
      />
      <TouchableOpacity style={styles.button} onPressIn={handleLogin} >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8
  },
  text: {
    fontSize: 18,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Login;

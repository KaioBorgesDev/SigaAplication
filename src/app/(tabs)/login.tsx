import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LoginScreen from '../screens/Login';
import Login from '../screens/Login';

export default function App() {
  const [sessao, setSession] = useState(null);

  const handleLoginSuccess = () => {
    setSession(sessao);
  };

  if (!sessao) {
    
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo! Sessão ativa.</Text>
      <Text>Token da Sessão: {sessao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 20,
    marginBottom: 10,
  },
});

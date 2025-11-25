import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';

export default function Register() {
  const { login } = useAuth();
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/auth/register', { nombre, correo, contrasena });
      login(res.data.accessToken, res.data.refreshToken);
      router.replace('/dashboard');
    } catch (error) {
      alert('Error al registrar el usuario');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.input} />
      <TextInput placeholder="Correo" value={correo} onChangeText={setCorreo} style={styles.input} />
      <TextInput placeholder="Contraseña" secureTextEntry value={contrasena} onChangeText={setContrasena} style={styles.input} />
      <Button title="Crear Cuenta" onPress={handleSubmit} />
      <Text onPress={() => router.push('/login')} style={styles.link}>Ya tengo cuenta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  link: { color: '#3A73D1', marginTop: 10, textAlign: 'center' }
});

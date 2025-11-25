import { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', {
        correo,
        contrasena,
      });
      login(res.data.accessToken, res.data.refreshToken);
      router.replace('/dashboard'); // Redirige al dashboard
    } catch (err) {
      alert('Correo o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
        style={styles.input}
      />
      <Button title="Iniciar Sesión" onPress={handleSubmit} />
      <Text style={styles.register} onPress={() => router.push('/register')}>
        Crear cuenta
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 },
  register: { color: 'blue', marginTop: 15, textAlign: 'center' },
});

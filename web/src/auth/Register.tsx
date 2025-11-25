import { useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

export default function Register() {
  const { login } = useAuth();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/register", {
        nombre,
        correo,
        contrasena
      });
      login(res.data.accessToken, res.data.refreshToken);
    } catch (error) {
      alert("Error al registrar el usuario");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Registro</h2>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} style={{ width: "100%", padding: "10px", margin: "10px 0" }} />
      <input placeholder="Correo" value={correo} onChange={e => setCorreo(e.target.value)} style={{ width: "100%", padding: "10px", margin: "10px 0" }} />
      <input type="password" placeholder="Contraseña" value={contrasena} onChange={e => setContrasena(e.target.value)} style={{ width: "100%", padding: "10px", margin: "10px 0" }} />
      <button type="submit" style={{ padding: "10px 20px", background: "#3A73D1", color: "#fff" }}>Crear Cuenta</button>
    </form>
  );
}

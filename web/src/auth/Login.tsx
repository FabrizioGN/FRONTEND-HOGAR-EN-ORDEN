import { useState } from "react";
import { Link } from "react-router-dom"; // <- IMPORTAR Link
import axios from "axios";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        correo,
        contrasena
      });
      login(res.data.accessToken, res.data.refreshToken);
    } catch (error) {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>
      <input
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <button type="submit" style={{ padding: "10px 20px", background: "#3A73D1", color: "#fff" }}>
        Iniciar Sesión
      </button>

      {/* Link a Register */}
      <p style={{ marginTop: "15px" }}>
        ¿No tienes cuenta? <Link to="/register">Crear nueva</Link>
      </p>
    </form>
  );
}

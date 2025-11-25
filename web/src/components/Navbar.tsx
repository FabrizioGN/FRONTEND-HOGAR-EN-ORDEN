import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav style={{ padding: "10px", background: "#3A73D1", color: "#fff" }}>
      <span>Hogar en Orden</span>
      <button onClick={logout} style={{ float: "right", background: "#fff", color: "#3A73D1", border: "none", padding: "5px 10px", borderRadius: 4 }}>
        Cerrar sesión
      </button>
    </nav>
  );
}

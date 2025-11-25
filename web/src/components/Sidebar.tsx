import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{ width: "200px", background: "#F3F3F3", padding: "10px" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/tareas">Tareas</Link></li>
        <li><Link to="/compras">Compras</Link></li>
        <li><Link to="/gastos">Gastos</Link></li>
        <li><Link to="/miembros">Miembros</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
    </aside>
  );
}

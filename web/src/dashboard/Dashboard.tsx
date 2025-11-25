import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ padding: "20px" }}>
          <h1>Bienvenido al Dashboard</h1>
          <p>Aquí irá el resumen del hogar (tareas, gastos, listas).</p>
        </main>
      </div>
    </div>
  );
}

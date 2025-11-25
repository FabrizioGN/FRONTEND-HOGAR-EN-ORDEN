import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">HogarEnOrden</h2>
        <nav>
          <ul>
            <li className="mb-3 hover:bg-gray-700 p-2 rounded">
              <a href="/dashboard/home">Home</a>
            </li>
            <li className="mb-3 hover:bg-gray-700 p-2 rounded">
              <a href="/dashboard/tareas">Tareas</a>
            </li>
            <li className="mb-3 hover:bg-gray-700 p-2 rounded">
              <a href="/dashboard/perfil">Perfil</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>

        {/* Aquí se renderizan las páginas internas */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

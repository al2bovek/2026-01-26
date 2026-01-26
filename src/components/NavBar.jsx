import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <NavLink to="/" className="text-xl font-bold">
        Task Manager
      </NavLink>

      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-300"
          }
        >
          Add Task
        </NavLink>
      </div>
    </nav>
  );
}

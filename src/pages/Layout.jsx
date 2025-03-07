import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Eugenio AI</div>
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/Home" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-500 border-b-2 border-blue-500" 
                    : "text-gray-600 hover:text-blue-500 transition duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/Login" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-500 border-b-2 border-blue-500" 
                    : "text-gray-600 hover:text-blue-500 transition duration-300"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/Perfil" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-500 border-b-2 border-blue-500" 
                    : "text-gray-600 hover:text-blue-500 transition duration-300"
                }
              >
                Perfil
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/Dashboard" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-500 border-b-2 border-blue-500" 
                    : "text-gray-600 hover:text-blue-500 transition duration-300"
                }
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
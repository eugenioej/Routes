import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} Eugenio AI. Todos los derechos reservados.
      </p>
    </footer>
  );
};
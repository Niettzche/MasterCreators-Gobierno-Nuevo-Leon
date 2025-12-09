import React from 'react';
import { NavLink } from 'react-router-dom';
import gobiernoLogo from '../../assets/gobierno.svg';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <img src={gobiernoLogo} alt="Logo Gobierno" className="h-10 w-auto object-contain" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold tracking-tight text-text-main leading-none">Gobierno de</h1>
              <p className="text-xs text-text-body uppercase tracking-widest font-semibold">Nuevo León</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

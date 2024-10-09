"use client";
import logoCariocaFavorita from "/public/img/navbar/logo-carioca.svg";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-greenBase text-white py-5 font-montserrat">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center md:text-xs lg:text-base">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src={logoCariocaFavorita}
              alt="star"
              width={150} height={100}
            />

          </Link>
        </div>
        {/* Itens da navbar */}
        <div className="hidden md:flex gap-10 items-center">
        <Link href="#news" className="text-beigeBase hover:text-yellowBase">NOTÍCIAS</Link>
          <Link href="#categories" className="text-beigeBase hover:text-yellowBase">CATEGORIAS</Link>
          <Link href="#about" className="text-beigeBase hover:text-yellowBase">SOBRE NÓS</Link>
          <Link href="#contact" className="text-beigeBase hover:text-yellowBase">CONTATO</Link>
          {/* Botão para modo noturno */}
          <button className="bg-green-950 px-3 py-1 rounded-md hover:bg-slate-950 text-beigeBase">
            Modo Noturno
          </button>
        </div>
        {/* Menu móvel */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Menu móvel */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 flex flex-col items-start bg-greenBase w-full px-4 py-2">
          <Link href="#news" className="block w-full py-2 text-beigeBase hover:text-yellowBase">NOTÍCIAS</Link>
          <Link href="#categories" className="block w-full py-2 text-beigeBase hover:text-yellowBase">CATEGORIAS</Link>
          <Link href="#about" className="block w-full py-2 text-beigeBase hover:text-yellowBase">SOBRE NÓS</Link>
          <Link href="#contact" className="block w-full py-2 text-beigeBase hover:text-yellowBase">CONTATO</Link>
          <button className="block w-full text-left py-2 bg-green-950 text-beigeBase hover:bg-slate-950">
            Modo Noturno
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

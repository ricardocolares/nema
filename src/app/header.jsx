// Header.jsx

import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logoheader.png" alt="Logo do Nema" />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/publicacoes">
              Publicações
            </Link>
          </li>
          <li>
            <Link href="/livros-monografias">
              Livros e Monografias
            </Link>
          </li>
          <li>
            <Link href="/educacao">
              Educação
            </Link>
          </li>
          <li>
            <Link href="/eventos">
              Eventos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

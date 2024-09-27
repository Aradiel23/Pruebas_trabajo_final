import React from 'react';
import Link from 'next/link'; // Usar el Link de Next.js
import styles from './Header.module.css';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
          </div>
          <ul className={styles.navLinks}>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/nuevos-pacientes">Nuevos pacientes</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
          <div className={styles.searchIconContainer}>
            <IconButton aria-label="search" className={styles.searchIcon}>
              <SearchIcon style={{ color: '#016b65' }} />
            </IconButton>
            <IconButton aria-label="dark mode" className={styles.darkModeIcon}>
              <DarkModeOutlinedIcon style={{ color: '#016b65' }} />
            </IconButton>
          </div>
          <button className={styles.reserveButton}>Reservar</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

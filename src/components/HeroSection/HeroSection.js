import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <small>Clínica odontológica especializada</small>
          <h1>Atención para todas las edades</h1>
          <button className={styles.heroButton}>Reserva en línea</button>
          <small>o llama al 800-10-01-02</small>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/assets/hero-image.png" alt="Odontología" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

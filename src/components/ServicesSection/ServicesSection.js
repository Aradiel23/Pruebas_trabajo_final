import React from 'react';
import { Button } from '@mui/material';
import styles from './ServicesSection.module.css';

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <h2>Nuestros servicios</h2>
        <div className={styles.services}>
          <div className={styles.service}>
            <img src="/assets/service1.png" alt="Odontología Cosmética" />
            <h3>Odontología Cosmética</h3>
            <Button component="a" href="#" className={styles.serviceButton} style={{ textDecoration: 'none' }}>Más información ↗</Button>
          </div>
          <div className={styles.service}>
            <img src="/assets/service2.png" alt="Odontología Restaurativa" />
            <h3>Odontología Restaurativa</h3>
            <Button component="a" href="#" className={styles.serviceButton} style={{ textDecoration: 'none' }}>Más información ↗</Button>
          </div>
          <div className={styles.service}>
            <img src="/assets/service3.png" alt="Odontopediatría" />
            <h3>Odontopediatría</h3>
            <Button component="a" href="#" className={styles.serviceButton} style={{ textDecoration: 'none' }}>Más información ↗</Button>
          </div>
          <div className={styles.service}>
            <img src="/assets/service4.png" alt="Ortodoncia" />
            <h3>Ortodoncia</h3>
            <Button component="a" href="#" className={styles.serviceButton} style={{ textDecoration: 'none' }}>Más información ↗</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

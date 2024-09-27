import React from 'react';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className={styles.container}>
        <h2>Opiniones de nuestros pacientes</h2>
        <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <p>
              "Excelente servicio en Magia Dental. Trato amable, procedimientos indoloros. ¡Mi sonrisa nunca ha estado mejor!"
            </p>
            <h3>Lucía P.</h3>
          </div>
          <div className={styles.testimonial}>
            <p>
              "En Magia Dental me sentí como en casa. Profesionales excepcionales y resultados sorprendentes. ¡Muy recomendado!"
            </p>
            <h3>Jorge E.</h3>
          </div>
          <div className={styles.testimonial}>
            <p>
              "Magia Dental transformó mi sonrisa con eficiencia y cuidado. ¡El mejor dentista al que he ido!"
            </p>
            <h3>Sofía M.</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

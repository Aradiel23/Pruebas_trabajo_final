import React from 'react';
import { Button } from '@mui/material';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <Button component="a" href="#" className={styles.socialLink} style={{ textDecoration: 'none' }}>
          <img src="/assets/whatsapp-icon.png" alt="WhatsApp" />
        </Button>
        <Button component="a" href="#" className={styles.socialLink} style={{ textDecoration: 'none' }}>
          <img src="/assets/tiktok-icon.png" alt="TikTok" />
        </Button>
        <Button component="a" href="#" className={styles.socialLink} style={{ textDecoration: 'none' }}>
          <img src="/assets/facebook-icon.png" alt="Facebook" />
        </Button>
        <Button component="a" href="#" className={styles.socialLink} style={{ textDecoration: 'none' }}>
          <img src="/assets/instagram-icon.png" alt="Instagram" />
        </Button>
        <Button component="a" href="#" className={styles.socialLink} style={{ textDecoration: 'none' }}>
          <img src="/assets/twitter-icon.png" alt="Twitter" />
        </Button>
        <Button component="a" href="#" className={styles.socialLink} style={{ textDecoration: 'none' }}>
          <img src="/assets/youtube-icon.png" alt="YouTube" />
        </Button>
      </div>
      <p>Política de privacidad</p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className="container">
        <div className={styles.copyright}>
            &copy; { new Date().getFullYear() } SimpleDocs
        </div>
    </div>
  );
};

export default Footer;

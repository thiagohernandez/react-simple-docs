import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
        <div className={styles.navHeader}>
            <Link className={styles.brand} to="/"><span>Simple</span>Docs</Link>
        </div>
    </div>
  );
};

export default Header;

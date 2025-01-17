import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Recipes Book</div>
      <div className={styles.menu}>
        <a href="/" className={styles.menuItem}>Home</a>
        <a href="/add-recipe" className={styles.menuItem}>Add Recipe</a>
        <a href="/about" className={styles.menuItem}>About</a>
      </div>
      <button className={styles.button}>Contact Us</button>
    </nav>
  );
}

export default Navbar;

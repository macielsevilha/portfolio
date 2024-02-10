// src/components/HeaderLayout.js
import React from 'react';

import styles from './Header.module.scss'
import Logo from '../_ui/Logo'

import Navbar from '../_ui/Navbar';

const HeaderLayout = () => {
  return (
    <header className={styles.header}>
     <Logo name="dev.maciel" />
     <Navbar>
       
     </Navbar>
    </header>
  );
};

export default HeaderLayout;
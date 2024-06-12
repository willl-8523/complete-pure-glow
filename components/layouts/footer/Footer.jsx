'use client';
import React from 'react'
import classes from './Footer.module.css'
import Logo from '@/components/UI/logo/Logo';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Logo />
      <div className={classes.lists}>
        <ul>
          <li>Mentions Légales</li>
          <li>Politique de Confidentialité</li>
          <li>Conditions Générales d'Utilisation</li>
          <li>Politique de Cookies</li>
        </ul>
      </div>
      <div className={classes.lists}>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Pinterest</li>
          <li>Blog</li>
        </ul>
      </div>
    </footer>
  );
}

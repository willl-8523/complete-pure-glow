'use client';
import { useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import classes from './MessageScrolling.module.css';

export default function MessageScrolling() {
  const logosRef = useRef(null);
  const starIcon = <FaStar />;
  const messages = [
    'Fabriqué en France',
    'Révélez Votre Éclat',
    'Livraison Gratuite dès 100€',
  ];

  useEffect(() => {
    if (logosRef.current) {
      const copy = logosRef.current.cloneNode(true);
      console.log(copy);
      logosRef.current.parentNode.appendChild(copy);
    }
  }, []);

  return (
    <div className={classes.scroll__container}>
      <div className={classes.scroll__content} ref={logosRef}>
        {messages.map((mess) => (
          <h4 key={mess}>
            {starIcon} {mess}
          </h4>
        ))}
      </div>
    </div>
  );
}

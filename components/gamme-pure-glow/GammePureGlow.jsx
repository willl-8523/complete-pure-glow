'use client';

import { pure_glow_range_images } from '@/app/lib/images';
import classes from './GammePureGlow.module.css';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function GammePureGlow() {
  return (
    <>
      <section className={classes.container}>
        <main className={classes.cards}>
          {pure_glow_range_images.map((img) => (
            <div key={img.caption} className={classes.card}>
              <img src={`/images/${img.path}`} alt={img.caption} />
              <div className={classes.title}>
                <h4>{img.title}</h4>
                <FaArrowRightLong />
              </div>
            </div>
          ))}
        </main>
        <header className={classes.desc}>
          <h3>Découvrez notre gamme de soins Pure Glow</h3>
          <p>Trouvez la Solution Parfaite pour Chaque Besoin de Votre Peau</p>
        </header>
      </section>
      <div className={classes.footer}>
        <img src="images/put_mask.png" alt="A woman puts lotion on her face." />
      </div>
    </>
  );
}

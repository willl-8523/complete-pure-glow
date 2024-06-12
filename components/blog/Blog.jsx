'use client';

import { blog_images } from '@/app/lib/images';
import classes from './Blog.module.css';

export default function Blog() {
  return (
    <section className={classes.container}>
      <div className={classes.blog}>
        <div className={classes.desc}>
          <h3>Découvrez notre blog beauté</h3>
          <p>
            Explorez nos articles de blog pour des conseils experts, des astuces
            de skincare et des tendances de beauté. Plongez dans notre univers
            et laissez-vous inspirer pour une routine de soins personnalisée et
            éclatante.
          </p>
          <div className={classes.btn}>
            <button>Explorer plus d'articles</button>
          </div>
        </div>
        <div className={classes.img}>
          <img src="/images/two_women.png" alt="Picture of two women." />
        </div>
      </div>
      <div className={classes.social__media}>
        <div className={classes.images}>
          {blog_images.map((img) => (
            <img
              key={img.caption}
              src={`/images/${img.path}`}
              alt={img.caption}
            />
          ))}
        </div>
        <div className={classes.btn}>
          <button>Suivez-nous sur instagram</button>
        </div>
      </div>
    </section>
  );
}

'use client';
import { images } from '@/app/lib/images';
import classes from './MessageScrolling.module.css';

export default function MessageScrolling() {
  return (
    <div className={classes.scroll__container}>
      <div className={classes.scroll__content}>
        {images.map((image) => (
          <img
            key={image.caption}
            src={`/images/${image.path}`}
            alt={image.caption}
          />
        ))}
      </div>
    </div>
  );
}

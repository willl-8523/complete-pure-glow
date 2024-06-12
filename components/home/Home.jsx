'use client';

import React from 'react'
import Banner from '../banner/Banner';
import MessageScrolling from '../message-scrolling/MessageScrolling';
import GammePureGlow from '../gamme-pure-glow/GammePureGlow';
import Blog from '../blog/Blog';

export default function Home() {
  return (
    <>
      <Banner />
      <MessageScrolling />
      <GammePureGlow />
      <Blog />
    </>
  );
}

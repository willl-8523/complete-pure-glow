import Home from '@/components/home/Home';

export const metadata = {
  title: 'Pure Glow',
  description: 'Découvrez notre gamme de produit skincare chez Pure Glow',
  icons: {
    icon: 'https://www.greensoulcosmetics.com/image/catalog/logo/gsc-logo-social.png', // /public path
  },
};

export default function HomePage() {
  return <Home />;
}

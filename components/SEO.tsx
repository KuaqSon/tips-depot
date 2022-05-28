import Head from 'next/head';
import { useRouter } from 'next/router';

export interface SEOProps {
  customMeta?: Record<string, string>;
}

export default function SEO({ customMeta }: SEOProps) {
  const router = useRouter();

  const meta = {
    title: 'Tips Depot - Son Nguyen',
    description: 'Tips for software engineers',
    image: 'https://nqson.com/static/nqson-banner.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={`https://tips.nqson.com${router.asPath}`} />
        <link rel="canonical" href={`https://tips.nqson.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quangsonnguyen2" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
    </>
  );
}

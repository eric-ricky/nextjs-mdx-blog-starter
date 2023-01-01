import Head from 'next/head';
import React from 'react';

interface ISEO {
  description?: string;
  author?: string;
  title?: string;
  urlImage?: string;
}

const URL = 'https://sparkblog.vercel.app';

const SEO: React.FC<ISEO> = ({
  description = 'A starter template designed to get you up and running with a Next.js-powered blog that uses MDX for content.',
  title = 'Spark Blog | Get started building with Next.JS + MDX',
  urlImage = `${URL}/images/preview-light.jpeg`,
}) => {
  const HTMLMetaTags = [
    {
      name: `description`,
      content: description,
    },
  ];

  const facebookMetaTags = [
    {
      property: 'og:url',
      content: 'https://www.skillflowhq.com/',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: title,
    },
    { property: 'og:description', content: description },
    {
      property: 'og:image',
      content: urlImage,
    },
  ];

  const twitterMetaTags = [
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:image',
      content: urlImage,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ];

  const otherTwitter = [
    { property: 'twitter:domain', content: 'sparkblog.vercel.app' },
    { property: 'twitter:url', content: `${URL}` },
  ];

  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      {HTMLMetaTags.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}

      {/* Facebook Meta Tags */}
      {facebookMetaTags.map(({ property, content }, i) => (
        <meta key={i} property={property} content={content} />
      ))}

      {/* Twitter Meta Tags */}
      {twitterMetaTags.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      {otherTwitter.map(({ property, content }, i) => (
        <meta key={i} property={property} content={content} />
      ))}
    </Head>
  );
};

export default SEO;

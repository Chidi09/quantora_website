import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/siteConfig';

const SEO = ({ title, description, image, url }) => {
  const siteTitle = title ? `${title} | ${siteConfig.title}` : `${siteConfig.title} | Design. Develop. Deliver.`;
  const metaDescription = description || siteConfig.subtitle;
  const metaImage = image ? `${siteConfig.siteUrl}${image}` : `${siteConfig.siteUrl}${siteConfig.ogImage}`;
  const metaUrl = url ? `${siteConfig.siteUrl}${url}` : siteConfig.siteUrl;

  const schemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: siteConfig.title,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.jpeg`,
    description: siteConfig.subtitle,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.companyEmail,
      contactType: 'Customer service',
    },
    sameAs: [
      // Add your actual social profiles here
      'https://twitter.com/QuantoraAgency',
      'https://linkedin.com/company/quantora',
      'https://instagram.com/quantora'
    ],
  };

  return (
    <Helmet>
      {/* General Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      <link rel="canonical" href={metaUrl} />

      {/* OpenGraph / Facebook / LinkedIn */}
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteConfig.title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
};

export default SEO;

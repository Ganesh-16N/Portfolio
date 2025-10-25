import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Ganesh Nagargoje - Senior React Native Developer Portfolio",
  description = "Experienced Senior React Native Developer with 5+ years of expertise in mobile app development. Specializing in cross-platform solutions, UI/UX design, and performance optimization.",
  keywords = "React Native, Mobile Development, iOS, Android, Cross-platform, JavaScript, TypeScript, UI/UX, Portfolio, Senior Developer",
  image = "/logo512.png",
  url = "https://ganeshnagargoje.dev",
  type = "website",
  structuredData = null
}) => {
  const fullTitle = title.includes("Ganesh Nagargoje") ? title : `${title} | Ganesh Nagargoje`;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ganesh Nagargoje",
    "jobTitle": "Senior React Native Developer",
    "description": "Experienced mobile app developer specializing in React Native, iOS, and Android development",
    "url": url,
    "image": `${url}${image}`,
    "sameAs": [
      "https://github.com/ganeshnagargoje",
      "https://linkedin.com/in/ganeshnagargoje",
      "https://twitter.com/ganeshnagargoje"
    ],
    "knowsAbout": [
      "React Native",
      "Mobile Development",
      "iOS Development",
      "Android Development",
      "JavaScript",
      "TypeScript",
      "UI/UX Design",
      "Cross-platform Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior React Native Developer",
      "description": "Developing cross-platform mobile applications using React Native"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ganesh Nagargoje" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Ganesh Nagargoje Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:creator" content="@ganeshnagargoje" />
      <meta name="twitter:site" content="@ganeshnagargoje" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e1b4b" />
      <meta name="msapplication-TileColor" content="#1e1b4b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Ganesh Nagargoje" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://github.com" />
      <link rel="preconnect" href="https://linkedin.com" />
      
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Helmet>
  );
};

export default SEO;

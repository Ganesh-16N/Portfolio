import React from 'react';
import { Helmet } from 'react-helmet-async';

const ProjectSEO = ({ 
  projectName,
  description,
  technologies = [],
  image = "/logo512.png",
  url = "https://ganeshnagargoje.dev"
}) => {
  const title = `${projectName} - React Native Project | Ganesh Nagargoje`;
  const fullDescription = `${description} Built with ${technologies.join(', ')} by Ganesh Nagargoje, Senior React Native Developer.`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": projectName,
    "description": description,
    "author": {
      "@type": "Person",
      "name": "Ganesh Nagargoje",
      "jobTitle": "Senior React Native Developer"
    },
    "programmingLanguage": technologies,
    "applicationCategory": "Mobile Application",
    "operatingSystem": ["iOS", "Android"],
    "url": url,
    "image": `${url}${image}`
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={`${projectName}, React Native, Mobile App, ${technologies.join(', ')}, Ganesh Nagargoje`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:type" content="article" />
      
      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${url}${image}`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default ProjectSEO;

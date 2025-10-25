// SEO Utility Functions

// Google Analytics tracking
export const trackPageView = (pageName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageName,
      page_location: window.location.href,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// SEO-friendly URL generation
export const generateSEOUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Meta description generator
export const generateMetaDescription = (content, maxLength = 160) => {
  const cleanContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }
  return cleanContent.substring(0, maxLength - 3) + '...';
};

// Keywords extraction and optimization
export const extractKeywords = (text, minLength = 3) => {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length >= minLength);
  
  const wordCount = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  return Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);
};

// Schema.org structured data generators
export const generatePersonSchema = (personData) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": personData.name,
  "jobTitle": personData.jobTitle,
  "description": personData.description,
  "url": personData.url,
  "image": personData.image,
  "sameAs": personData.socialLinks || [],
  "knowsAbout": personData.skills || [],
  "hasOccupation": {
    "@type": "Occupation",
    "name": personData.jobTitle,
    "description": personData.description
  }
});

export const generateProjectSchema = (projectData) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": projectData.name,
  "description": projectData.description,
  "author": {
    "@type": "Person",
    "name": projectData.author || "Ganesh Nagargoje"
  },
  "programmingLanguage": projectData.technologies || [],
  "applicationCategory": "Mobile Application",
  "operatingSystem": ["iOS", "Android"],
  "url": projectData.url,
  "image": projectData.image
});

// Performance monitoring for SEO
export const measureCoreWebVitals = () => {
  if (typeof window !== 'undefined') {
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        trackEvent('core_web_vital', 'LCP', entry.startTime.toString(), Math.round(entry.startTime));
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        trackEvent('core_web_vital', 'FID', entry.processingStart.toString(), Math.round(entry.processingStart));
      }
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          trackEvent('core_web_vital', 'CLS', entry.value.toString(), Math.round(entry.value * 1000));
        }
      }
    }).observe({ entryTypes: ['layout-shift'] });
  }
};

// SEO score calculator
export const calculateSEOScore = (pageData) => {
  let score = 0;
  const maxScore = 100;
  
  // Title tag (20 points)
  if (pageData.title && pageData.title.length >= 30 && pageData.title.length <= 60) {
    score += 20;
  }
  
  // Meta description (20 points)
  if (pageData.description && pageData.description.length >= 120 && pageData.description.length <= 160) {
    score += 20;
  }
  
  // Headings structure (15 points)
  if (pageData.hasH1 && pageData.headingCount >= 2) {
    score += 15;
  }
  
  // Images with alt text (15 points)
  if (pageData.imagesWithAlt > 0) {
    score += Math.min(15, pageData.imagesWithAlt * 5);
  }
  
  // Internal links (10 points)
  if (pageData.internalLinks > 0) {
    score += Math.min(10, pageData.internalLinks * 2);
  }
  
  // Page speed (10 points)
  if (pageData.loadTime < 3000) {
    score += 10;
  }
  
  // Mobile friendly (10 points)
  if (pageData.isMobileFriendly) {
    score += 10;
  }
  
  return Math.min(score, maxScore);
};

export default {
  trackPageView,
  trackEvent,
  generateSEOUrl,
  generateMetaDescription,
  extractKeywords,
  generatePersonSchema,
  generateProjectSchema,
  measureCoreWebVitals,
  calculateSEOScore
};

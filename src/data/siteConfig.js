// src/data/siteConfig.js
export const siteConfig = {
  title: 'Quantora',
  // Make sure this description is catchy and includes keywords
  subtitle: 'Quantora is a premier digital agency specializing in high-performance software engineering, cinematic creative production, and immersive web experiences.',
  siteUrl: 'https://quantora-website.vercel.app', // Your Vercel deployment
  twitterHandle: '@QuantoraAgency', // REPLACE with actual handle
  formspreeEndpoint: 'https://formspree.io/f/xdkdzqwd', 
  companyEmail: 'chidiisking7@gmail.com',
  // Add an OG Image path (place an image named og-image.jpg in your public folder)
  ogImage: '/og-image.jpg', 
  navLinks: [
    { id: 'nav-software', text: 'Software & Web', path: '#software-development' },
    { id: 'nav-creative', text: 'Creative & Production', path: '#creative-services' },
  ]
};
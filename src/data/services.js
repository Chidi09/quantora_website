// data/services.js
// Updated data structure to include detailed team member information.
export const services = [
  {
    id: 'software-development',
    title: 'Software & Web Development',
    whatWeDo: 'We architect and engineer robust digital solutions, from dynamic websites to complex enterprise software, focusing on performance, scalability, and user experience.',
    theme: 'bg-slate-900',
    team: [
      {
        id: 'dev-1',
        name: 'Alex Thompson',
        role: 'Lead Full-Stack Engineer',
        avatar: 'https://placehold.co/200x200/4f46e5/ffffff?text=AT',
        bio: 'With over a decade of experience, Alex specializes in building scalable back-end systems and fluid front-end interfaces. He is passionate about clean code and innovative problem-solving.',
        email: 'alex.t@quantora.dev',
        linkedin: 'https://linkedin.com/in/alex-thompson',
        formspreeId: 'YOUR_ALEX_FORMSPREE_ID'
      },
      {
        id: 'dev-2',
        name: 'Samira Khan',
        role: 'Moodle & WordPress Specialist',
        avatar: 'https://placehold.co/200x200/c026d3/ffffff?text=SK',
        bio: 'Samira is an expert in creating customized e-learning platforms and content management systems. She transforms standard WordPress and Moodle sites into powerful, bespoke tools for education and business.',
        email: 'samira.k@quantora.dev',
        linkedin: 'https://linkedin.com/in/samira-khan',
        formspreeId: 'YOUR_SAMIRA_FORMSPREE_ID'
      }
    ]
  },
  {
    id: 'creative-services',
    title: 'Creative & Production',
    whatWeDo: 'Our creative wing brings ideas to life. From scripting compelling narratives to directing and editing visually stunning videos, we manage the entire production pipeline to tell your story.',
    theme: 'bg-zinc-900',
    team: [
      {
        id: 'creative-1',
        name: 'Jordan Lee',
        role: 'Creative Director & Script Writer',
        avatar: 'https://placehold.co/200x200/db2777/ffffff?text=JL',
        bio: 'Jordan crafts the narratives that define brands. With a background in filmmaking and advertising, they excel at developing concepts and writing scripts that resonate with audiences.',
        email: 'jordan.l@quantora.dev',
        linkedin: 'https://linkedin.com/in/jordan-lee',
        formspreeId: 'YOUR_JORDAN_FORMSPREE_ID'
      },
      {
        id: 'creative-2',
        name: 'Maria Garcia',
        role: 'Lead Video Editor',
        avatar: 'https://placehold.co/200x200/ea580c/ffffff?text=MG',
        bio: 'Maria is a visual storyteller who turns raw footage into polished, impactful videos. Her expertise in color grading, motion graphics, and pacing ensures every project is cinematic and engaging.',
        email: 'maria.g@quantora.dev',
        linkedin: 'https://linkedin.com/in/maria-garcia',
        formspreeId: 'YOUR_MARIA_FORMSPREE_ID'
      }
    ]
  }
];

export default services;

// Other components like Navbar.jsx, Header.jsx, ContactSection.jsx, and siteConfig.js

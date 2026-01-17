// src/data/initial-data.js

export const initialServicesData = [
  {
    order: 1,
    id: 'software-development',
    title: 'Software & Web Development',
    whatWeDo: 'Architecting digital ecosystems with high-performance engineering.',
    theme: 'bg-slate-950', // Darker theme for code
    team: [
      {
        id: 'dev-1',
        name: 'Nneji Chidi Ben',
        role: 'Lead Full-Stack Engineer',
        roleType: 'coder', // TRIGGERS THE IDE THEME
        avatar: 'https://placehold.co/400x400/0f172a/e2e8f0?text=NCB', // Replace with real photo
        bio: 'I am a Software Engineer who bridges the gap between raw code and human experience. With a B.Sc. in Computer Science and a portfolio spanning FinTech, Real Estate, and AI, I don\'t just build websites—I engineer ecosystems.',
        tagline: 'I Engineer Digital Ecosystems',
        email: 'chidiisking7@gmail.com',
        linkedin: 'https://linkedin.com/in/nneji-chidi-ben',
        
        // Detailed Profile Data
        location: 'Lagos, Nigeria',
        education: 'B.Sc. Computer Science, Crawford University (2021–2025)',
        techStack: [
          'React.js', 'Next.js', 'Angular', 'Tailwind CSS', 
          'FastAPI', 'Node.js', 'Golang', 'Python', 
          'Firebase', 'MongoDB', 'PostgreSQL', 'Supabase'
        ],
        projects: [
          {
            title: 'EG Group',
            category: 'Agriculture',
            desc: 'A diversified conglomerate redefining standards in Agriculture, Construction, and Media.',
            stack: ['React', 'Vite', 'Tailwind'],
            link: '#'
          },
          {
            title: '2GEES Impacts',
            category: 'Real Estate',
            desc: 'Luxury real estate and hospitality management platform crafting bespoke identities.',
            stack: ['React', 'Vite', 'Tailwind'],
            link: '#'
          },
          {
            title: 'VarianTrade',
            category: 'FinTech',
            desc: 'AI-Powered Trading & Betting Platform with real-time arbitrage detection.',
            stack: ['Angular', 'Python', 'Go'],
            link: '#'
          },
          {
            title: 'Nigerian China Invest',
            category: 'E-Commerce',
            desc: 'Robust investment portal with trade opportunities and cart-based ordering systems.',
            stack: ['React', 'Vite', 'Golang'],
            link: '#'
          },
          {
            title: 'Grandkonsul Gardens',
            category: 'Real Estate',
            desc: 'Premium real estate platform with smooth animations and SEO optimization.',
            stack: ['React', 'Tailwind', 'Framer Motion'],
            link: '#'
          },
          {
            title: 'Smart Theming Engine',
            category: 'AI Tool',
            desc: 'AI-powered engine analyzing visuals to generate automatic UI themes.',
            stack: ['Python', 'AI/ML'],
            link: '#'
          }
        ]
      },
      {
        id: 'dev-2',
        name: 'Ulelu Joseph Chidi',
        role: 'Moodle & WordPress Specialist',
        roleType: 'coder',
        avatar: 'https://placehold.co/200x200/c026d3/ffffff?text=UJ',
        bio: 'Ulelu is an expert in creating customized e-learning platforms and content management systems.',
        email: 'quantora7@gmail.com',
        linkedin: 'https://linkedin.com/in/ulelu-joseph-chidi',
        techStack: ['WordPress', 'Moodle', 'PHP', 'CSS']
      }
    ]
  },
  {
    order: 2,
    id: 'creative-services',
    title: 'Creative & Production',
    whatWeDo: 'Bringing narratives to life with cinematic precision.',
    theme: 'bg-neutral-950',
    team: [
      {
        id: 'creative-1',
        name: 'Talabi Oluwajomiloju',
        role: 'Creative Director & Script Writer',
        roleType: 'writer', // TRIGGERS THE BOOK THEME
        avatar: 'https://placehold.co/200x200/db2777/ffffff?text=TO',
        bio: 'Talabi crafts the narratives that define brands. With a background in filmmaking and advertising, they excel at developing concepts and writing scripts that resonate.',
        email: 'quantora7@gmail.com',
        linkedin: 'https://linkedin.com/in/talabi-oluwa-jomiloju',
        projects: [
          { title: 'The Silent Script', category: 'Screenplay', desc: 'Award winning short film script.' },
          { title: 'Brand Voice X', category: 'Copywriting', desc: 'Complete brand overhaul for major tech firm.' }
        ]
      },
      {
        id: 'creative-2',
        name: 'Awojide Samuel',
        role: 'Lead Video Editor',
        roleType: 'creative', // TRIGGERS THE CINEMATIC THEME
        avatar: 'https://placehold.co/200x200/ea580c/ffffff?text=AS',
        bio: 'A visual storyteller who turns raw footage into polished, impactful videos.',
        email: 'quantora7@gmail.com',
        linkedin: 'https://linkedin.com/in/awo-jide'
      },
      {
        id: 'creative-3',
        name: 'Moshopefoluwa Awosanya',
        role: 'Graphics & UI/UX Designer',
        roleType: 'creative',
        avatar: 'https://placehold.co/200x200/16a34a/ffffff?text=MA',
        bio: 'Moshopefoluwa is the visual architect of our digital experiences.',
        email: 'quantora7@gmail.com',
        linkedin: 'https://www.linkedin.com/in/moshopefoluwa-awosanya-5b3699315'
      }
    ]
  }
];

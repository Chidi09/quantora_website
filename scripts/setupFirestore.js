// scripts/setupFirestore.js
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBRPHgeWKFllWI91xIizwyN6vf5_ewRyFA",
  authDomain: "quantora-website.firebaseapp.com",
  projectId: "quantora-website",
  storageBucket: "quantora-website.firebasestorage.app",
  messagingSenderId: "847030502235",
  appId: "1:847030502235:web:1e267872d92ba7f8fd507e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const services = [
  {
    order: 1,
    id: 'software-development',
    title: 'Software & Web Development',
    whatWeDo: 'We architect and engineer robust digital solutions, from dynamic websites to complex enterprise software.',
    theme: 'bg-slate-900',
    team: [
      {
        id: 'dev-1',
        name: 'Nneji Chidi Ben',
        role: 'Lead Full-Stack Engineer',
        roleType: 'coder', // TRIGGERS IDE THEME
        avatar: 'https://placehold.co/400x400/0f172a/e2e8f0?text=NCB',
        bio: 'I engineer ecosystems. With a B.Sc. in Computer Science, I bridge the gap between raw code and human experience.',
        email: 'chidiisking7@gmail.com',
        linkedin: 'https://linkedin.com/in/nneji-chidi-ben',
        location: 'Lagos, Nigeria',
        techStack: ['React', 'Next.js', 'Python', 'Go', 'Firebase', 'Tailwind'],
        projects: [
          { title: 'EG Group', category: 'Agriculture', desc: 'Conglomerate redefining standards.', stack: ['React', 'Vite'] },
          { title: 'VarianTrade', category: 'FinTech', desc: 'AI-Powered Trading Platform.', stack: ['Python', 'Go'] },
          { title: 'Smart Theming Engine', category: 'AI Tool', desc: 'Automated UI generator.', stack: ['Python', 'ML'] }
        ]
      },
      {
        id: 'dev-2',
        name: 'Ulelu Joseph Chidi',
        role: 'Moodle & WordPress Specialist',
        roleType: 'coder', // TRIGGERS IDE THEME
        avatar: 'https://placehold.co/400x400/3b0764/e9d5ff?text=UJC',
        bio: 'Transforming standard CMS into powerful, bespoke educational tools.',
        email: 'quantora7@gmail.com',
        linkedin: 'https://linkedin.com/in/ulelu-joseph-chidi',
        location: 'Lagos, Nigeria',
        techStack: ['WordPress', 'Moodle', 'PHP', 'MySQL', 'Elementor'],
        projects: [
          { title: 'EduLearn Pro', category: 'LMS', desc: 'Custom Moodle environment for universities.', stack: ['Moodle', 'PHP'] },
          { title: 'Corporate Portal', category: 'CMS', desc: 'Enterprise WordPress solution.', stack: ['WordPress', 'PHP'] }
        ]
      }
    ]
  },
  {
    order: 2,
    id: 'creative-services',
    title: 'Creative & Production',
    whatWeDo: 'Our creative wing brings ideas to life. From scripting compelling narratives to directing visuals.',
    theme: 'bg-zinc-900',
    team: [
      {
        id: 'creative-1',
        name: 'Talabi Oluwajomiloju',
        role: 'Creative Director & Writer',
        roleType: 'writer', // TRIGGERS BOOK THEME
        avatar: 'https://placehold.co/400x400/be185d/fce7f3?text=TO',
        bio: 'Talabi crafts the narratives that define brands. With a background in filmmaking and advertising, they excel at developing concepts and writing scripts that resonate.',
        email: 'quantora7@gmail.com',
        projects: [
          { title: 'The Silent Script', category: 'Screenplay', desc: 'Award-winning short film narrative.' },
          { title: 'Brand Voice X', category: 'Copywriting', desc: 'Identity overhaul for tech giant.' }
        ]
      },
      {
        id: 'creative-2',
        name: 'Awojide Samuel',
        role: 'Lead Video Editor',
        roleType: 'creative', // TRIGGERS CINEMATIC THEME
        avatar: 'https://placehold.co/400x400/c2410c/ffedd5?text=AS',
        bio: 'A visual storyteller who turns raw footage into polished, impactful videos. Expertise in color grading and pacing.',
        email: 'quantora7@gmail.com'
      },
      {
        id: 'creative-3',
        name: 'Moshopefoluwa Awosanya',
        role: 'Graphics & UI/UX Designer',
        roleType: 'creative', // TRIGGERS CINEMATIC THEME
        avatar: 'https://placehold.co/400x400/15803d/dcfce7?text=MA',
        bio: 'The visual architect of our digital experiences. Specializing in intuitive user interfaces.',
        email: 'quantora7@gmail.com'
      }
    ]
  }
];

async function setupFirestore() {
  console.log('🚀 Starting Database Update...');
  
  try {
    for (const service of services) {
      // This overwrites the existing document completely
      const docRef = doc(db, 'services', service.id);
      await setDoc(docRef, service);
      console.log(`✅ Updated service: ${service.title}`);
    }
    
    console.log('🎉 Database successfully synchronized!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error updating database:', error);
    process.exit(1);
  }
}

setupFirestore();

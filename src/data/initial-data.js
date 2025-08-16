// =================================================================================
// 5. INITIAL DATA (data/initial-data.js)
// Updated with your team's real names and removed individual formspreeId fields.
// =================================================================================
export const initialServicesData = [
  {
    order: 1,
    id: 'software-development',
    title: 'Software & Web Development',
    whatWeDo: 'We architect and engineer robust digital solutions, from dynamic websites to complex enterprise software, focusing on performance, scalability, and user experience.',
    theme: 'bg-slate-900',
    team: [
      {
        id: 'dev-1',
        name: 'Nneji Chidi Ben',
        role: 'Lead Full-Stack Engineer',
        avatar: 'https://placehold.co/200x200/4f46e5/ffffff?text=NB',
        bio: 'With over 4 years of experience, Nneji specializes in building scalable back-end systems and fluid front-end interfaces. He is passionate about clean code and innovative problem-solving.',
        email: 'quantora7@gmail.com',
        linkedin: 'https://linkedin.com/in/nneji-chidi-ben'
      },
      {
        id: 'dev-2',
        name: 'Ulelu Joseph Chidi',
        role: 'Moodle & WordPress Specialist',
        avatar: 'https://placehold.co/200x200/c026d3/ffffff?text=UJ',
        bio: 'Ulelu is an expert in creating customized e-learning platforms and content management systems. He transforms standard WordPress and Moodle sites into powerful, bespoke tools for education and business.',
        email: 'quantora7@gmail.com',
        linkedin: 'https://linkedin.com/in/ulelu-joseph-chidi'
      }
    ]
  },
  {
    order: 2,
    id: 'creative-services',
    title: 'Creative & Production',
    whatWeDo: 'Our creative wing brings ideas to life. From scripting compelling narratives to directing and editing visually stunning videos, we manage the entire production pipeline to tell your story.',
    theme: 'bg-zinc-900',
    team: [
      {
        id: 'creative-1',
        name: 'Talabi Oluwajomiloju',
        role: 'Creative Director & Script Writer',
        avatar: 'https://placehold.co/200x200/db2777/ffffff?text=TO',
        bio: 'Talabi crafts the narratives that define brands. With a background in filmmaking and advertising, they excel at developing concepts and writing scripts that resonate with audiences.',
        email: 'quantora7@gmail.com',
        linkedin: 'https://linkedin.com/in/talabi-oluwa-jomiloju'
      },
      {
        id: 'creative-2',
        name: 'Awojide Samuel',
        role: 'Lead Video Editor',
        avatar: 'https://placehold.co/200x200/ea580c/ffffff?text=AS',
        bio: 'Awojide is a visual storyteller who turns raw footage into polished, impactful videos. His expertise in color grading, motion graphics, and pacing ensures every project is cinematic and engaging.',
        email: 'quantora7@gmail.com',
        linkedin: 'https://linkedin.com/in/awo-jide'
      },
      {
        id: 'creative-3',
        name: 'Moshopefoluwa Awosanya',
        role: 'Graphics & UI/UX Designer',
        avatar: 'https://placehold.co/200x200/16a34a/ffffff?text=MA',
        bio: 'Moshopefoluwa is the visual architect of our digital experiences. She specializes in creating intuitive user interfaces and stunning graphics that are both beautiful and functional.',
        email: 'quantora7@gmail.com',
        linkedin: 'https://www.linkedin.com/in/moshopefoluwa-awosanya-5b3699315'
      }
    ]
  }
];

// NOTE: All other files (firebase.js, AuthContext.js, LabyrinthIntro.jsx, Header.jsx, 
// ContactSection.jsx, Navbar.jsx, ServiceSection.jsx, TeamMemberCard.jsx, AdminLogin.jsx, ContactForm.jsx)
// can remain as they were in the previous version, as these changes only affect the files listed above.

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  name: 'OM RAJ',
  title: 'DevOps Engineering',
  subtitle: 'B.Tech Computer Science Engineering Student | Full-Stack Developer | DevOps Enthusiast ',
  description:
    'Passionate Computer Science Engineering student with expertise in Java, Python, C, Data Structures & Algorithms, Full-Stack Development and CI/CD practices. Experienced in building scalable web applications, automation solutions, and database-driven systems through internships and academic projects.',
  image: '/images/IMG_0322.PNG',
};

export const aboutSummary = [
  'I am a B.Tech Computer Science Engineering student with a strong interest in Full-Stack Development, DevOps Engineering, Cloud Computing, and Software Testing.',
  'I have worked on multiple real-world projects involving React, Node.js, Java, Spring Boot, Selenium, MongoDB, and MySQL. Through internships and academic projects, I have gained experience in developing web applications, automating workflows, implementing testing frameworks, and managing deployment processes.',
  'My goal is to build scalable software solutions while continuously improving my skills in cloud technologies, automation, and modern software development practices.',
];

export const categorizedSkills = [
  { category: 'Programming Languages', items: ['Java', 'Python', 'C'].map((name) => ({ name, level: 90 })) },
  { category: 'Frontend Development', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((name) => ({ name, level: 88 })) },
  { category: 'Backend Development', items: ['Node.js', 'Spring Boot'].map((name) => ({ name, level: 84 })) },
  { category: 'Databases', items: ['MySQL', 'MongoDB'].map((name) => ({ name, level: 86 })) },
  { category: 'Testing & Automation', items: ['Selenium', 'Cucumber', 'BDD Testing'].map((name) => ({ name, level: 85 })) },
  { category: 'DevOps & Cloud', items: ['AWS Cloud', 'CI/CD Concepts', 'Git', 'GitHub'].map((name) => ({ name, level: 84 })) },
  { category: 'Core Computer Science', items: ['Data Structures', 'Algorithms', 'Full-Stack Development (MERN)'].map((name) => ({ name, level: 87 })) },
  { category: 'Additional Skills', items: ['Data Analysis', 'Trend Analysis', 'Responsive Web Design'].map((name) => ({ name, level: 82 })) },
  { category: 'Languages', items: ['English', 'Hindi'].map((name) => ({ name, level: 90 })) },
];

export const projects = [
  {
    title: 'AI Powered Testing',
    role: 'Designer & Developer',
    duration: 'Working on it',
    description: 'Building an AI-powered testing platform with self-healing automation and CI/CD integration to improve software quality and testing efficiency.',
    achievements: [
      'Developed AI-based self-healing test automation.',
      'Integrated automated testing with CI/CD pipelines.',
      'Reduced test maintenance and manual effort.',
      'Improved test reliability and defect detection.'
    ],
    tech: ['React', 'Node.js', 'Tailwind CSS', 'AI Agent', 'SuperBase', 'Selenium'],
    github: 'https://github.com/omraj741/Finalyearproject',
    demo: '',
  },
  {
    title: 'Behavior-Driven Testing of an Economic Website',
    role: 'Tester',
    duration: 'February 2025 – April 2025',
    description: 'Automated and validated multiple application features including data search, currency conversion, and stock trend analysis.',
    achievements: [
      'Automated testing for 10+ application features.',
      'Created 20+ reusable BDD test scenarios.',
      'Improved collaboration between development and testing teams.',
      'Increased test coverage by 35%.',
      'Reduced regression testing time by 25%.',
    ],
    tech: ['Java', 'Selenium', 'Cucumber'],
    github: 'https://github.com/omraj741/Cucumber-Software-Testing',
    demo: '',
  },
  {
    title: 'Internship Management System',
    role: 'Developer',
    duration: 'August 2024 – December 2024',
    description: 'Developed a web-based internship management platform supporting Admin, Mentor, and Student roles with centralized internship tracking.',
    achievements: [
      'Managed tracking of 100+ internship tasks and submissions.',
      'Reduced manual tracking efforts by 40%.',
      'Automated task assignment and progress monitoring.',
      'Enabled performance evaluation workflows.',
    ],
    tech: ['Java', 'React', 'JavaScript', 'MySQL', 'Spring Boot'],
    github: 'https://github.com/omraj741/Admin',
    demo: '',
  },
  {
    title: 'Student Course Management System',
    role: 'Designer & Developer',
    duration: 'September 2023 – November 2023',
    description: 'Developed a student management system for efficient student record management and database operations.',
    achievements: ['Managed 500+ student records.', 'Implemented CRUD functionality.', 'Improved data retrieval efficiency by approximately 30%.'],
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/omraj741/project',
    demo: '',
  },
];

export const experience = {
  role: 'DevOps Engineer (Part-Time)',
  company: 'Innovience',
  location: 'Remote',
  duration: 'March 2025 – July 2025',
  points: [
    'Built, deployed, and maintained the company website using React, Node.js, and Tailwind CSS.',
    'Supported 100+ users while maintaining 99% uptime.',
    'Improved deployment workflows and resolved technical issues.',
    'Reduced website downtime by 30%.',
    'Improved page load performance by 20%.',
  ],
  technologies: ['React', 'Node.js', 'Tailwind CSS'],
};

export const education = [
  { program: 'Bachelor of Technology in Computer Science and Engineering', school: 'KL University', duration: 'August 2023 – May 2026', score: 'CGPA: 8.9' },
  { program: 'Diploma in Computer Science and Engineering', school: 'Galgotias University', duration: 'August 2020 – May 2023', score: 'CGPA: 8.4' },
];

export const achievements = {
  title: 'All India Hackathon Organizer',
  points: [
    'Organized an All India Hackathon with more than 100 participants.',
    'Coordinated participants from 20+ colleges.',
    'Managed registrations, logistics, and judging activities.',
  ],
};

export const leadership = {
  title: 'Social Media Team Lead',
  organization: 'Startup Society (College Club)',
  responsibilities: ['Led a team of 5 members.', 'Managed content strategy and digital campaigns.', 'Coordinated social media promotions for startup and college events.'],
  achievements: ['Increased event visibility by 30%.', 'Successfully promoted 10+ startup and college events.'],
};

export const certifications = ['NSDC PMKVY 4.0 – Software Programmer', 'Salesforce Certified AI Associate', 'Wipro TalentNext Java Full Stack Certification'];

export const contact = {
  name: 'Om Raj',
  email: 'omraj210205@gmail.com',
  phone: '+91 8873994918',
  location: 'Mughalsarai, Uttar Pradesh, India',
};

export const contactLinks = [
  { label: 'Portfolio', href: '#home', icon: '🌐' },
  { label: 'GitHub', href: 'https://github.com/omraj741', icon: '🐙' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/om-raj-01b63b227/', icon: '💼' },
  // { label: 'LeetCode', href: 'https://leetcode.com/om-raj', icon: '🧠' },
];

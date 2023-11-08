export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
];

export const experiencesData = [
  {
    title: 'Consultant Associate - Developer Graduate Programme',
    company: 'InFor/Lighthouse Systems Ltd',
    description: (
      <span>
        Worked on a <span className="font-bold">Shopfloor/MES Platform</span>.
        Meet with clients to understand their needs and implement new wanted
        features. Create <span className="font-bold">SQL</span> queries and
        procedures insert and update data. Develop{' '}
        <span className="font-bold">C#</span> scripts to make grid reports.
      </span>
    ),
    icon: <span className="material-symbols-outlined">work</span>,
    date: 'July 2022 - Present',
  },
  {
    title: 'C++ Programmer',
    company: 'Inspired Entertainment',
    description: (
      <span>
        Developed casino games using <span className="font-bold">C++</span>{' '}
        along with an <span className="font-bold">In-House Game Engine</span>.
        Worked with other departments{' '}
        <span className="font-bold">(Art, Design, Production, Test)</span> to
        deliver high quality, graphically-rich games. Implemented solutions
        which conform to <span className="font-bold">Architectural Design</span>{' '}
        and <span className="font-bold">Market Specification</span>. Debugged
        and fixed logical errors and bugs. Optimised games in terms of size and
        speed.
      </span>
    ),
    icon: <span className="material-symbols-outlined">work</span>,
    date: 'Nov 2021 - June 2022',
  },
  {
    title: 'Game Programmer - Internship',
    company: 'Black Cat Entertainment',
    description: (
      <span>
        Worked on a platformer game using{' '}
        <span className="font-bold">Unity</span> engine and{' '}
        <span className="font-bold">C#</span>. Designed{' '}
        <span className="font-bold">Software Architecture</span> and came up
        with solutions for implementation problems. Collaborated on ideas with
        the design team and built{' '}
        <span className="font-bold">Gameplay Mechanics</span> accordingly.
        Created animations and constructed their state logic. Managed{' '}
        <span className="font-bold">Git</span> repository and organized the team
        {"'"}s branches.
      </span>
    ),
    icon: <span className="material-symbols-outlined">work</span>,
    date: 'Feb 2021 - Nov 2021',
  },
  {
    title: "Master's in Data Science and Computational Intelligence",
    company: 'Coventry University, Coventry, UK',
    description: (
      <span>
        During my master{"'"}s in{' '}
        <span className="font-bold">
          Data Science and Computational Intelligence
        </span>
        , I gained expertise in{' '}
        <span className="font-bold">Machine Learning</span>,{' '}
        <span className="font-bold">Big Data Analytics</span>,{' '}
        <span className="font-bold">Data Visualization</span>, and{' '}
        <span className="font-bold">Statistical Analysis</span>. I applied these
        skills in real-world projects, such as my graduation project, which
        focused on <span className="font-bold">Human Action Recognition</span>.
      </span>
    ),
    icon: <span className="material-symbols-outlined">school</span>,
    date: '2020 - 2021',
  },
  {
    title: "Bachelor's in Computer Engineering",
    company: 'Nile University, Cairo, Egypt',
    description: (
      <span className="text-base">
        In my undergrad, I delved deeply into crucial concepts about{' '}
        <span className="font-bold">Data Structures and Algorithms</span>. These
        studies equipped me with a robust understanding of{' '}
        <span className="font-bold">Software Engineering</span> principles,
        demonstrated through many projects. We also took{' '}
        <span className="font-bold">Computer Architecture</span>, which
        broadened my comprehension of hardware functionality and allowed me to
        link theoretical code implementation to its hardware execution. I also
        had the pleasure of building a small{' '}
        <span className="font-bold">Self-Driving Car</span> for my graduation
        project.
      </span>
    ),
    icon: <span className="material-symbols-outlined">school</span>,
    date: '2014 - 2020',
  },
];

export const projectsData = [
  {
    title: 'Amazon',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageName: 'Amazon.png',
  },
  {
    title: 'munchNtime',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageName: 'munchNtime.png',
  },
  {
    title: 'WildOasis',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageName: 'WildOasis.png',
  },
  {
    title: 'Pizza',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageName: 'Pizza.png',
  },
  {
    title: 'WorldWise',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageName: 'WorldWise.png',
  },
];

export const skillsData = {
  languages: {
    color: 'red',
    skills: ['C', 'C++', 'C#', 'Python', 'Java', 'JavaScript'],
  },
  webdev: {
    color: 'blue',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  gamedev: {
    color: 'yellow',
    skills: [
      'Phaser',
      'Unity',
      'Unreal',
      'ARcore',
      'Pygame',
      'Online Multiplayer',
    ],
  },
  artificialintelligence: {
    color: 'gray',
    skills: ['Scikit-Learn', 'Keras', 'OpenCv'],
  },
  backend: {
    color: 'green',
    skills: ['SQL Server'],
  },
  versioncontrol: {
    color: 'orange',
    skills: ['Git', 'Sourcetree'],
  },
  programmingconcepts: {
    color: 'pink',
    skills: [
      'Object Oriented Programming',
      'Data Structures',
      'Design Patterns',
    ],
  },
};

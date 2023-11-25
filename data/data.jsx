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
      'This is a simple Amazon clone, made using only HTML, CSS, and vanilla JavaScript. It has basic functionalities like adding items to cart, going to checkout, and placing an order!',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imageName: 'Amazon.png',
    link: 'https://amazon-aliaboshady.netlify.app/',
  },
  {
    title: 'munchNtime',
    description:
      'munchNtime is a movie review app. You can search for any movie and review it by giving it a number of stars. It also tells you some info about the movies, like IMDB ratings and movie length.',
    tags: ['React', 'JavaScript', 'CSS'],
    imageName: 'munchNtime.png',
    link: 'https://munchntime.netlify.app/',
  },
  {
    title: 'Saucy Slice',
    description:
      'This app is for pizza lovers. You can order any ammount of pizza and place an order. You also get an order number, which you can use to track your order later!',
    tags: ['React', 'JavaScript', 'React Router', 'Tailwind', 'Redux'],
    imageName: 'SaucySlice.png',
    link: 'https://saucy-slice.netlify.app/',
  },
  {
    title: 'Starry Oasis',
    description:
      'Hotel app used for managing guests bookings. You can see all the bookings and their status. You can sort them a few different ways. You can also see the cabins, add, edit, and remove them, and set their info.',
    tags: [
      'React',
      'SupaBase',
      'JavaScript',
      'React Query',
      'React Router',
      'Styled Components',
    ],
    imageName: 'StarryOasis.png',
    link: 'https://starry-oasis.netlify.app/',
  },
  {
    title: 'City Stamp',
    description:
      'This is for adventurers! Keep a log of all the places you travelled, by clicking on the map and saving the city. You can also click on the city and go to its own Wikipedia page for more info!',
    tags: [
      'React',
      'SupaBase',
      'Tailwind',
      'JavaScript',
      'Leaflet Map',
      'React Router',
    ],
    imageName: 'CityStamp.png',
    link: 'https://city-stamp.netlify.app/',
  },
];

export const skillsData = {
  languages: {
    color: 'red',
    skills: ['C', 'C++', 'C#', 'Python', 'Java', 'JavaScript'],
  },
  front_end: {
    color: 'blue',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind',
      'Redux',
      'Framer-Motion',
    ],
  },

  back_end: {
    color: 'green',
    skills: ['SQL Server', 'Supabase'],
  },
  artificial_intelligence: {
    color: 'gray',
    skills: ['Scikit-Learn', 'Keras', 'OpenCv'],
  },
  game_dev: {
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
  version_control: {
    color: 'orange',
    skills: ['Git', 'Sourcetree'],
  },
  programming_concepts: {
    color: 'pink',
    skills: [
      'Object Oriented Programming',
      'Data Structures',
      'Design Patterns',
    ],
  },
  app_dev: {
    color: 'purple',
    skills: ['Dart', 'Flutter'],
  },
};

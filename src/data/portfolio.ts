export const portfolioData = {
  personal: {
    fullName: "MD Masum Reza Munna",
    designation: "MERN Stack Developer",
    bio: "Passionate about building responsive and scalable web applications using MongoDB, Express.js, React.js, and Node.js. Crafting clean, user-friendly, and efficient digital solutions.",
    email: "masumrezamunna2005@gmail.com",
    phone: "01763474359",
    whatsapp: "01763474359",
    heroPhoto: "https://i.ibb.co/Mx3ypxPw/my-photo-copy.jpg",
  },
  social: {
    github: "https://github.com/MasumRezaMunna",
    linkedin: "https://www.linkedin.com/in/md-masum-reza-munna-22760a223",
    facebook: "https://www.facebook.com/masum.reza.munna.2003",
    whatsapp: "https://wa.me/8801763474359",
  },
  about: {
    programmingJourney:
      "I started my programming journey with curiosity about how websites and applications work. As I learned the fundamentals of programming, I developed a strong interest in web development and began building projects to improve my skills. Over time, I explored different technologies and focused on the MERN stack to create modern and interactive web applications.",
    workPreferences:
      "I enjoy working on full-stack web applications, creating responsive user interfaces, and developing efficient backend systems. I like solving real-world problems, learning new technologies, and collaborating on projects that challenge my creativity and technical skills.",
    hobbies:
      "Outside of programming, I enjoy exploring new technologies, watching tech-related content, listening to music, playing games, and spending time learning new skills. I also enjoy staying updated with trends in web development and technology.",
  },
  skills: {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 88 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 82 },
      { name: "JWT Auth", level: 75 },
    ],
    tools: ["Git / GitHub", "Firebase", "Netlify", "Vercel", "REST APIs", "Responsive Design", "Problem Solving", "Communication"],
  },
  education: [
    {
      school: "Daffodil International University",
      degree: "Bachelor of Science (BSc)",
      field: "Software Engineering (SWE)",
      year: "2025 – Present",
      details:
        "Currently pursuing degree with a focus on software development, web technologies, and problem-solving. Building practical skills alongside academic knowledge through hands-on projects.",
    },
  ],
  projects: [
    {
      id: "ecommerce-store",
      name: "Revenio E-Commerce",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and online shopping features.",
      image: "https://i.ibb.co/tTD3pZXL/Revenio-ecommerce-first-page.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      fullDescription:
        "A MERN stack based e-commerce website that allows users to browse products, create accounts, add items to cart, and place orders. It includes user authentication, product filtering, admin product management, and a responsive user interface.",
      challenges:
        "Implementing authentication and authorization using JWT, managing cart state efficiently, integrating backend APIs with the frontend, and handling database relationships.",
      improvements:
        "Add payment gateway integration, implement product reviews and ratings, improve search functionality, and enhance performance with caching and optimization.",
      links: {
        live: "https://revenio-ecommerce.netlify.app",
        github: "https://github.com/MasumRezaMunna/ecommerce",
      },
    },
    {
      id: "etuitionbd",
      name: "eTuitionBD",
      description:
        "An online tuition platform that connects students with tutors efficiently.",
      image: "https://i.ibb.co/5h9bqBqk/etuition-first-page.png",
      technologies: ["React", "Firebase", "Netlify"],
      fullDescription:
        "eTuitionBD is an online platform designed to help students find suitable tutors and tutors connect with students. The platform provides an easy-to-use interface for browsing tutors, viewing profiles, and managing tuition-related information.",
      challenges:
        "Implementing authentication with Firebase, managing real-time data efficiently, creating responsive pages, and ensuring smooth deployment and performance optimization.",
      improvements:
        "Add advanced search and filtering, integrate messaging features between tutors and students, implement online payment options, and improve dashboard functionality.",
      links: {
        live: "https://inquisitive-pika-e48834.netlify.app",
        github: "https://github.com/MasumRezaMunna/etuition-client",
      },
    },
    {
      id: "revenio-next",
      name: "Revenio-Next",
      description:
        "A modern e-commerce web application built with Next.js for seamless online shopping.",
      image: "https://i.ibb.co/twpKFct5/Revenio-next-first-page.png",
      technologies: ["Next.js", "React", "MongoDB", "Express.js", "Tailwind CSS", "JWT"],
      fullDescription:
        "Revenio-Next is a full-stack e-commerce platform developed using Next.js that provides users with a smooth and responsive online shopping experience. Users can browse products, view detailed product information, add products to cart, create accounts, and manage their shopping activities.",
      challenges:
        "Managing authentication and protected routes, integrating frontend with backend APIs, handling dynamic product data, implementing cart functionality, and optimizing application performance.",
      improvements:
        "Add payment gateway integration, implement wishlist and product review features, improve search and filtering options, and enhance the admin dashboard with analytics.",
      links: {
        live: "https://revenio-next.vercel.app",
        github: "https://github.com/MasumRezaMunna/Revenio-Next.git",
      },
    },
  ],
};

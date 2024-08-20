import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import img4 from "../assets/projects/img4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React , Django and back-end technologies like Node.js, MySQL, and MongoDB , along with cloud services such as AWS . My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack Developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React.js, Python, Django, MySQL, and more. My journey in web development began with a deep curiosity about how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies. In my free time, I love watching anime and playing video games.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer Intern",
    company: "Pisyst India Pvt.Ltd.",
    description: `Stay tuned for updates on my latest work!`,
    technologies: [ "React.js","javascript","PHP","Dart","Flutter"],
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer Intern",
    company: "Octanet Software Services",
    description: ` Honed my skills in HTML, CSS, and JavaScript. I had the opportunity to work on a variety of projects, including creating and maintaining websites, developing CRUD (Create, Read, Update, Delete) applications, and cloning existing websites to gain a deeper understanding of front-end development principles.`,
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    year: "2022 - 2023",
    role: "Graphics Designer",
    company: "Aashman foundation",
    description: `Gained hands-on experience with industry-standard design tools such as Adobe Illustrator, Photoshop, and Canva. These tools enabled me to bring my design concepts to life, from initial sketches to final production-ready artwork.`,
    technologies: ["Adobe Photoshop", "Illustrator", "Canva", "Figma"],
  },

];

export const PROJECTS = [
  {
    title: "Skull Candy",
    image: project1,
    description:
      "A website for purchasing headphones. This project includes features such as product listings, detailed product pages, a shopping cart, User Authentication , Email verification and a secure checkout and payment gateyway.",
    technologies: ["HTML", "CSS", "Python", "Django", "SQLlite", "Bootstrap"],
    githubLink:"https://github.com/vikrant-27/Skullcandy",
  },
  {
    title: "Resume Generator",
    image: project2,
    description:
      "A CV generator application where users can create and download their resumes",
    technologies: ["HTML", "CSS","Bootstrap", "Javascript", "MongoDb" , "Node Js " ,"Express Js" ],
    githubLink:"https://github.com/vikrant-27/resume_generator",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind Css" , "React Js" ],
    githubLink:"https://github.com/vikrant-27/myPortfolio",
  },
  {
    title: "Bookish",
    image: project4,
    description:
      "Developed a comprehensive Bookstore App, a web application that enables users to browse books seamlessly. This project leveraged the MERN stack",
    technologies: ["HTML", "Tailwind Css", "React Js", "Node Js", "Express Js", "MongoDb"],
    githubLink:"https://github.com/vikrant-27/Bookish",
  },
  {
    title: "EMS",
    image: project3,
    description:
      "Developed an Employee Management System using Python with Django framework. Utilized CRUD operations to efficiently manage employee data, allowing for easy updating and manipulation of records.",
    technologies: ["HTML", "Css", "Bootstrap", "Python", "Django", "mySql"],
    githubLink:"https://github.com/vikrant-27/crudDjango",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Javascript", ],
    githubLink:"https://github.com/vikrant-27/Task-manager",
  },
  {
    title: "Temperature Converter",
    image: project1,
    description:
      "A temperature converter web application built with JavaScript that allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin.",
    technologies: ["HTML", "CSS", "Javascript", ],
    githubLink:"https://github.com/vikrant-27/temperature-converter",
  },
];

export const CONTACT = {
  address: "A-301 ,  P Town   Maharashtra , IN - 264 ",
  phoneNo: "+91 - 9503194686 ",
  email: "mailto:vikrant45.exe@gmail.com",
};

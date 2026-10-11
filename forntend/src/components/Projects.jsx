
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

import ecommerceImage from "../assets/ecommerce.png";
import portfolioImage from "../assets/portfolio.png";
import AyshaStudioImage from "../assets/studio.png";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Full-stack shopping website with products, cart, authentication and modern responsive UI.",
    image: ecommerceImage,
    icon: "🛒",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    live: "#",
    github: "https://github.com/rahulprajapat27951",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built with React and Tailwind CSS to showcase skills and projects.",
    image: portfolioImage,
    icon: "💻",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    live: "#",
    github: "https://github.com/rahulprajapat27951",
  },
  {
    title: "Ayasha Studio Website",
    description:
      "Modern studio website with responsive UI, REST API integration and database functionality.",
    image: AyshaStudioImage,
    icon: "💎",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    live: "https://aaysha-studio.vercel.app/",
    github: "https://github.com/rahulprajapat27951",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-[#243B53] bg-[#071A2F] px-5 py-24"
    >
      {/* Background Decorations */}
      <div className="absolute -left-20 top-10 h-48 w-48 rounded-full border border-[var(--theme-color)]/25"></div>

      <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full border border-[var(--theme-color)]/25"></div>

      <div className="absolute right-10 top-12 h-2 w-2 animate-pulse rounded-full bg-[var(--theme-color)] shadow-[0_0_20px_var(--theme-color)]"></div>

      <div className="absolute bottom-20 left-10 h-2 w-2 animate-pulse rounded-full bg-[var(--theme-color)] shadow-[0_0_20px_var(--theme-color)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-lg font-semibold text-[var(--theme-color)]">
            My Work
          </p>

          <h2 className="mt-3 text-5xl font-extrabold text-[#F1F5F9] sm:text-6xl">
            Projects
          </h2>

          {/* Gold Line */}
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[var(--theme-color)] shadow-[0_0_15px_var(--theme-color)]"></div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#A8B7C8] sm:text-lg">
            Here are some of the projects I have built using
            modern web development technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#243B53]
                bg-[#102A43]
                p-3
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[var(--theme-color)]
                hover:shadow-[0_0_40px_rgba(214,184,117,0.12)]
              "
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-52
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#071A2F]
                    via-transparent
                    to-transparent
                    opacity-70
                  "
                ></div>

                {/* Project Icon */}
                <div
                  className="
                    absolute
                    left-4
                    top-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--theme-color)]
                    bg-[#071A2F]/90
                    text-xl
                    shadow-[0_0_20px_rgba(214,184,117,0.2)]
                    transition
                    duration-500
                    group-hover:rotate-12
                    group-hover:scale-110
                  "
                >
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-3">

                {/* Title */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#F1F5F9]
                    transition
                    duration-300
                    group-hover:text-[var(--theme-color)]
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 min-h-[84px] leading-7 text-[#A8B7C8]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-[#334B63]
                        bg-[#091D33]
                        px-3
                        py-2
                        text-xs
                        font-semibold
                        text-[var(--theme-color)]
                        transition
                        duration-300
                        hover:border-[var(--theme-color)]
                        hover:bg-[var(--theme-color)]
                        hover:text-[#071A2F]
                      "
                    >
                      <span className="text-base">
                        {tech.icon}
                      </span>

                      {tech.name}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 grid grid-cols-2 gap-3">

                  {/* Live Demo */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-[var(--theme-color)]
                      px-4
                      py-3
                      font-bold
                      text-[#071A2F]
                      transition
                      duration-300
                      hover:scale-105
                      hover:opacity-80
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      border
                      border-[#334B63]
                      px-4
                      py-3
                      font-bold
                      text-[#F1F5F9]
                      transition
                      duration-300
                      hover:scale-105
                      hover:border-[var(--theme-color)]
                      hover:bg-[var(--theme-color)]
                      hover:text-[#071A2F]
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;


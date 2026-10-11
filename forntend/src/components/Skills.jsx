
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLink,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "text-yellow-400",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-slate-200",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-500",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
  },
  {
    name: "REST API",
    icon: <FaLink />,
    color: "text-blue-400",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-[#243B53] bg-[#071A2F] px-5 py-24"
    >
      {/* Background Decorations */}

      <div
        className="
          absolute -left-20 top-10
          h-40 w-40
          rounded-full
          border border-[var(--theme-color)]/25
        "
      ></div>

      <div
        className="
          absolute -right-20 bottom-0
          h-48 w-48
          rounded-full
          border border-[var(--theme-color)]/25
        "
      ></div>

      <div
        className="
          absolute right-10 top-10
          h-2 w-2
          animate-pulse
          rounded-full
          bg-[var(--theme-color)]
          shadow-[0_0_15px_var(--theme-color)]
        "
      ></div>

      <div
        className="
          absolute bottom-20 left-10
          h-2 w-2
          animate-pulse
          rounded-full
          bg-[var(--theme-color)]
          shadow-[0_0_15px_var(--theme-color)]
        "
      ></div>

      {/* Main Container */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}

        <div className="mb-14 text-center">
          <p className="text-lg font-semibold text-[var(--theme-color)]">
            My Expertise
          </p>

          <h2 className="mt-3 text-5xl font-extrabold text-[#F1F5F9] sm:text-6xl">
            Skills
          </h2>

          {/* Gold Line */}

          <div
            className="
              mx-auto mt-3
              h-1 w-24
              rounded-full
              bg-[var(--theme-color)]
              shadow-[0_0_15px_var(--theme-color)]
            "
          ></div>

          <p
            className="
              mx-auto mt-6
              max-w-2xl
              text-base
              leading-7
              text-[#A8B7C8]
              sm:text-lg
            "
          >
            Technologies and tools I use to build modern,
            responsive and scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                relative
                flex
                min-h-[240px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-[#243B53]
                bg-[#102A43]
                p-6
                text-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[var(--theme-color)]
                hover:shadow-[0_0_35px_rgba(214,184,117,0.15)]
              "
            >

              {/* Card Glow */}

              <div
                className="
                  absolute
                  inset-0
                  bg-[var(--theme-color)]/5
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                "
              ></div>

              {/* Icon + Rings Area */}

              <div
                className="
                  relative
                  flex
                  h-36
                  w-full
                  items-center
                  justify-center
                "
              >

                {/* Outer Ring */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-28
                    w-28
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[var(--theme-color)]/40
                    transition-all
                    duration-700
                    group-hover:scale-125
                    group-hover:rotate-180
                  "
                ></div>

                {/* Inner Ring */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-24
                    w-32
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-45
                    rounded-full
                    border
                    border-[var(--theme-color)]/30
                    transition-all
                    duration-700
                    group-hover:rotate-[225deg]
                  "
                ></div>

                {/* Icon Glow */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-20
                    w-20
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[var(--theme-color)]/10
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:bg-[var(--theme-color)]/25
                  "
                ></div>

                {/* Main Icon */}

                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-25
                    w-25
                    items-center
                    justify-center
                    text-4xl
                    ${skill.color}
                    drop-shadow-[0_0_15px_rgba(214,184,117,0.20)]
                    transition-all
                    duration-500
                    group-hover:scale-125
                  `}
                >
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}

              <h3
                className="
                  relative
                  z-10
                  mt-2
                  text-center
                  text-lg
                  font-bold
                  text-[#F1F5F9]
                  transition-all
                  duration-300
                  group-hover:text-[var(--theme-color)]
                "
              >
                {skill.name}
              </h3>

              {/* Bottom Line */}

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  h-1
                  w-12
                  -translate-x-1/2
                  rounded-full
                  bg-[var(--theme-color)]
                  shadow-[0_0_10px_var(--theme-color)]
                  transition-all
                  duration-500
                  group-hover:w-20
                "
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;


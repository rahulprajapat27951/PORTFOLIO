import profileImage from "../assets/What-is-full-stack-web-development.webp";

function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-800 bg-[#051937] px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[#A8EB12]">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  bg-[#A8EB12]
                  opacity-20
                  blur-3xl
                  animate-pulse
                "
              ></div>

              {/* Rotating Ring */}
              <div
                className="
                  absolute
                  -inset-3
                  rounded-3xl
                  border-2
                  border-dashed
                  border-[#A8EB12]/60
                  animate-[spin_12s_linear_infinite]
                "
              ></div>

              {/* Image Card */}
              <div
                className="
                  relative
                  h-72
                  w-72
                  animate-[float_4s_ease-in-out_infinite]
                  overflow-hidden
                  rounded-2xl
                  border-2
                  border-[#A8EB12]
                  bg-[#061f43]
                  p-2
                  shadow-[0_0_60px_rgba(168,235,18,0.20)]
                  sm:h-80
                  sm:w-80
                "
              >
                <img
                  src={profileImage}
                  alt="Your Name"
                  className="
                    h-full
                    w-full
                    rounded-xl
                    object-cover
                    object-center
                    transition
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* Top Decoration */}
              <div
                className="
                  absolute
                  -right-5
                  top-6
                  h-7
                  w-7
                  animate-bounce
                  rounded-full
                  bg-[#A8EB12]
                  shadow-[0_0_25px_#A8EB12]
                "
              ></div>

              {/* Bottom Decoration */}
              <div
                className="
                  absolute
                  -bottom-3
                  left-8
                  h-5
                  w-5
                  animate-pulse
                  rounded-full
                  bg-[#A8EB12]
                  shadow-[0_0_20px_#A8EB12]
                "
              ></div>

            </div>
          </div>

          {/* Right - About Content */}
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Building Ideas Into Web Applications
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              I'm a passionate Full Stack Developer who enjoys
              creating clean, responsive and user-friendly
              applications.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-400">
              I work with modern technologies to build complete
              web applications from frontend to backend. I enjoy
              learning new technologies and solving real-world
              development problems.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              {/* Technologies */}
              <div
                className="
                  group
                  rounded-xl
                  border
                  border-slate-800
                  bg-[#061f43]
                  p-5
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#A8EB12]
                  hover:shadow-[0_10px_30px_rgba(168,235,18,0.10)]
                "
              >
                <p className="text-2xl font-bold text-[#A8EB12]">
                  10+
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Technologies
                </p>
              </div>

              {/* Projects */}
              <div
                className="
                  group
                  rounded-xl
                  border
                  border-slate-800
                  bg-[#061f43]
                  p-5
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#A8EB12]
                  hover:shadow-[0_10px_30px_rgba(168,235,18,0.10)]
                "
              >
                <p className="text-2xl font-bold text-[#A8EB12]">
                  5+
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Projects
                </p>
              </div>

            </div>

            {/* Download CV */}
            <div className="mt-8">
              <a
                href="#"
                className="
                  inline-block
                  rounded-lg
                  bg-[#A8EB12]
                  px-6
                  py-3
                  font-bold
                  text-[#051937]
                  transition
                  duration-300
                  hover:scale-105
                  hover:bg-[#baff3d]
                "
              >
                Download CV
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
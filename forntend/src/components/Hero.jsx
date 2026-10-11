
import profileImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-[#071A2F] px-5 py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 text-lg font-medium text-[var(--theme-color)]">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-[#F1F5F9] sm:text-6xl lg:text-7xl">
            <span className="text-[var(--theme-color)]">
              Rahul Prajapat
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-[#D5DFEA] sm:text-5xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#A8B7C8] sm:text-lg">
            I build modern, responsive and scalable web applications
            using React, Node.js, Express and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-[var(--theme-color)] px-6 py-3 text-center font-semibold text-[#071A2F] transition duration-300 hover:scale-105 hover:opacity-80"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-[#334B63] px-6 py-3 text-center font-semibold text-[#F1F5F9] transition duration-300 hover:border-[var(--theme-color)] hover:text-[var(--theme-color)]"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/"
              className="text-[#A8B7C8] transition duration-300 hover:text-[var(--theme-color)]"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-[#A8B7C8] transition duration-300 hover:text-[var(--theme-color)]"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/vip_raj_prajapati_741"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8B7C8] transition duration-300 hover:text-[var(--theme-color)]"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Outer Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-[var(--theme-color)]
                opacity-20
                blur-3xl
                animate-pulse
              "
            ></div>

            {/* Floating Image */}
            <div
              className="
                relative
                h-64
                w-64
                animate-[float_4s_ease-in-out_infinite]
                rounded-full
                border-4
                border-[var(--theme-color)]
                bg-[#102A43]
                p-2
                shadow-[0_0_80px_rgba(214,184,117,0.20)]
                sm:h-80
                sm:w-80
              "
            >
              <img
                src={profileImage}
                alt="Rahul Prajapat - Full Stack Developer"
                className="
                  h-full
                  w-full
                  rounded-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* Decorative Circle */}
            <div
              className="
                absolute
                -right-4
                top-10
                h-6
                w-6
                animate-bounce
                rounded-full
                bg-[var(--theme-color)]
                shadow-[0_0_20px_var(--theme-color)]
              "
            ></div>

            {/* Decorative Circle */}
            <div
              className="
                absolute
                -bottom-2
                left-8
                h-4
                w-4
                animate-pulse
                rounded-full
                bg-[var(--theme-color)]
                shadow-[0_0_15px_var(--theme-color)]
              "
            ></div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;


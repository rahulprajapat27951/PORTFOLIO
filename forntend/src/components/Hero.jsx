import profileImage from "../assets/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-[#051937] px-5 py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 text-lg font-medium text-[#A8EB12]">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
          
            <span className="text-[#A8EB12]">
              Rahul Prajapat
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            I build modern, responsive and scalable web applications
            using React, Node.js, Express and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-[#A8EB12] px-6 py-3 text-center font-semibold text-[#051937] transition duration-300 hover:scale-105 hover:bg-[#baff3d]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-white transition duration-300 hover:border-[#A8EB12] hover:text-[#A8EB12]"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-5">
            <a
              href="#"
              className="text-slate-400 transition hover:text-[#A8EB12]"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-slate-400 transition hover:text-[#A8EB12]"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/vip_raj_prajapati_741"
              className="text-slate-400 transition hover:text-[#A8EB12]"
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
                bg-[#A8EB12]
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
                border-[#A8EB12]
                bg-[#061f43]
                p-2
                shadow-[0_0_80px_rgba(168,235,18,0.25)]
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
                bg-[#A8EB12]
                shadow-[0_0_20px_#A8EB12]
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
                bg-[#A8EB12]
                shadow-[0_0_15px_#A8EB12]
              "
            ></div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
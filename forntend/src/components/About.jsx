
import profileImage from "../assets/What-is-full-stack-web-development.webp";

function About() {
  return (
    <section
      id="about"
      className="w-full overflow-hidden border-t border-[#243B53] bg-[#071A2F] px-4 py-14 sm:px-5 sm:py-20 lg:py-24"
    >
      <style>{`
        @keyframes aboutFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes aboutSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          #about .about-animated {
            animation: none !important;
          }
          #about * {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-sm font-medium text-[var(--theme-color)] sm:text-base">
            Get To Know Me
          </p>

          <h2 className="text-3xl font-bold text-[#F1F5F9] sm:text-4xl md:text-5xl">
            About Me
          </h2>
        </div>

        {/* Responsive Content */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-10 lg:gap-14">
          {/* Profile Image */}
          <div className="flex min-w-0 justify-center px-3 py-3 sm:px-5">
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl bg-[var(--theme-color)] opacity-20 blur-2xl sm:blur-3xl"
                aria-hidden="true"
              />

              {/* Rotating Ring */}
              <div
                className="about-animated pointer-events-none absolute -inset-2 rounded-3xl border-2 border-dashed border-[var(--theme-color)]/60 sm:-inset-3"
                style={{
                  animation: "aboutSpin 12s linear infinite",
                }}
                aria-hidden="true"
              />

              {/* Image Card */}
              <div
                className="about-animated relative h-[230px] w-[230px] overflow-hidden rounded-2xl border-2 border-[var(--theme-color)] bg-[#102A43] p-2 shadow-[0_0_40px_rgba(214,184,117,0.20)] transition-shadow duration-300 hover:shadow-[0_0_55px_rgba(214,184,117,0.3)] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]"
                style={{
                  animation: "aboutFloat 4s ease-in-out infinite",
                }}
              >
                <img
                  src={profileImage}
                  alt="Full Stack Web Development"
                  loading="lazy"
                  className="h-full w-full rounded-xl object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Decorations */}
              <div
                className="absolute -right-3 top-5 h-5 w-5 animate-bounce rounded-full bg-[var(--theme-color)] shadow-[0_0_20px_var(--theme-color)] sm:-right-5 sm:h-7 sm:w-7"
                aria-hidden="true"
              />

              <div
                className="absolute -bottom-2 left-5 h-4 w-4 animate-pulse rounded-full bg-[var(--theme-color)] shadow-[0_0_20px_var(--theme-color)] sm:bottom-0 sm:left-8 sm:h-5 sm:w-5"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="min-w-0 text-center md:text-left">
            <h3 className="text-2xl font-bold leading-snug text-[#F1F5F9] sm:text-3xl">
              Building Ideas Into Web Applications
            </h3>

            <p className="mt-5 text-base leading-7 text-[#A8B7C8] sm:text-lg sm:leading-8">
              I'm a passionate Full Stack Developer who enjoys creating clean,
              responsive and user-friendly applications.
            </p>

            <p className="mt-4 text-base leading-7 text-[#A8B7C8] sm:text-lg sm:leading-8">
              I work with modern technologies to build complete web
              applications from frontend to backend. I enjoy learning new
              technologies and solving real-world development problems.
            </p>

            {/* Highlights */}
            <div className="mx-auto mt-7 grid max-w-md grid-cols-2 gap-3 sm:mt-8 sm:gap-4 md:mx-0">
              <div className="group min-w-0 rounded-xl border border-[#243B53] bg-[#102A43] p-4 transition duration-300 hover:-translate-y-1 hover:border-[var(--theme-color)] hover:shadow-[0_10px_30px_rgba(214,184,117,0.10)] sm:p-5">
                <p className="text-2xl font-bold text-[var(--theme-color)] sm:text-3xl">
                  10+
                </p>

                <p className="mt-1 text-xs text-[#A8B7C8] sm:text-sm">
                  Technologies
                </p>
              </div>

              <div className="group min-w-0 rounded-xl border border-[#243B53] bg-[#102A43] p-4 transition duration-300 hover:-translate-y-1 hover:border-[var(--theme-color)] hover:shadow-[0_10px_30px_rgba(214,184,117,0.10)] sm:p-5">
                <p className="text-2xl font-bold text-[var(--theme-color)] sm:text-3xl">
                  5+
                </p>

                <p className="mt-1 text-xs text-[#A8B7C8] sm:text-sm">
                  Projects
                </p>
              </div>
            </div>

            {/* Download CV */}
            <div className="mt-7 sm:mt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[var(--theme-color)] px-6 py-3 text-sm font-bold text-[#071A2F] transition duration-300 hover:scale-[1.02] hover:opacity-90 sm:w-auto sm:text-base"
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

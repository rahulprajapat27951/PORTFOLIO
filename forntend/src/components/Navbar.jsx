import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#A8EB12]/20 bg-[#051937]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-[#A8EB12]"
        >
          PORTFOLIO<span className="text-white">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, url]) => (
            <a
              key={name}
              href={url}
              className="text-sm text-slate-300 transition hover:text-[#A8EB12]"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-[#A8EB12]/30 px-3 py-2 text-xl text-[#A8EB12] transition hover:bg-[#A8EB12] hover:text-[#051937] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-[#A8EB12]/20 bg-[#051937] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([name, url]) => (
              <a
                key={name}
                href={url}
                onClick={() => setOpen(false)}
                className="text-slate-300 transition hover:text-[#A8EB12]"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
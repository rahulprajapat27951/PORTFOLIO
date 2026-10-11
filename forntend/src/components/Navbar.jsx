
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
    <nav className="sticky top-0 z-50 border-b border-[#243B53] bg-[#071A2F]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="text-2xl font-bold text-[var(--theme-color)] transition duration-300 hover:opacity-80"
          
        >
          PORTFOLIO<span className="text-[#F1F5F9]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, url]) => (
            <a
              key={name}
              href={url}
              className="text-sm font-medium text-[#A8B7C8] transition duration-300 hover:text-[var(--theme-color)]"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-[var(--theme-color)]/40 px-3 py-2 text-xl text-[var(--theme-color)] transition duration-300 hover:bg-[var(--theme-color)] hover:text-[#071A2F] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-[#243B53] bg-[#071A2F] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([name, url]) => (
              <a
                key={name}
                href={url}
                onClick={() => setOpen(false)}
                className="rounded-md py-1 text-[#A8B7C8] transition duration-300 hover:pl-2 hover:text-[var(--theme-color)]"
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


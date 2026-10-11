
function Footer() {
  return (
    <footer className="border-t border-[#243B53] bg-[#051937] px-5 py-6 text-center">
      <p className="text-sm text-[#A8B7C8]">
        © {new Date().getFullYear()} Rahul Kumar. All rights reserved.
      </p>

      <p className="mt-2 text-sm text-[var(--theme-color)]">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;

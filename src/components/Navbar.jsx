function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-cyan-400">
          Sagnika
        </h1>
<ul className="hidden md:flex gap-8 text-lg">
  <li>
    <a href="#home" className="hover:text-cyan-400 transition duration-300">
      Home
    </a>
  </li>

  <li>
    <a href="#about" className="hover:text-cyan-400 transition duration-300">
      About
    </a>
  </li>

  <li>
    <a href="#skills" className="hover:text-cyan-400 transition duration-300">
      Skills
    </a>
  </li>

  <li>
    <a href="#projects" className="hover:text-cyan-400 transition duration-300">
      Projects
    </a>
  </li>

  <li>
    <a href="#contact" className="hover:text-cyan-400 transition duration-300">
      Contact
    </a>
  </li>
</ul>

      </div>
    </nav>
  );
}

export default Navbar;
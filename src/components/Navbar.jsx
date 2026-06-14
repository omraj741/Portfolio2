import { navItems } from '../utils/data';

const Navbar = ({ active }) => (
  <nav className="fixed left-1/2 top-4 z-50 w-[94%] max-w-7xl -translate-x-1/2 rounded-full border border-white/15 bg-black/70 px-3 py-3 shadow-cinematic backdrop-blur-2xl md:px-4">
    <div className="flex items-center gap-3">
      <a href="#home" className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-black transition hover:scale-105">
        OM
      </a>
      <ul className="flex flex-1 items-center gap-1 overflow-x-auto px-1 [scrollbar-width:none] lg:justify-center lg:gap-2 [&::-webkit-scrollbar]:hidden">
        {navItems.map((item) => (
          <li key={item.id} className="shrink-0">
            <a
              href={`#${item.id}`}
              className={`rounded-full px-3 py-2 text-[0.65rem] font-black uppercase tracking-widest text-white transition duration-300 hover:bg-white/10 hover:text-white md:px-4 md:text-xs ${
                active === item.id ? 'bg-white/15 shadow-[0_0_24px_rgba(255,255,255,0.12)]' : 'text-zinc-300'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li className="shrink-0">
          <a
            href="/resume/Om_Raj_Resume.pdf"
            download="Om_Raj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 px-3 py-2 text-[0.65rem] font-black uppercase tracking-widest text-white transition hover:scale-105 hover:border-white hover:bg-white hover:text-black md:px-4 md:text-xs"
          >
            <span aria-hidden="true" className="mr-2">⬇</span>
            Resume
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

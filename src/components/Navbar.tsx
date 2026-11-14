import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/portfolio';

export function Navbar() {
  const [activeId, setActiveId] = useState<string>('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 140;

      if (scrollY < 100) {
        setActiveId('home');
        return;
      }

      let current = 'home';
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop - offset;
          if (scrollY >= top) {
            current = item.id;
          }
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 48;
      if (nearBottom) {
        current = 'contact';
      }

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#28282C]/70 bg-[#0B0B0C]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1160px] items-center justify-between gap-4 px-5 sm:px-8">
        {/* Brand */}
        <a
          href="#home"
          className="shrink-0 whitespace-nowrap text-2xl font-black tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF7A00] rounded-sm"
          aria-label="Harshit Chaplot Home"
        >
          <span className="text-[#FF7A00]">HC</span>
          <span className="text-[#F2F2F3]">.</span>
        </a>

        {/* Centered Navigation Links (Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-6 md:flex lg:gap-8"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={`whitespace-nowrap shrink-0 text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF7A00] rounded-sm ${
                  isActive
                    ? 'font-bold text-[#FF7A00]'
                    : 'font-normal text-[#A0A0A8] hover:text-[#F2F2F3]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Primary Action + Mobile Hamburger */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            className="hidden whitespace-nowrap shrink-0 rounded-lg bg-[#FF7A00] px-5 py-2.5 text-sm font-bold text-[#0B0B0C] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#FF9A3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9A3D] sm:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#28282C] bg-[#161618] text-[#F2F2F3] transition-colors hover:border-[#FF7A00]/50 hover:bg-[#1C1C1F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile Navigation"
          className="border-t border-[#28282C] bg-[#111113] px-5 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  className={`flex min-h-[44px] items-center rounded-lg px-3 text-base transition-colors ${
                    isActive
                      ? 'bg-[#FF7A00]/10 font-bold text-[#FF7A00]'
                      : 'text-[#A0A0A8] hover:bg-[#161618] hover:text-[#F2F2F3]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#FF7A00] px-5 py-2.5 text-sm font-bold text-[#0B0B0C] transition-colors hover:bg-[#FF9A3D]"
            >
              Hire Me
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

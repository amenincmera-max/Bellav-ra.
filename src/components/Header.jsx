import { useState } from 'react';

function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="relative z-10 border-b border-line bg-paper">
      <div className="mx-auto flex min-h-17.5 w-[calc(100%-40px)] max-w-300 items-center justify-between sm:min-h-20.5 sm:w-[calc(100%-64px)]">
        <a className="font-display text-[25px] font-medium tracking-[-1.2px] no-underline sm:text-[27px]" href="#home" onClick={closeMenu}>
          Bellavèra<span className="text-accent">.</span>
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="flex h-10.5 w-10.5 flex-col items-center justify-center gap-1.5 border border-line bg-transparent md:hidden"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span className="h-px w-4.25 bg-ink" />
          <span className="h-px w-4.25 bg-ink" />
        </button>

        <nav
          aria-label="Main navigation"
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col border-b border-line bg-paper px-5 pb-4.5 pt-2 md:static md:flex md:flex-row md:items-center md:gap-9.5 md:border-0 md:bg-transparent md:p-0`}
        >
          <a className="py-3.25 text-[13px] text-[#57534d] no-underline transition-colors hover:text-accent md:py-0" href="#home" onClick={closeMenu}>Home</a>
          <a className="py-3.25 text-[13px] text-[#57534d] no-underline transition-colors hover:text-accent md:py-0" href="#products" onClick={closeMenu}>Shop</a>
          <a className="py-3.25 text-[13px] text-[#57534d] no-underline transition-colors hover:text-accent md:py-0" href="#about" onClick={closeMenu}>About</a>
          <a className="flex items-center justify-between gap-2.25 py-3.25 text-[13px] text-ink no-underline md:py-0" href="#products" onClick={closeMenu}>
            Cart <span className="grid h-5.75 min-w-5.75 place-items-center rounded-full bg-sand px-1.25 text-[11px]" aria-label={`${cartCount} items in cart`}>{cartCount}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
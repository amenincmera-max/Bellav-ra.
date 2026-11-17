function Footer() {
  return (
    <footer className="border-t border-line bg-[#f4f0ea] py-8.5" id="about">
      <div className="mx-auto flex w-[calc(100%-40px)] flex-col items-start gap-4 sm:w-[calc(100%-64px)] sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:max-w-300">
        <div>
          <p className="m-0 font-display text-2xl font-medium tracking-[-1.2px]">Bellavèra</p>
          <p className="mb-0 mt-1.25 text-[11px] text-muted">Italian Fashion Boutique</p>
        </div>
        <p className="m-0 text-[11px] text-muted">© 2026 Bellavèra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
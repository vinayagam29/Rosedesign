
function Footer() {
  return (
    <footer className="bg-[#171514] px-6 py-12 text-[#F7F3EC] md:px-12">
      <div className="mx-auto max-w-[1440px]">

        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">

          {/* Brand */}
          <div>
            <a href="#home" className="font-display text-3xl">
              Rose<span className="italic text-[#D9B1AE]">D</span>signs.
            </a>

            <p className="mt-4 text-sm text-white/55">
              Ideas that make your brand bloom.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs tracking-[0.25em] text-[#D9B1AE]">
              EXPLORE
            </p>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="#home" className="transition hover:text-dusty-blush">Home</a>
              <a href="#about" className="transition hover:text-dusty-blush">About</a>
              <a href="#services" className="transition hover:text-dusty-blush">Services</a>
              <a href="#portfolio" className="transition hover:text-dusty-blush">Our Work</a>
              <a href="#contact" className="transition hover:text-dusty-blush">Contact</a>
            </div>
          </div>

          {/* Back to top */}
          <a
            href="#home"
            className="flex w-fit items-center gap-3 text-xs tracking-widest text-[#D9B1AE] transition hover:text-white"
          >
            BACK TO TOP
            <span className="text-lg">↑</span>
          </a>

        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/15 pt-7 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} RoseDsigns. All rights reserved.</p>
          <p>Creative · Branding · Advertising</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

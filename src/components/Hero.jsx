
function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100svh-96px)] max-w-360 items-center gap-8 px-6 py-8 md:grid-cols-2 md:px-12 md:py-10"
    >
      {/* Left content */}
      <div>
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-antique-rose" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-antique-rose">
            Creative · Branding · Advertising
          </p>
        </div>

        <h1 className="max-w-162.5 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-[72px]">
          Ideas that make your
          <span className="block italic text-antique-rose">
            brand bloom.
          </span>
        </h1>

        <p className="mt-6 max-w-md text-sm leading-8 text-black/60 md:text-base">
          We create meaningful brands, compelling content and impactful
          campaigns that help businesses stand out and grow.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-6">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-5 bg-antique-rose px-7 py-4 text-xs uppercase tracking-widest text-white transition-all duration-300 hover:bg-burgundy"
          >
            Explore Our Work
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>

          <a
            href="#about"
            className="border-b border-antique-rose pb-1 text-xs uppercase tracking-widest text-rose-black hover:text-antique-rose"
          >
            Discover Us
          </a>
        </div>

        <div className="mt-16 hidden items-center gap-5 md:flex">
          <span className="h-px w-12 bg-antique-rose" />
          <p className="font-display text-sm italic text-rose-black/60">
            Creativity with purpose.
          </p>
        </div>
      </div>

      {/* Right image */}
      <div className="relative mx-auto w-full max-w-107.5">
        <div className="absolute -right-4 -top-4 h-full w-full border border-antique-rose/40" />

        <div className="relative aspect-4/5 overflow-hidden bg-dusty-blush">
          <img
            src="/rosehero.png"
            alt="Elegant floral creative photography"
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-rose-black/30 to-transparent" />

          <div className="absolute bottom-7 left-7 text-white">
            <p className="font-display text-3xl italic">Beautifully</p>
            <p className="font-display text-3xl italic">different.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

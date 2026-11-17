
function About() {
  const principles = [
    {
      number: "01",
      title: "Discover",
      description: "Your story, audience and ambitions.",
    },
    {
      number: "02",
      title: "Create",
      description: "A distinctive identity and digital presence.",
    },
    {
      number: "03",
      title: "Connect",
      description: "Bring your brand to the people who matter.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#F7F3EC] px-6 py-28 md:px-12 md:py-16"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Introduction */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] text-[#A76570]">
              THE ART OF A DISTINCTIVE BRAND
            </p>

            <h2 className="font-display text-5xl  text-[#171514] md:text-6xl">
              RoseDsigns<span className="text-[#B08A57]">.</span>
            </h2>
          </div>

          <img
            src="/elegant-emblem-removebg-preview.png"
            alt="RoseDsigns gold emblem"
            className="h-20 w-20 object-contain md:h-28 md:w-28 bg-[#171514] rounded-full px-4"
          />
        </div>

        {/* Philosophy */}
        <div className="grid gap-12 border-t border-[#B08A57]/40 pt-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-7 text-xs tracking-[0.3em] text-[#A76570]">
              OUR PHILOSOPHY
            </p>

            <h3 className="font-display text-5xl leading-[1.15] text-[#171514] md:text-7xl">
              Rooted in purpose.
              <br />
              <span className="italic text-[#A76570]">
                Made to be seen.
              </span>
            </h3>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-display text-2xl leading-relaxed text-[#171514] md:text-3xl">
              We create <strong>meaningful brands</strong>,
              <strong> compelling content</strong> and
              <strong> impactful campaigns</strong> that help
              businesses stand out and grow.
            </p>

            <p className="mt-7 max-w-lg text-sm leading-8 text-[#171514]/65">
              Every brand has a story worth telling. We bring
              clarity, care and creativity to the way yours is
              seen, heard and remembered.
            </p>
          </div>
        </div>

        {/* Three principles */}
        <div className="mt-24 grid border-t border-[#B08A57]/40 md:grid-cols-3">
          {principles.map((item, index) => (
            <div
              key={item.number}
              className={`py-9 md:px-8 md:py-12 ${
                index !== 0
                  ? "md:border-l border-[#B08A57]/40"
                  : ""
              }`}
            >
              <p className="mb-8 text-sm tracking-widest text-[#A76570]">
                {item.number}
              </p>

              <h4 className="font-display text-3xl text-[#171514] md:text-4xl">
                {item.title}
              </h4>

              <p className="mt-4 text-sm leading-7 text-[#171514]/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Your next chapter */}
        <div className="mt-16 border-t border-[#B08A57]/40 pt-8">
          <p className="mb-5 text-xs tracking-[0.3em] text-[#A76570]">
            YOUR NEXT CHAPTER
          </p>

          <div className="flex items-center justify-between gap-6">
            <p className="font-display text-2xl italic text-[#672D39] md:text-3xl">
              Rooted in purpose. Ready to grow.
            </p>

            <a
              href="#contact"
              className="flex shrink-0 items-center gap-3 text-xs tracking-widest text-[#171514] transition-colors hover:text-[#A76570]"
            >
              LET'S BEGIN <span className="text-lg">↗</span>
            </a>
          </div>
        </div>

        {/* Section ending */}
        <div className="mt-20 border-b border-[#B08A57]/40" />

      </div>
    </section>
  );
}

export default About;

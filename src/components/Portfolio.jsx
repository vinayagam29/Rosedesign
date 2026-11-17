
function Portfolio() {
  const projects = [
    {
      number: "01",
      category: "SOCIAL MEDIA APPLICATION",
      title: "Ideas that bloom.",
      description: "A visual expression of the RoseDsigns identity through soft tones and floral details.",
      image:
        "/roseapplications1.jpeg",
      theme: "bg-[#D9B1AE]",
    },
    {
      number: "02",
      category: "SOCIAL MEDIA APPLICATION",
      title: "Rooted in creativity.",
      description: "A botanical-inspired visual direction with a rich, elegant colour palette.",
      image:
        "/roseapplications2.jpeg",
      theme: "bg-[#183B32]",
    },
    {
      number: "03",
      category: "SOCIAL MEDIA APPLICATION",
      title: "The art of a brand.",
      description: "A minimal editorial composition celebrating thoughtful design and storytelling.",
      image:
        "/roseapplications3.jpeg",
      theme: "bg-[#F7F3EC]",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-[#A76570] px-6 py-24 text-[#F7F3EC] md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] text-[#D9B1AE]">
              A GLIMPSE INTO OUR WORLD
            </p>

            <h2 className="font-display text-5xl leading-tight md:text-7xl">
              Selected Creative
              <br />
              <span className="italic text-[#A76570]">Applications.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#F7F3EC]/65">
            Every detail tells a story. Explore how thoughtful design,
            colour and creativity come together to shape a brand.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="group">
              <div
                className={`relative aspect-[4/5] overflow-hidden ${project.theme}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-rose-black/40 to-transparent" />

                <span className="absolute left-5 top-5 text-xs tracking-widest text-white">
                  {project.number} / 03
                </span>

                <span className="absolute bottom-5 right-5 text-3xl text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <div className="border-b border-white/20 py-6">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-dusty-blush">
                  {project.category}
                </p>

                <h3 className="font-display text-2xl italic">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/20 pt-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl italic">
              Good design lives in the details.
            </p>
            <p className="mt-2 text-sm text-white/50">
              From digital expressions to tangible brand experiences.
            </p>
          </div>

          <a
            href="#contact"
            className="w-fit border border-[#D9B1AE] px-7 py-4 text-xs tracking-widest text-[#D9B1AE] transition-colors duration-300 hover:bg-[#D9B1AE] hover:text-[#171514]"
          >
            LET'S CREATE TOGETHER ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;


import { useEffect, useState } from "react";

function Portfolio() {
  const projects = [
    {
      number: "01",
      category: "SOCIAL MEDIA APPLICATION",
      title: "Ideas that bloom.",
      description:
        "A visual expression of the RoseDsigns identity through soft tones and floral details.",
      image: "/roseapplications1.jpeg",
      theme: "bg-[#D9B1AE]",
    },
    {
      number: "02",
      category: "SOCIAL MEDIA APPLICATION",
      title: "Rooted in creativity.",
      description:
        "A botanical-inspired visual direction with a rich, elegant colour palette.",
      image: "/roseapplications2.jpeg",
      theme: "bg-[#183B32]",
    },
    {
      number: "03",
      category: "SOCIAL MEDIA APPLICATION",
      title: "The art of a brand.",
      description:
        "A minimal editorial composition celebrating thoughtful design and storytelling.",
      image: "/roseapplications3.jpeg",
      theme: "bg-[#F7F3EC]",
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  const closePreview = () => setActiveProject(null);

  const showPrevious = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (activeProject === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePreview();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

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
              <span className="italic text-[#F7F3EC]">
                Applications.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#F7F3EC]/75">
            Every detail tells a story. Explore how thoughtful design,
            colour and creativity come together to shape a brand.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.number} className="group">
              <button
                type="button"
                onClick={() => setActiveProject(index)}
                aria-label={`View ${project.title}`}
                className={`relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden text-left ${project.theme}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#171514]/50 to-transparent" />

                <span className="absolute left-5 top-5 text-xs tracking-widest text-white">
                  {project.number} / 03
                </span>

                <span className="absolute bottom-5 right-5 text-3xl text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>

                <span className="absolute bottom-5 left-5 text-[10px] tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  VIEW PROJECT
                </span>
              </button>

              <div className="border-b border-white/20 py-6">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-[#F7F3EC]/80">
                  {project.category}
                </p>

                <h3 className="font-display text-2xl italic">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/75">
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
            <p className="mt-2 text-sm text-white/70">
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

      {activeProject !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171514]/95 p-4 backdrop-blur-sm md:p-10"
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
          aria-label="Creative application preview"
        >
          <button
            type="button"
            onClick={closePreview}
            aria-label="Close preview"
            className="absolute right-5 top-5 z-10 text-4xl text-white transition-colors hover:text-[#D9B1AE]"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous project"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-3xl text-white transition-colors hover:text-[#D9B1AE] md:left-8"
          >
            ←
          </button>

          <div
            className="flex max-h-[90vh] max-w-4xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={projects[activeProject].image}
              alt={projects[activeProject].title}
              className="max-h-[75vh] max-w-full object-contain"
            />

            <div className="mt-5 text-center text-white">
              <p className="text-[10px] tracking-[0.25em] text-[#D9B1AE]">
                {projects[activeProject].category}
              </p>
              <h3 className="mt-2 font-display text-2xl italic">
                {projects[activeProject].title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next project"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-3xl text-white transition-colors hover:text-[#D9B1AE] md:right-8"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}

export default Portfolio;

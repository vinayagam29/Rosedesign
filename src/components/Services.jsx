
function Services() {
  const services = [
    {
      number: '01',
      title: 'Creative',
      subtitle: 'Ideas that inspire.',
      description:
        'Fresh concepts, thoughtful visuals and creative direction that bring ideas to life.',
      image:
        '/Blush Rose and Stone Arch Editorial.png',
      alt: 'Creative graphic design composition',
    },
    {
      number: '02',
      title: 'Branding',
      subtitle: 'Identities that connect.',
      description:
        'Distinctive brand identities that communicate your story and make your business memorable.',
      image:
        '/rosebranding3.jpg',
      alt: 'Brand identity and stationery design',
    },
    {
      number: '03',
      title: 'Advertising',
      subtitle: 'Stories that make an impact.',
      description:
        'Engaging campaigns and compelling communication that help brands reach their audience.',
      image:
        '/roseAD.jpg',
      alt: 'Creative advertising and campaign presentation',
    },
  ]

  return (
    <section
      id="services"
      className="bg-ivory px-6 py-24 md:px-12 md:py-12"
    >
      <div className="mx-auto max-w-360">

        {/* Heading */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-antique-rose" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-antique-rose">
              What we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="font-display text-5xl leading-[1.1] text-rose-black md:text-7xl">
              Thoughtful ideas.
              <span className="block italic text-antique-rose">
                Meaningful impact.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-8 text-rose-black/65 md:justify-self-end">
              From the first spark of an idea to the final execution,
              we bring creativity and purpose together to help brands bloom.
            </p>
          </div>
        </div>

        {/* Visual service cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group">

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-dusty-blush">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-rose-black/50 via-transparent to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="text-sm tracking-widest text-white">
                    {service.number}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <p className="font-display text-4xl italic text-white md:text-5xl">
                    {service.title}
                  </p>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-xl text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-rose-black">
                    ↗
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="border-b border-rose-black/15 py-7">
                <p className="font-display text-xl italic text-antique-rose">
                  {service.subtitle}
                </p>

                <p className="mt-4 max-w-sm text-sm leading-7 text-rose-black/65">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-rose-black/15 pt-8 md:flex-row md:items-center">
          <p className="font-display text-2xl italic text-burgundy">
            Creativity with purpose.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-5 bg-burgundy px-7 py-4 text-xs uppercase tracking-widest text-white transition-colors duration-300 hover:bg-antique-rose"
          >
            Let's create together
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Services

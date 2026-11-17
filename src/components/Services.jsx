
import { useState } from 'react'

function Services() {
  const [activeService, setActiveService] = useState(null)

  const services = [
    {
      number: '01',
      title: 'Creative',
      subtitle: 'Ideas that inspire.',
      description:
        'Fresh concepts, thoughtful visuals and creative direction that bring ideas to life.',
      details: [
        'Creative direction',
        'Visual storytelling',
        'Campaign concepts',
      ],
      image: '/Blush Rose and Stone Arch Editorial.png',
      alt: 'Creative graphic design composition',
    },
    {
      number: '02',
      title: 'Branding',
      subtitle: 'Identities that connect.',
      description:
        'Distinctive brand identities that communicate your story and make your business memorable.',
      details: [
        'Brand strategy',
        'Visual identity',
        'Brand guidelines',
      ],
      image: '/rosebranding3.jpg',
      alt: 'Brand identity and stationery design',
    },
    {
      number: '03',
      title: 'Advertising',
      subtitle: 'Stories that make an impact.',
      description:
        'Engaging campaigns and compelling communication that help brands reach their audience.',
      details: [
        'Digital campaigns',
        'Social media creatives',
        'Advertising concepts',
      ],
      image: '/roseAD.jpg',
      alt: 'Creative advertising and campaign presentation',
    },
  ]

  return (
    <section
      id="services"
      className="bg-ivory px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">

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

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const isActive = activeService === index

            return (
              <article key={service.number} className="group">

                <button
                  type="button"
                  onClick={() =>
                    setActiveService(isActive ? null : index)
                  }
                  aria-expanded={isActive}
                  className="relative block w-full cursor-pointer overflow-hidden bg-dusty-blush text-left"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                        isActive
                          ? 'scale-105'
                          : 'group-hover:scale-105'
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-rose-black/60 via-transparent to-transparent" />

                    <span className="absolute left-6 top-6 text-xs tracking-widest text-white">
                      {service.number} / 03
                    </span>

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div>
                        <p className="mb-2 text-xs tracking-widest text-white/80">
                          {service.subtitle}
                        </p>
                        <h3 className="font-display text-4xl italic text-white md:text-5xl">
                          {service.title}
                        </h3>
                      </div>

                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white text-2xl text-white transition-all duration-500 ${
                          isActive
                            ? 'rotate-45 bg-white text-rose-black'
                            : 'group-hover:bg-white group-hover:text-rose-black'
                        }`}
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                </button>

                <div className="border-b border-rose-black/15 py-7">
                  <p className="font-display text-xl italic text-antique-rose">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-rose-black/65">
                    {service.description}
                  </p>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                      isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-5">
                        <p className="mb-3 text-[10px] tracking-[0.2em] text-antique-rose">
                          WHAT IT INCLUDES
                        </p>

                        <ul className="space-y-3">
                          {service.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-center gap-3 text-sm text-rose-black/80"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-antique-rose" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveService(isActive ? null : index)
                    }
                    className="mt-5 text-[10px] uppercase tracking-[0.2em] text-burgundy transition-colors hover:text-antique-rose"
                  >
                    {isActive ? 'Show less −' : 'Explore service +'}
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-rose-black/15 pt-8 md:flex-row md:items-center">
          <p className="font-display text-2xl italic text-burgundy">
            Creativity with purpose.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center justify-center gap-5 bg-burgundy px-7 py-4 text-xs uppercase tracking-widest text-white transition-colors duration-300 hover:bg-antique-rose"
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

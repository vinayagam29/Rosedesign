
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="overflow-hidden bg-dusty-blush px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto grid max-w-360 items-center gap-16 lg:grid-cols-2 lg:gap-20">

        {/* Contact form */}
        <div>
          <p className="mb-6 text-xs tracking-[0.3em] text-burgundy">
            LET'S MAKE SOMETHING MEANINGFUL
          </p>

          <h2 className="font-display text-5xl leading-[1.1] text-rose-black md:text-7xl">
            Have a project
            <br />
            in <span className="italic text-burgundy">mind?</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-rose-black/70">
            Tell us a little about your brand and where you'd
            like to take it. We'd love to hear your ideas.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-8">

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-xs tracking-wider text-burgundy"
                >
                  YOUR NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full border-b border-rose-black/40 bg-transparent py-3 text-sm text-rose-black outline-none placeholder:text-rose-black/50 focus:border-burgundy"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs tracking-wider text-burgundy"
                >
                  YOUR EMAIL
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border-b border-[#171514]/40 bg-transparent py-3 text-sm text-[#171514] outline-none placeholder:text-[#171514]/50 focus:border-[#672D39]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-xs tracking-wider text-[#672D39]"
              >
                WHAT DO YOU HAVE IN MIND?
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="A new website, a brand refresh, your next campaign..."
                required
                className="w-full resize-none border-b border-[#171514]/40 bg-transparent py-3 text-sm text-[#171514] outline-none placeholder:text-[#171514]/50 focus:border-[#672D39]"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-between bg-[#171514] px-7 py-5 text-xs tracking-widest text-[#F7F3EC] transition-all duration-300 hover:bg-[#672D39] sm:w-[70%]"
            >
              CREATE PROJECT BRIEF
              <span className="text-lg">↗</span>
            </button>

            {submitted && (
              <p className="text-sm text-[#672D39]">
                Thank you! Your details have been entered.
              </p>
            )}
          </form>
        </div>

        {/* Business card showcase */}

        {/* Business card showcase */}
        <div className="relative mx-auto flex w-full max-w-[540px] flex-col items-center justify-center gap-[-20px] py-10">

          <img
            src="/rosecardivory.jpeg"
            alt="RoseDsigns ivory business card with gold emblem"
            className="relative z-10 w-[88%] -rotate-6 rounded-sm shadow-2xl transition-transform duration-500 hover:-translate-y-3 hover:-rotate-3"
          />

          <img
            src="/rosecardpink.jpeg"
            alt="RoseDsigns antique rose business card"
            className="relative -mt-10 w-[88%] rotate-3 rounded-sm shadow-2xl transition-transform duration-500 hover:-translate-y-3 hover:rotate-1"
          />

          <p className="mt-8 text-center text-[10px] tracking-[0.3em] text-[#672D39]/70">
            THOUGHTFULLY DESIGNED. BEAUTIFULLY REMEMBERED.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;

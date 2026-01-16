

import React, { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-reveal");
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".reveal-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-24 md:pt-32">
      {/* Header */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block reveal-on-scroll">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 reveal-on-scroll stagger-1">
              Building Legacy Through{" "}
              <span className="text-blue-600">Financial Integrity</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-on-scroll">
              <img
                src="https://picsum.photos/seed/finance1/800/600"
                alt="Our Office"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-8 reveal-on-scroll stagger-2">
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                  Who We Are
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Nebula Finserv is a premier financial advisory firm dedicated
                  to providing comprehensive wealth management solutions.
                  Founded with the mission to democratize elite financial
                  strategies, we serve a diverse range of clients from
                  individual investors to corporate entities.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To empower our clients with the knowledge and tools necessary
                  to achieve lifelong financial independence and security. We
                  believe in transparency, personalized care, and data-driven
                  decision making.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="text-blue-600 font-extrabold text-2xl mb-1">
                    Integrity
                  </div>
                  <p className="text-slate-500 text-sm">
                    Always doing what's right for the client.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="text-blue-600 font-extrabold text-2xl mb-1">
                    Expertise
                  </div>
                  <p className="text-slate-500 text-sm">
                    Decades of combined market experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-4">
              The Experts Behind Your Growth
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Meet our leadership team dedicated to your financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group reveal-on-scroll">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img
                    src={`https://picsum.photos/seed/team${i}/400/500`}
                    alt="Team Member"
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur text-white hover:bg-white hover:text-blue-600 transition-colors cursor-pointer">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {i === 1
                    ? "Rajesh Kumar"
                    : i === 2
                    ? "Anita Sharma"
                    : "Vikram Malhotra"}
                </h3>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                  {i === 1
                    ? "CEO & Founder"
                    : i === 2
                    ? "Head of Wealth"
                    : "Investment Director"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

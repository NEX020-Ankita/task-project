import React, { useEffect } from "react";

const Services: React.FC = () => {
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

  const serviceList = [
    {
      title: "Wealth Management",
      desc: "Our wealth management services are designed for high-net-worth individuals who require a sophisticated approach to their financial planning. We look at the big picture to ensure your assets are protected and growing.",
      features: [
        "Portfolio Management",
        "Asset Allocation",
        "Estate Planning",
        "Philanthropic Advice",
      ],
      icon: "💎",
    },
    {
      title: "Tax Consultation",
      desc: "Navigate the complex world of taxation with our expert consultants. We provide proactive strategies to minimize your tax burden while ensuring complete compliance with evolving regulations.",
      features: [
        "Tax Planning",
        "ITR Filing",
        "GST Consulting",
        "Corporate Tax Advice",
      ],
      icon: "📝",
    },
    {
      title: "Investment Planning",
      desc: "Build a robust investment strategy that aligns with your life goals. Whether you are saving for your child's education or a dream vacation, we help you choose the right instruments.",
      features: [
        "Mutual Funds",
        "Stock Market Advisory",
        "Fixed Income",
        "Real Estate Planning",
      ],
      icon: "📈",
    },
    {
      title: "Retirement Planning",
      desc: "Ensure your golden years are truly golden. We help you calculate your required retirement corpus and create a roadmap to achieve it through disciplined investing.",
      features: [
        "Pension Plans",
        "Legacy Planning",
        "Healthcare Funding",
        "Passive Income Setup",
      ],
      icon: "🏠",
    },
  ];

  return (
    <div className="pt-24 md:pt-32">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6">
              Expert Solutions for{" "}
              <span className="text-blue-600">Every Need</span>
            </h1>
            <p className="text-xl text-slate-500">
              From wealth creation to preservation, our comprehensive suite of
              financial services is tailored to your unique journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {serviceList.map((service, i) => (
              <div
                key={i}
                className={`p-10 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl transition-all duration-500 reveal-on-scroll stagger-${
                  (i % 2) + 1
                }`}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm font-semibold text-slate-700"
                    >
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Simple 3-Step Process
            </h2>
            <p className="text-slate-400">
              Achieving financial freedom is easier than you think.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We start with a deep dive into your current finances and future goals.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Our experts craft a bespoke financial roadmap tailored to you.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "We implement and monitor your plan, adjusting as markets evolve.",
              },
            ].map((item, i) => (
              <div key={i} className="relative reveal-on-scroll stagger-1">
                <div className="text-6xl font-display font-black text-white/10 absolute -top-10 left-1/2 -translate-x-1/2">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

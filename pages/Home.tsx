import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Wealth Management",
      desc: "Personalized strategies to grow and protect your assets over the long term.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Tax Consultation",
      desc: "Expert advice on minimizing liabilities and optimizing your financial efficiency.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Investment Planning",
      desc: "Tailored portfolios designed to meet your risk appetite and future goals.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full animate-reveal">
              Welcome to Nebula Finserv
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 leading-tight mb-8 animate-reveal stagger-1">
              Your Future, <span className="text-blue-600">Financially</span>{" "}
              Secured
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto animate-reveal stagger-2">
              Comprehensive financial planning and wealth management services
              tailored to your life goals. Join thousands of clients who trust
              us with their financial journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-reveal stagger-3">
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                Explore Services
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Clients", value: "10,000+" },
              { label: "AUM", value: "₹500Cr+" },
              { label: "Years Experience", value: "15+" },
              { label: "Trust Rating", value: "4.9/5" },
            ].map((stat, i) => (
              <div key={i} className="text-center reveal-on-scroll">
                <div className="text-3xl font-display font-extrabold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-4">
              Why Choose Nebula?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We combine modern technology with deep financial expertise to
              deliver results that matter to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 bg-white reveal-on-scroll stagger-${
                  i + 1
                }`}
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {f.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8 reveal-on-scroll">
            Ready to start your financial journey?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto reveal-on-scroll">
            Connect with our experts today and take the first step towards
            achieving your financial goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-xl reveal-on-scroll"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

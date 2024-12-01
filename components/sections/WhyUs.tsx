export default function WhyUs() {
    const features = [
      {
        title: "Expertise & Experience",
        description:
          "With years of experience in the construction industry, we deliver projects with precision and unparalleled craftsmanship.",
        icon: "🏗️",
      },
      {
        title: "Quality Assurance",
        description:
          "We use top-grade materials and implement rigorous quality control measures to ensure durable and reliable results.",
        icon: "✔️",
      },
      {
        title: "On-Time Delivery",
        description:
          "Our team is dedicated to delivering your projects within the agreed timeline without compromising on quality.",
        icon: "⏱️",
      },
      {
        title: "Customer Satisfaction",
        description:
          "We prioritize client needs and maintain transparent communication to exceed your expectations every step of the way.",
        icon: "🤝",
      },
      {
        title: "Innovative Solutions",
        description:
          "We employ modern technology and sustainable practices to provide innovative and eco-friendly construction solutions.",
        icon: "🌍",
      },
    ];
  
    return (
      <section className="bg-gradient-to-b from-gradientStart to-gradientEnd py-12 px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Why Choose Us?</h2>
          <p className="text-black mb-10">
            Our dedication to quality, innovation, and client satisfaction makes us a trusted partner for all your construction needs.
          </p>
          <div className="grid grid-cols-1 py-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white hover:bg-primary shadow-md rounded-lg p-4 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl mb-3 animate-fadeIn">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 hover:text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-gray-600 hover:text-slate-100 text-sm mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
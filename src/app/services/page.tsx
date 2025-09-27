import PageTitle from "@/components/PageTitle";

export default async function ServicesPage() {
  const services = [
    {
      id: 1,
      icon: "🏠",
      title: "Distressed Property Solutions",
      description:
        "We identify, evaluate, and structure deals for distressed assets, maximizing value for both sellers and buyers.",
      buttonText: "Contact Us",
    },
    {
      id: 2,
      icon: "✅",
      title: "Legal, Taxation & Insolvency Advisory",
      description:
        "Our in-house experts navigate complex legal frameworks, tax implications, and insolvency processes to ensure a seamless transaction.",
      buttonText: "Contact Us",
    },
    {
      id: 3,
      icon: "👥",
      title: "End-to-End Support",
      description:
        "From initial due diligence and valuation to marketing, negotiation, and final sale, we manage every step of the process.",
      buttonText: "Contact Us",
    },
  ];

  return (
    <div>
      <PageTitle
        title="Our Services"
        description="Providing specialized expertise across the distressed property lifecycle."
      />
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl text-yellow-600">
                      {service.icon}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Button */}
                <button className="bg-brand-primary text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

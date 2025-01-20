import React from 'react';
import {
  Building2,
  FileSpreadsheet,
  Users,
  ClipboardList,
  DollarSign,
  Calculator,
} from 'lucide-react';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 flex items-center justify-center text-orange-500">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mt-4">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mt-2">{description}</p>
      <button className="mt-4 text-orange-500 hover:text-orange-600 flex items-center space-x-1">
        <span>Learn more</span>
        <span>&#x2192;</span> {/* Right arrow icon */}
      </button>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Company Formation',
      description: 'Build web-based solutions that enhance customer experience.',
    },
    {
      icon: <FileSpreadsheet className="w-10 h-10" />,
      title: 'Company Secretarial Services',
      description: 'Make data-driven decisions and utilize technology to reach business goals.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Virtual Office Address',
      description: 'Foster customer relationships by effectively serving your market.',
    },
    {
      icon: <ClipboardList className="w-10 h-10" />,
      title: 'Annual Compliance Services',
      description: 'Turn your ideas into modern products with our design experts.',
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: 'Payroll Services',
      description: 'Expand your business across the globe with minimal effort.',
    },
    {
      icon: <Calculator className="w-10 h-10" />,
      title: 'Bookkeeping Services',
      description: 'Steering user behaviours with creative design, data insights & technology.',
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium mb-2 uppercase tracking-wide">
          Welcome to RegisterKaro.in
        </p>
        <h2 className="text-3xl font-bold">Explore Our Services</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
          See All Services
        </button>
      </div>
    </section>
  );
}

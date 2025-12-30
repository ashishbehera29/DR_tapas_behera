import { Activity, Microscope, Pill, Shield, Zap, Heart } from 'lucide-react';

export default function Specializations() {
  const specializations = [
    {
      icon: Activity,
      title: 'Medical Oncology',
      description: 'Comprehensive treatment of cancer using chemotherapy, immunotherapy, and targeted therapy approaches.',
    },
    {
      icon: Microscope,
      title: 'Precision Oncology',
      description: 'Personalized cancer treatment based on genetic profiling and molecular diagnostics.',
    },
    {
      icon: Pill,
      title: 'Chemotherapy',
      description: 'Advanced chemotherapy protocols for various cancer types with minimal side effects.',
    },
    {
      icon: Shield,
      title: 'Immunotherapy',
      description: 'Harnessing the immune system to fight cancer cells using the latest immunological treatments.',
    },
    {
      icon: Zap,
      title: 'Targeted Therapy',
      description: 'Precision treatments that target specific cancer cell characteristics and molecular pathways.',
    },
    {
      icon: Heart,
      title: 'Supportive Care',
      description: 'Comprehensive palliative care and symptom management for improved quality of life.',
    },
  ];

  const cancerTypes = [
    'Lung Cancer',
    'Breast Cancer',
    'Colorectal Cancer',
    'Prostate Cancer',
    'Gastric Cancer',
    'Pancreatic Cancer',
    'Liver Cancer',
    'Leukemia',
    'Lymphoma',
    'Ovarian Cancer',
    'Head & Neck Cancer',
    'Skin Cancer',
  ];

  return (
    <section id="specializations" className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Areas of Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized treatment approaches for comprehensive cancer care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{spec.title}</h3>
                <p className="text-gray-600 leading-relaxed">{spec.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Cancer Types Treated
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cancerTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 px-4 py-3 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <p className="text-gray-800 font-medium">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

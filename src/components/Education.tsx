import { GraduationCap, Award, BookOpen, Medal } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'DM in Medical Oncology',
      institution: 'All India Institute of Medical Sciences (AIIMS), New Delhi',
      year: '2008-2011',
      description: 'Specialized training in medical oncology with focus on solid tumors and hematological malignancies',
    },
    {
      degree: 'MD in General Medicine',
      institution: 'Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh',
      year: '2005-2008',
      description: 'Advanced training in internal medicine and clinical management',
    },
    {
      degree: 'MBBS',
      institution: 'Maulana Azad Medical College, New Delhi',
      year: '1999-2004',
      description: 'Bachelor of Medicine and Bachelor of Surgery with honors',
    },
  ];

  const certifications = [
    {
      title: 'Fellowship in Precision Oncology',
      organization: 'Memorial Sloan Kettering Cancer Center, USA',
      year: '2012',
    },
    {
      title: 'Advanced Immunotherapy Training',
      organization: 'MD Anderson Cancer Center, USA',
      year: '2015',
    },
    {
      title: 'Clinical Trials Management',
      organization: 'Harvard Medical School',
      year: '2017',
    },
  ];

  const achievements = [
    'Best Young Oncologist Award - Indian Medical Association (2013)',
    'Excellence in Cancer Care Award - National Cancer Foundation (2016)',
    'Distinguished Service Award - Ministry of Health (2019)',
    'Research Excellence Award - International Oncology Society (2021)',
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Academic excellence and professional recognition
          </p>
        </div>

        <div className="mb-16">
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 md:p-8 rounded-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">{edu.degree}</h4>
                  <span className="text-teal-600 font-semibold">{edu.year}</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <BookOpen className="h-8 w-8 text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-teal-100 p-6 rounded-xl hover:border-teal-300 transition-colors"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-gray-700 mb-1">{cert.organization}</p>
                  <p className="text-teal-600 font-semibold">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Medal className="h-8 w-8 text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-900">Awards & Recognition</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 rounded-xl text-white hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 flex-shrink-0 mt-1" />
                    <p className="font-medium">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 md:p-12 rounded-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Professional Memberships
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-800">American Society of Clinical Oncology (ASCO)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-800">European Society for Medical Oncology (ESMO)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-800">Indian Society of Medical Oncology (ISMO)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-800">Association of Physicians of India (API)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-800">Indian Medical Association (IMA)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-800">International Society of Oncology (ISO)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

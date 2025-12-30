import { Award, Users, Briefcase, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-16 md:pt-20">
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Leading Cancer Specialist
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Dr. Tapas Behera
              </h1>
              <p className="text-xl sm:text-2xl text-teal-600 font-semibold mb-4">
                MD, DM (Medical Oncology)
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Compassionate cancer care with advanced treatment protocols. Over 15 years of experience
                in diagnosing and treating various forms of cancer with a patient-centered approach.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg"
                >
                  Book Consultation
                </button>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-teal-600"
                >
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <Award className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">15+</p>
                    <p className="text-sm text-gray-600">Years Exp.</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <Users className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">5000+</p>
                    <p className="text-sm text-gray-600">Patients</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <Briefcase className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">25+</p>
                    <p className="text-sm text-gray-600">Awards</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <Heart className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">98%</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-600 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/public/img/dr.png"
                    alt="Dr. Tapas Behera"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CheckCircle, Target, Eye } from 'lucide-react';

export default function About() {
  //name
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Dr. Tapas Behera
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing world-class cancer care with compassion and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Pioneering Cancer Treatment
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dr. Tapas Behera is a distinguished medical oncologist with over 15 years of experience
              in treating various forms of cancer. His commitment to patient care and cutting-edge
              treatment methods has made him one of the most sought-after cancer specialists.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With extensive training in medical oncology and a deep understanding of cancer biology,
              Dr. Behera specializes in personalized treatment plans that combine the latest medical
              advancements with compassionate care.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Specialized in advanced chemotherapy and immunotherapy protocols
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Expert in precision oncology and targeted cancer therapy
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Member of American Society of Clinical Oncology (ASCO)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Published researcher with multiple papers in international journals
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="/img/cr.jpg"
              alt="Dr. Tapas Behera in consultation"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
            <Target className="h-12 w-12 text-teal-600 mb-4" />
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
            <p className="text-gray-700 leading-relaxed">
              To provide comprehensive, compassionate cancer care that combines cutting-edge medical
              science with a patient-centered approach. We strive to offer hope, dignity, and the
              highest quality of life to every patient we serve.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
            <Eye className="h-12 w-12 text-teal-600 mb-4" />
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h4>
            <p className="text-gray-700 leading-relaxed">
              To be recognized as a leader in cancer treatment and research, setting new standards
              in oncological care. We envision a future where cancer is not just treatable, but
              preventable, through innovation and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

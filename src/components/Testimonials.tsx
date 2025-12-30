import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      condition: 'Lung Cancer Survivor',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Dr. Behera gave me hope when I thought there was none. His expertise and compassionate care helped me beat lung cancer. I am forever grateful for his dedication and support throughout my treatment journey.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      condition: 'Breast Cancer Survivor',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The personalized treatment plan Dr. Behera created for me was incredibly effective. His knowledge of the latest treatments and his caring approach made all the difference in my recovery.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      condition: 'Colorectal Cancer Patient',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Dr. Behera is not just a doctor, he is a healer. His thorough explanation of my condition and treatment options helped me make informed decisions. I am now cancer-free thanks to his exceptional care.',
      rating: 5,
    },
    {
      name: 'Sunita Reddy',
      condition: 'Ovarian Cancer Survivor',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The advanced immunotherapy treatment recommended by Dr. Behera worked wonders for me. His positive attitude and medical expertise gave me the strength to fight and win against cancer.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Patient Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from patients who have experienced exceptional care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="h-10 w-10 text-teal-600 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-teal-600">{testimonial.condition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Thousands of Satisfied Patients
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Experience world-class cancer care with a compassionate touch
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { Users, Home as HomeIcon, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About SavayasYoga</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bringing the ancient wisdom of yoga to modern homes with certified instructors and personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At SavayasYoga, we believe that everyone deserves access to quality yoga instruction in the comfort of their own space. 
                Our mission is to make yoga accessible, convenient, and transformative for people of all ages and fitness levels.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We connect you with certified yoga instructors who bring not just expertise, but also genuine care and attention to your personal wellness journey.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-green-200 to-blue-200 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=600&h=400&fit=crop" 
                  alt="Yoga instructor teaching" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Certified Instructors</h3>
                <p className="text-gray-600">
                  All our yoga instructors are certified professionals with extensive training and experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Home Convenience</h3>
                <p className="text-gray-600">
                  Practice yoga in your own space, at your preferred time, without the hassle of traveling.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Care</h3>
                <p className="text-gray-600">
                  Each session is tailored to your individual needs, goals, and fitness level.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied customers who have transformed their lives with SavayasYoga.
            </p>
            <Link 
              to="/book-appointment" 
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Book Your First Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
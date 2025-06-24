import { Link } from 'react-router-dom';
import { Home as HomeIcon, Shield, Heart, Star, Clock } from 'lucide-react';
import trainers from '../data/trainers';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Find Your Inner
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Peace at Home
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with certified yoga trainers who come to your doorstep. 
                Experience personalized yoga sessions in the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/book-appointment" 
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Book Your Session
                </Link>
                <Link 
                  to="/trainers" 
                  className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all"
                >
                  View Trainers
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop" 
                  alt="Yoga at home" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose SavayasYoga?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of convenience, expertise, and personalized care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HomeIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">At Your Doorstep</h3>
              <p className="text-gray-600">
                No need to travel. Our certified trainers come to your home at your preferred time.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Certified Trainers</h3>
              <p className="text-gray-600">
                All our yoga instructors are certified professionals with years of experience.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personalized Care</h3>
              <p className="text-gray-600">
                Customized yoga sessions tailored to your fitness level and health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to start your yoga journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Choose Trainer</h3>
              <p className="text-gray-600">Browse and select from our certified yoga trainers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Book Session</h3>
              <p className="text-gray-600">Schedule your preferred date and time slot</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Make Payment</h3>
              <p className="text-gray-600">Secure payment through our platform</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Start Your Journey</h3>
              <p className="text-gray-600">Enjoy personalized yoga sessions at home</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Featured Trainers</h2>
            <p className="text-xl text-gray-600">Experienced professionals ready to guide your journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.slice(0, 3).map((trainer) => (
              <div key={trainer.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{trainer.name}</h3>
                <p className="text-green-600 text-center mb-2">{trainer.specialization}</p>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-gray-600">{trainer.rating}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{trainer.experience}</span>
                </div>
                <p className="text-gray-600 text-center text-sm mb-4">{trainer.bio}</p>
                <div className="text-center">
                  <span className="text-lg font-semibold text-green-600">{trainer.price}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/trainers" 
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
            >
              View All Trainers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
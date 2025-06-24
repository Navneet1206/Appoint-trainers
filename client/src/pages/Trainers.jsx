import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import trainers from '../data/trainers';

const Trainers = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');
  const specializations = ['All', 'Hatha Yoga', 'Vinyasa Flow', 'Ashtanga Yoga', 'Prenatal Yoga'];
  const filteredTrainers = selectedSpecialization === 'All' 
    ? trainers 
    : trainers.filter(trainer => trainer.specialization === selectedSpecialization);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Certified Trainers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our experienced yoga instructors, each specialized in different yoga styles
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {specializations.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialization(spec)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedSpecialization === spec
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-green-400'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTrainers.map((trainer) => (
            <div key={trainer.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{trainer.name}</h3>
              <p className="text-green-600 text-center font-medium mb-3">{trainer.specialization}</p>
              
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-gray-600 text-sm">{trainer.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="text-gray-400" size={16} />
                  <span className="text-gray-600 text-sm">{trainer.experience}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-center text-sm mb-6">{trainer.bio}</p>
              
              <div className="text-center mb-6">
                <span className="text-2xl font-bold text-green-600">{trainer.price}</span>
              </div>
              
              <Link 
                to="/book-appointment" 
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-full text-center font-semibold hover:shadow-lg transition-all block"
              >
                Book Session
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
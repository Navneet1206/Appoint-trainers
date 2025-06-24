import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-50 to-blue-50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                SavayasYoga
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Bringing peace and wellness to your doorstep with certified yoga trainers. 
              Transform your life with personalized yoga sessions at home.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                <span className="text-green-600 font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
                <span className="text-blue-600 font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer">
                <span className="text-pink-600 font-bold">i</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">Home</Link></li>
              <li><Link to="/trainers" className="text-gray-600 hover:text-green-600 transition-colors">Trainers</Link></li>
              <li><Link to="/book-appointment" className="text-gray-600 hover:text-green-600 transition-colors">Book Session</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-green-600" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-green-600" />
                <span className="text-gray-600">hello@savayasyoga.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-green-600" />
                <span className="text-gray-600">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">© 2025 SavayasYoga. All rights reserved. Namaste 🙏</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
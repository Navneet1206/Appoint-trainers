import { useState } from 'react';
import { Link } from 'react-router-dom';
import trainers from '../data/trainers';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    trainer: '',
    date: '',
    time: ''
  });
  const [showOtpStep, setShowOtpStep] = useState(false);
  const [showPasswordStep, setShowPasswordStep] = useState(false);
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOtpStep(true);
    console.log('Triggering OTP for:', formData.phone);
  };

  const handleOtpSubmit = () => {
    if (otp === '1234') {
      const existingUser = localStorage.getItem('yogaUser');
      if (!existingUser) {
        setIsNewUser(true);
        setShowPasswordStep(true);
        setShowOtpStep(false);
      } else {
        handlePayment();
      }
    } else {
      alert('Invalid OTP. Try 1234 for demo.');
    }
  };

  const handlePasswordSubmit = () => {
    if (password.length >= 6) {
      const newUser = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      };
      localStorage.setItem('yogaUser', JSON.stringify(newUser));
      handlePayment();
    } else {
      alert('Password must be at least 6 characters long');
    }
  };

  const handlePayment = () => {
    alert('Redirecting to Razorpay payment gateway... (Demo)');
    console.log('Razorpay payment initiated for booking:', formData);
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Your Yoga Session</h1>
            <p className="text-xl text-gray-600">Fill in your details to schedule a personalized yoga session</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {!showOtpStep && !showPasswordStep && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Trainer</label>
                  <select
                    name="trainer"
                    value={formData.trainer}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a trainer</option>
                    {trainers.map((trainer) => (
                      <option key={trainer.id} value={trainer.name}>
                        {trainer.name} - {trainer.specialization} ({trainer.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="06:00">6:00 AM</option>
                      <option value="07:00">7:00 AM</option>
                      <option value="08:00">8:00 AM</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all"
                >
                  Proceed to Verification
                </button>
              </form>
            )}

            {showOtpStep && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Verify OTP</h2>
                <p className="text-gray-600 mb-6">
                  We've sent a verification code to {formData.phone}
                </p>
                <div className="max-w-xs mx-auto mb-6">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-lg tracking-widest focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    maxLength="4"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-6">Demo OTP: 1234</p>
                <button
                  onClick={handleOtpSubmit}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Verify OTP
                </button>
              </div>
            )}

            {showPasswordStep && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Password</h2>
                <p className="text-gray-600 mb-6">
                  You're a new user! Please create a password for your account.
                </p>
                <div className="max-w-sm mx-auto mb-6">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create password (min 6 characters)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    minLength="6"
                  />
                </div>
                <button
                  onClick={handlePasswordSubmit}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Create Account & Proceed to Payment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
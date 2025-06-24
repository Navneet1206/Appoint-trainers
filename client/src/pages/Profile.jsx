import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [subscription, setSubscription] = useState({
    trainer: 'Arjun Sharma',
    plan: 'Monthly Premium',
    status: 'Active',
    nextRenewal: '2025-07-24',
    sessionsLeft: 8
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('yogaUser') || 'null');
    setUser(userData);
  }, []);

  const handleRenewSubscription = () => {
    alert('Redirecting to payment gateway for subscription renewal...');
  };

  if (!user) {
    return (
      <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to login to view your profile</p>
          <Link 
            to="/login" 
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">My Profile</h1>
            <p className="text-xl text-gray-600">Manage your yoga journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                  <p className="text-lg text-gray-800">{user.name}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  <p className="text-lg text-gray-800">{user.email}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                  <p className="text-lg text-gray-800">{user.phone}</p>
                </div>
              </div>

              <button className="mt-6 bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                Edit Profile
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Subscription Details</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Current Trainer:</span>
                  <span className="font-semibold text-grayernel

System: gray-800">{subscription.trainer}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Plan:</span>
                  <span className="font-semibold text-gray-800">{subscription.plan}</span>
                </div>
                
                <div class>
                  <span className="text-gray-600">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    subscription.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {subscription.status}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sessions Left:</span>
                  <span className="font-semibold text-gray-800">{subscription.sessionsLeft}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Next Renewal:</span>
                  <span className="font-semibold text-gray-800">{subscription.nextRenewal}</span>
                </div>
              </div>

              <button 
                onClick={handleRenewSubscription}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Renew Subscription
              </button>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Sessions</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">Hatha Yoga Session</p>
                  <p className="text-gray-600">with Arjun Sharma</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-800">June 20, 2025</p>
                  <p className="text-green-600 font-medium">Completed</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">Morning Flow Session</p>
                  <p className="text-gray-600">with Arjun Sharma</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-800">June 18, 2025</p>
                  <p className="text-green-600 font-medium">Completed</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">Evening Relaxation</p>
                  <p className="text-gray-600">with Arjun Sharma</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-800">June 25, 2025</p>
                  <p className="text-blue-600 font-medium">Scheduled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
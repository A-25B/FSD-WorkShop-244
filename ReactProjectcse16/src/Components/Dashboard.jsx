import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching user data saved during login/signup
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Redirect to login if user session is not found
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-sky-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-[0_12px_35px_rgba(59,130,246,0.12)] overflow-hidden">
        
        {/* Top Navbar Header */}
        <div className="bg-white border-b border-gray-100 px-8 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Welcome, {user.name || 'User'}! 👋</h1>
              <p className="text-xs text-gray-500">Dashboard Panel</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Dashboard Main Content Body */}
        <div className="p-8 space-y-6">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Account Overview </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-xs font-semibold text-gray-400 block uppercase">Full Name :  </span>
                <span className="text-gray-800 font-medium">{user.name}</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-xs font-semibold text-gray-400 block uppercase">Email Address : </span>
                <span className="text-gray-800 font-medium">{user.email}</span>
              </div>
            </div>
          </div>

          <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400">
            Wellcome to my Dashboard
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;

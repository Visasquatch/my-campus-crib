import { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  const [campus, setCampus] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('google_user') || localStorage.getItem('manual_user');
    const storedCampus = localStorage.getItem('user_campus');

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedCampus) setCampus(storedCampus);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-white-200 p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Your Profile</h1>
        <div className="space-y-3 mb-6 w-full">
          <p className="text-xl font-semibold text-gray-700">
            {user ? `${user.fName || user.given_name || user.name} ${user.lName || ''}` : 'Guest'}
          </p>
          <p className="text-md text-gray-600">
            Email: <span className="font-medium">{user ? user.email : 'No email available'}</span>
          </p>
          <p className="text-md text-gray-600">
            Campus: <span className="font-medium">{campus || 'No Campus Specified'}</span>
          </p>
        </div>
        <button
          className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition duration-200 ease-in-out transform hover:-translate-y-1"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}
export default Profile;
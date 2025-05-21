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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>

      <span className="text-sm font-medium">
        {user ? `${user.fName || user.given_name || user.name} ${user.lName || ''}` : 'Guest'}
      </span>

      <p>Email: {user ? user.email : 'No email available'}</p>

      <span className="text-sm">{campus || 'No Campus'}</span><br/>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Edit Profile</button>
    </div>
  );
}

export default Profile;

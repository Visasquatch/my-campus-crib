import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';

const Dashboard = () => {
  const { userRole } = useAuth();
  const [hostels, setHostels] = useState([]);
  const [newHostel, setNewHostel] = useState({ name: '', location: '', price: '' });
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (userRole === 'admin') {
      fetchHostels();
    }
  }, [userRole]);

  const fetchHostels = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/hostels`);
      setHostels(response.data);
    } catch (error) {
      console.error('Error fetching hostels', error);
    }
  };

  const handleCreateHostel = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/hostels`,
        newHostel,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNewHostel({ name: '', location: '', price: '' });
      fetchHostels();
    } catch (error) {
      console.error('Error creating hostel', error);
      alert(error.response?.data?.message || 'Could not create hostel');
    }
  };

  const handleDeleteHostel = async (id) => {
    if (!window.confirm('Are you sure you want to delete this hostel?')) return;
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/hostels/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchHostels();
    } catch (error) {
      console.error('Error deleting hostel', error);
    }
  };

  return (
    <div className="p-6">
      {userRole !== 'admin' ? (
        <div className="p-4">🚫 You don’t have access to this page.</div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Add New Hostel</h2>
            <input
              type="text"
              placeholder="Hostel Name"
              value={newHostel.name}
              onChange={(e) => setNewHostel({ ...newHostel, name: e.target.value })}
              className="border p-2 mr-2"
            />
            <input
              type="text"
              placeholder="Location"
              value={newHostel.location}
              onChange={(e) => setNewHostel({ ...newHostel, location: e.target.value })}
              className="border p-2 mr-2"
            />
            <input
              type="number"
              placeholder="Price"
              value={newHostel.price}
              onChange={(e) => setNewHostel({ ...newHostel, price: e.target.value })}
              className="border p-2 mr-2"
            />
            <button
              onClick={handleCreateHostel}
              className="bg-[#1f2c75]-400 text-white px-4 py-2 rounded"
            >
              Add Hostel
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">All Hostels</h2>
            {hostels.length === 0 ? (
              <p>No hostels found.</p>
            ) : (
              <ul className="space-y-3">
                {hostels.map((hostel) => (
                  <li key={hostel.id} className="border p-3 flex justify-between items-center">
                    <span>
                      <strong>{hostel.name}</strong> — {hostel.location} — ₦{hostel.price}
                    </span>
                    <button
                      onClick={() => handleDeleteHostel(hostel.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;

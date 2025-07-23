import React, { useEffect, useState } from "react";
import '../components/header.css';

 const ActualCart = () => {
  const [myHostels, setMyHostels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyHostels = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payment/my-hostels`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await res.json();
        setMyHostels(data);
      } catch (err) {
        console.error('Failed to fetch hostels:', err);
      }finally {
        setLoading(false); 
      }
    };
    fetchMyHostels();
  }, []);

  return (
    <div className="cartGeneral grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-br from-blue-100 to-white-200">
      {loading ? (
        <p className="text-center col-span-full text-gray-500">Loading your booked hostels...</p>
      ) : myHostels.length > 0 ? (
        myHostels.map((hostel, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
            <h2 className="text-2xl py-2 font-medium">
              {hostel.name} <img
              src="https://img.icons8.com/?size=100&id=20629&format=png&color=000000"
              alt="cart"
              className="w-8"
            /></h2>
            <p className="text-gray-600 mb-2">{hostel.location}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No hostels booked yet.
        </p>
      )}
    </div>
  );
};
export default ActualCart;
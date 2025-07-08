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
    <div className="cartGeneral grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        <p className="text-center col-span-full text-gray-500">Loading your booked hostels...</p>
      ) : myHostels.length > 0 ? (
        myHostels.map((hostel, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
            <h2 className="text-2xl py-2 font-medium">{hostel.name}</h2>
            <p className="text-gray-600 mb-2">{hostel.location}</p>
            <p className="text-lg font-semibold">₦{hostel.price}</p>
           {/* <button className="mt-4 w-full bg-orange-400 text-white py-2 rounded hover:bg-orange-500">
              View Details
            </button> */}
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
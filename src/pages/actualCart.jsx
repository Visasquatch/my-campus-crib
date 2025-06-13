import React, { useEffect, useState } from "react";
import '../components/header.css';

 const ActualCart = () => {
  const [myHostels, setMyHostels] = useState([]);

  useEffect(() => {
    const fetchMyHostels = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/payments/my-hostels', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await res.json();
        setMyHostels(data);
      } catch (err) {
        console.error('Failed to fetch hostels:', err);
      }
    };

    fetchMyHostels();
  }, []);

  return (
    <div className="cartGeneral">
      <div>
        {myHostels.length > 0 ? (
          myHostels.map((hostel, index) => (
            <div key={index}>
              <h2>{hostel.name}</h2>
              <p>{hostel.location}</p>
              <p>₦{hostel.price}</p>
            </div>
          ))
        ) : (
          <p>No hostels booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default ActualCart;
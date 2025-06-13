import React from "react";
import { Link } from 'react-router-dom';
import bookIcon from '../assets/images/bunk bed.png';
import { useSelector, useDispatch } from 'react-redux';
import { book } from '../store/cart';

const HostelCart = ({ data }) => {
    const carts = useSelector(store=>store.cart.items) ;
    console.log(carts);
    const { id, name, image, description, slug, roomTypes } = data;
    const dispatch = useDispatch();
    const handleBooking = () => {
        dispatch(book({
            productId: id,
            quantity: 1,
        }));
    }
    const startingPrice = roomTypes && roomTypes.length > 0
  ? Math.min(...roomTypes.map(room => parseInt(room.price.replace(/,/g, ''))))
  : 'N/A';

    return (
      <div className="bg-white p-5 rounded-xl shadow-sm">
         <Link to={slug}>
          <img src={image} alt="Hostel pic" className="w-full h-80 object-cover object-top" />
        </Link>
        <h2 className="text-2xl py-3 text-center font-medium">{name}</h2>
        <p>{description} </p>
        <div className="flex justify-between items-center">
        <span className="text-2xl font-medium">From: ₦{startingPrice},000</span>
        <button className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-4" onClick={handleBooking}>
            <img src={bookIcon} alt="bookIcon" className="w-5"/>
            Book
        </button></div>
      </div>
    );
};

export default HostelCart;

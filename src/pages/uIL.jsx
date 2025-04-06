import React from 'react';
import { hostels } from "./hostels.jsx"
import HostelCart from '../components/hostelCart.jsx';
import uilLogo from "../assets/images/UIL Logo.png";
// import ImageCarousel from '../components/imageCarousel.jsx';

const UIL = () => {
    return (
        <div className='ml-5 mr-5 mt-10'>
        <h1 className='text-3xl my-5 flex justify-center items-center'>
            <img src={uilLogo} alt="UIL Logo" className="mr-2 w-16 h-16" />
            University of Ilorin</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {hostels.map((hostel,key) =>
        <HostelCart key={key} data={hostel} />
        )}
        </div>
        </div>
      );
    }
export default UIL;


import React, { useState } from "react";
import { hostels } from "./hostels.jsx"
import HostelCart from '../components/hostelCart.jsx';
import uilLogo from "../assets/images/UIL Logo.png";


const UIL = () => {
    const [selectedGender, setSelectedGender] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

        const filteredHostels = hostels.filter(
          (hostel) =>
            (selectedGender === "all" || hostel.gender.toLowerCase() === selectedGender) &&
      hostel.name.toLowerCase().includes(searchQuery.toLowerCase())
        );  
    return (
        <div className='ml-5 mr-5 mt-10'>
        <h1 className='text-3xl my-5 flex justify-center items-center'>
            <img src={uilLogo} alt="UIL Logo" className="mr-2 w-16 h-16" />
            University of Ilorin</h1>
            <div className="flex items-center gap-4 mt-4">
              <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 rounded"
              />
              
              <select
                className="border rounded p-2"
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
              >
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {filteredHostels.map((hostel,key) =>
        <HostelCart key={key} data={hostel} />
        )}
        </div>
        </div>
      );
    }
export default UIL;


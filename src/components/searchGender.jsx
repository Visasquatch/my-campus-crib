import React, { useState } from "react";
import { hostels } from "../pages/hostels";

const SearchGender = () => {
const [searchQuery, setSearchQuery] = useState("");
const [selectedGender, setSelectedGender] = useState("all");

const filteredHostels = hostels.filter(
    (hostel) =>
      (selectedGender === "all" || hostel.gender.toLowerCase() === selectedGender) &&
      hostel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

return (
  <div>
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
    <option value="mixed">Mixed</option>
  </select>
</div>

    <div className="grid gap-4">
      {filteredHostels.map((hostel) => (
        <div key={hostel.id} className="border p-4 rounded">
          <h2 className="text-lg font-bold">{hostel.name}</h2>
          <p className="text-gray-600 capitalize">{hostel.gender} hostel</p>
        </div>
      ))}
    </div>
  </div>
);
}
export default SearchGender;
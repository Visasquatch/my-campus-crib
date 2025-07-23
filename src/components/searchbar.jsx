import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.css';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const universities = [
    { name: "University of Ilorin", route: "/university-of-ilorin" },
    { name: "University of Lagos", route: "/university-of-lagos" },
    { name: "University of Ibadan", route: "/university-of-ibadan" },
    { name: "University of Abuja", route: "/university-of-abuja" },
    { name: "University of Benin", route: "/university-of-benin" },
    { name: "Obafemi Awolowo University", route: "/obafemi-awolowo-university" },
    { name: "Olabisi Olabanjo University", route: "/olabisi-olabanjo-university" },
    { name: "Ahmadu Bello University", route: "/ahmadu-bello-university" },
    { name: "Federal University of Technology Akure", route: "/federal-university-of-technology-akure" },
    { name: "Lagos State University", route: "/lagos-state-university" },
    { name: "Kwara State University", route: "/kwara-state-university" },
    { name: "Nigerian Defence Academy", route: "/nigerian-defence-academy" },
    { name: "University of Nigeria Nsukka", route: "/university-of-nigeria-nsukka" }
  ];

  const filterUniversities = (event) => {
    const filter = event.target.value.toLowerCase();
    setSearchTerm(event.target.value);

    if (filter) {
      const filtered = universities.filter((university) =>
        university.name.toLowerCase().includes(filter)
      );
      setFilteredUniversities(filtered);
      setDropdownVisible(true);
    } else {
      setDropdownVisible(false);
    }
  };

  return (
    <div className="search-bar" style={{ position: "relative" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={filterUniversities}
        placeholder="Search by University"
      />
      <div className="search-icon">
        <button>
        <img
          src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000"
          alt="Search Icon"
          style={{ width: "20px", height: "20px" }}
        /></button>
      </div>

      {dropdownVisible && (
        <div className="dropdown">
          {filteredUniversities.map((university) => (
            <Link key={university.name} to={university.route} onClick={() => setDropdownVisible(false)}>
              <div>{university.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
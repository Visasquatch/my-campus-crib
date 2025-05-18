import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { hostels } from "./hostels";
import { useDispatch } from "react-redux";
import { book } from "../store/cart";
import phoneIcon from "../assets/images/phone.png";
import emailIcon from "../assets/images/email.png";
import kitchen from "../assets/images/kitchen.png";
import studying from "../assets/images/studying.png";
import wifi from "../assets/images/wifi.png";
import car from "../assets/images/car.png";
import cctv from "../assets/images/cctv.png";
import gen from "../assets/images/gen.png";
import laundry from "../assets/images/laundry.png";
import rTable from "../assets/images/reading table.png";
import water from "../assets/images/water.png";
import restaurant from "../assets/images/restaurant.png";
import shuttle from "../assets/images/shuttle.png";
import solar from "../assets/images/solar.png";
import buttery from "../assets/images/shop.png";
import heartOutline from "../assets/images/heart outline.png"
import starOutline from "../assets/images/star Outline.png"
import star from "../assets/images/star.png"
import heart from "../assets/images/heart.png"
console.log('Hostels array:', hostels);


const Detail = () => {
    const { slug } = useParams();
    console.log(slug);
    const [detail, setDetail] = useState(null);
    const navigate = useNavigate(); 
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [selectedRoomType, setSelectedRoomType] = useState(null);
    const [savedHostels, setSavedHostels] = useState([]);
    const isSaved = detail ? savedHostels.includes(detail.id) : false;
    const currentIndex = hostels.findIndex(h => h.slug === slug);
 
    const handleNext = () => {
      const nextIndex = (currentIndex + 1) % hostels.length;
      navigate(`/university-of-ilorin/${hostels[nextIndex].slug}`);
    };
    
    const handlePrev = () => {
      const prevIndex = (currentIndex - 1 + hostels.length) % hostels.length;
      navigate(`/university-of-ilorin/${hostels[prevIndex].slug}`);
    };
    

useEffect(() => {
  console.log('Slug param:', slug);
  console.log('Hostels length:', hostels.length);

  if (!hostels || hostels.length === 0) return;

  const findDetail = hostels.find(hostel => hostel.slug === slug);
  if (findDetail) {
    setDetail(findDetail);
    setSelectedRoomType(findDetail.roomTypes?.[0] || null);
  } else {
    window.location.href = '/';
  }
}, [slug, hostels]);

    useEffect(() => {
      const stored = JSON.parse(localStorage.getItem('savedHostels')) || [];
      setSavedHostels(stored);
    }, []);
    
    useEffect(() => {
      localStorage.setItem('savedHostels', JSON.stringify(savedHostels));
    }, [savedHostels]);
    
        const toggleSaveHostel = () => {
          if (savedHostels.includes(detail.id)) {
            setSavedHostels(savedHostels.filter(id => id !== detail.id));
          } else {
            setSavedHostels([...savedHostels, detail.id]);
          }
        };
        
        
        const handleBooking = () => {
          dispatch(book({
            productId: detail.id,
            quantity: quantity,
            roomType: selectedRoomType?.type
          }));          
    };  
    const amenityIcons = {
        wifi: wifi,
        kitchen: kitchen,
        CCTV: cctv,
        'study-room': studying,
         'parking-space': car,
         'backup-generator': gen,
         'laundry-services': laundry,
         'reading-table': rTable,
         'water-supply': water,
         'restaurant': restaurant,
         'shuttle-bus': shuttle,
         'solar-power-support' : solar,
         'tuckshop' : buttery,
      };   
      if (!detail) {
        return <div className="text-center mt-10 text-xl">Loading hostel details...</div>;
      }
      
     const rating = detail.rating || 0;
           
    return(
        <div>
          
            <h2 className="text-3xl text-center mt-6">Hostel Details</h2>
          {/*  <button onClick={() => navigate('/university-of-ilorin')} className="bg-[#FFA500] p-2 rounded-lg ml-5 hover:bg-orange-400">⬅ Back</button> */}
            <div className="flex justify-between items-center mt-4 px-5">
  <button onClick={handlePrev} className="bg-[#FFA500] p-2 rounded-lg hover:bg-orange-400">⬅ Prev </button>
  <button onClick={handleNext} className="bg-[#FFA500] p-2 rounded-lg hover:bg-orange-400"> Next ➡</button>
</div>

            <div className="grid grid-cols-2 gap-5 mt-5 mt-6">
            <div className="ml-5">
                    <Carousel
                     renderThumbs={() =>(
                        detail.images?.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`thumb-${index}`}
                            className="h-20 w-28 object-cover rounded-md"
                          />
                        ))
)}
                    >
                        {detail.images?.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`hostelImage ${index + 1}`} className="w-full h-[500px] object-cover rounded-lg"/>
                            </div>
                        ))}
                    </Carousel>
                    <h1 className="font-bold mb-3 text-2xl">Available:</h1>
                     <div className="flex gap-5 flex-wrap">
  {detail.amenities?.map((amenity, index) => (
    <div key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg shadow">
      <img src={amenityIcons[amenity]} alt={amenity} className="w-6 h-6" />
      <span className="capitalize">{amenity.replace('-', ' ')}</span>
    </div>
  ))}
</div>  

                </div>
            <div className="flex flex-col gap-5  ml-20">
            <div className="flex items-center gap-3">
            {hostels.map((hostel) => (
  <div key={hostel.id}>
  </div>
))}
<div className="absolute flex items-center justify-between py-2 my-6 mb-2">
  {detail && (
    <div className="flex items-center space-x-6 mt-3"> 
      <h1 className="text-4xl uppercase font-bold mb-4">{detail.name}</h1>
  <button className="px-6 py-2"
  onClick={() => {
    toggleSaveHostel();
    const icon = document.getElementById(`heart-icon-${detail.id}`);
    if (icon) {
      icon.classList.add("pop");
      setTimeout(() => {
        icon.classList.remove("pop");
      }, 300);
    }
  }}
>
    <img
      id={`heart-icon-${detail.id}`}
      src={isSaved  ? heart : heartOutline}
      alt="save icon"
      className="w-8 h-8"
    />
  </button>
  </div>
  )}
</div></div>
<p className=" mt-3">{detail.description}</p>

                {detail.roomTypes && (
  <div className="flex items-center gap-5">
    <h2 className="text-xl font-semibold mb-2">Room Options</h2>
    <select
      value={selectedRoomType?.type}
      onChange={(e) => {
        const selected = detail.roomTypes.find(rt => rt.type === e.target.value);
        setSelectedRoomType(selected);
      }}
      className="border p-2 rounded-lg bg-[#FFA500]"
    >
      {detail.roomTypes.map((room, index) => (
        <option key={index} value={room.type}>
          {room.type}
        </option>
      ))}
    </select>
  </div>
)}

<p className="font-bold text-3xl">
  {selectedRoomType && selectedRoomType.price 
    ? `₦${selectedRoomType.price}`
    : 'Select a room type'}
</p>



                <div className="flex gap-5 mb-4">
                    <button className="flex items-center gap-5 bg-orange-400 text-white px-7 py-3 rounded-xl shadow-2xl hover:bg-orange-600 flex gap-4" onClick={handleBooking}>
                        Book</button>
                    </div>
                    <p className=" mt-2">Ratings From Residents</p>
                 <div className="flex items-center">
{Array.from({ length: 10 }, (_, i) => (
  <img
    key={i}
    src={i < rating ? star : starOutline}
    alt="star"
    className="w-5 h-5 mr-1"
  />
))}
<span className="ml-2 text-sm">({rating}/10)</span>
</div>
                     <div className="flex mt-2"><img src={phoneIcon} alt="phoneIcon" className="w-7 mr-2"/> <p className="flex mr-14"> {detail.contact}</p>
                     <img src={emailIcon} alt="emailIcon" className="w-7 mr-4"/> <p className="flex "> {detail.email}</p></div>
<div className="mt-6">
  <h3 className="text-2xl font-bold mb-3">Location</h3>
  {detail.lat && detail.lng && (
  <MapContainer center={[detail.lat, detail.lng]} zoom={16} style={{ height: '300px', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; OpenStreetMap contributors'
    />
    <Marker position={[detail.lat, detail.lng]}>
      <Popup>{detail.name}</Popup>
    </Marker>
  </MapContainer>
)}

</div>

            </div>
            </div>
            </div>
    )
}
export default Detail; 
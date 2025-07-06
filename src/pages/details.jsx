import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { useParams, useNavigate  } from "react-router-dom";
import { hostels as hostelData } from "./hostels";
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
import PaymentForm from "../payment/payment";
import LoginModal from "../components/loginModal";


const Detail = () => {
    const { slug } = useParams();
    console.log(slug); 
    const [detail, setDetail] = useState(null);
    const navigate = useNavigate();
    const [selectedRoomType, setSelectedRoomType] = useState(null);
    const [savedHostels, setSavedHostels] = useState([]);
    const isSaved = detail ? savedHostels.includes(detail.id) : false;
    const [bookedHostels, setBookedHostels] = useState([]);
    const isBooked = detail ? bookedHostels.includes(detail.id) : false;
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const { isLoggedIn } = useAuth(); 
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [hostels, setHostels] = useState([]);

    useEffect(() => {
    setHostels(hostelData);
  }, []);

  const currentIndex = hostels.findIndex(h => h.slug === slug);

    const handleNext = () => {
        if (currentIndex === -1) return;
        const nextIndex = (currentIndex + 1) % hostels.length;
        navigate(`/university-of-ilorin/${hostels[nextIndex].slug}`);
    };

    const handlePrev = () => {
        if (currentIndex === -1) return;
        const prevIndex = (currentIndex - 1 + hostels.length) % hostels.length;
        navigate(`/university-of-ilorin/${hostels[prevIndex].slug}`);
    };
    useEffect(() => {
        if (!hostels || hostels.length === 0) return;
        const findDetail = hostels.find(hostel => hostel.slug === slug);
        if (findDetail) {
            setDetail(findDetail);
            setSelectedRoomType(findDetail.roomTypes?.[0] || null);
        } else {
            navigate('/');
        }
    }, [slug, hostels, navigate]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('savedHostels')) || [];
        setSavedHostels(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem('savedHostels', JSON.stringify(savedHostels));
    }, [savedHostels]);

    const handleBookClick = () => {
        if (!isLoggedIn) {
            setShowLoginModal(true);
            return;
        }
        if (!isBooked) {
            setShowPaymentForm(true);
        }
    };

    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem('bookedHostels')) || [];
        setBookedHostels(storedBookings);
    }, []);

    useEffect(() => {
        localStorage.setItem('bookedHostels', JSON.stringify(bookedHostels));
    }, [bookedHostels]);

    const toggleSaveHostel = () => {
        if (savedHostels.includes(detail.id)) {
            setSavedHostels(savedHostels.filter(id => id !== detail.id));
        } else {
            setSavedHostels([...savedHostels, detail.id]);
        }
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
        'solar-power-support': solar,
        'tuckshop': buttery,
    };

    if (!detail) {
        return <div className="text-center mt-10 text-xl">Loading hostel details...</div>;
    }

    const rating = detail.rating || 0;

    return (
        <div className="p-4 sm:p-6 lg:p-8"> 
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
            {showPaymentForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"> 
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative"> 
                        <PaymentForm
                            hostelId={detail.id}
                            onClose={() => setShowPaymentForm(false)}
                            onSuccess={() => {
                                setBookedHostels(prev => [...prev, detail.id]);
                                setShowPaymentForm(false);
                            }}  
                        />
                    </div>
                </div>
            )}
            <h2 className="text-2xl sm:text-3xl text-center">Hostel Details</h2>
            <button
                onClick={() => navigate('/university-of-ilorin')}
                className="bg-[#FFA500] p-2 rounded-lg ml-2 sm:ml-5 hover:bg-orange-400 mt-4" 
            >
                ⬅ Back
            </button>

            <div className="flex justify-between mt-4 px-2 sm:px-5">
                <button onClick={handlePrev} className="bg-[#FFA500] p-2 rounded-lg hover:bg-orange-400">⬅ Prev </button>
                <button onClick={handleNext} className="bg-[#FFA500] p-2 rounded-lg hover:bg-orange-400"> Next ➡</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 sm:mt-6 md:gap-8 lg:gap-10">
                <div className="mx-2 sm:mx-5 md:mx-0">
                    <Carousel
                        renderThumbs={() => (
                            detail.images?.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`thumb-${index}`}
                                    className="h-16 w-24 sm:h-20 sm:w-28 object-cover rounded-md" 
                                />
                            ))
                        )}
                    >
                        {detail.images?.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`hostelImage ${index + 1}`}
                                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg" 
                                />
                            </div>
                        ))}
                    </Carousel>

          
                </div>
                <div className="flex flex-col gap-4 sm:gap-5 mx-2 sm:mx-5 md:mx-0 pr-0 md:pr-5">
                    <div className="relative flex items-center justify-between">
                        {detail && (
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6"> 
                                <h1 className="text-3xl sm:text-4xl uppercase font-bold">{detail.name}</h1>
                                <button
                                    className="px-4 py-2 sm:px-6 sm:py-2" 
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
                                        src={isSaved ? heart : heartOutline}
                                        alt="save icon"
                                        className="w-7 h-7 sm:w-8 sm:h-8" 
                                    />
                                </button>
                            </div>
                        )}
                    </div>
                    <p className="text-base sm:text-lg leading-relaxed">{detail.description}</p>

                    {detail.roomTypes && (
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
                            <h2 className="text-lg sm:text-xl font-semibold mb-0 sm:mb-2">Room Options</h2>
                            <select
                                value={selectedRoomType?.type || ''} 
                                onChange={(e) => {
                                    const selected = detail.roomTypes.find(rt => rt.type === e.target.value);
                                    setSelectedRoomType(selected);
                                }}
                                className="border p-2 rounded-lg bg-[#FFA500] w-full sm:w-auto"
                            >
                                {detail.roomTypes.map((room, index) => (
                                    <option key={index} value={room.type}>
                                        {room.type}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <p className="font-bold text-2xl sm:text-3xl mt-2">
                        {selectedRoomType && selectedRoomType.price
                            ? `₦${selectedRoomType.price.toLocaleString('en-NG')}` 
                            : 'Select a room type'}
                    </p>

                    <div className="flex gap-4 sm:gap-5 mb-4"> 
                        <button
                            className={`flex items-center gap-2 px-6 py-2 rounded-xl shadow-lg text-white text-base sm:text-lg ${ 
                                isBooked ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-400 hover:bg-orange-600'
                            }`}
                            onClick={handleBookClick}
                            disabled={!isLoggedIn || isBooked}
                        >
                            {isBooked ? 'Booked' : 'Book'}
                        </button>
                    </div>

                    <p className="mt-2 text-sm sm:text-base">Ratings From Residents</p>
                    <div className="flex items-center mt-1">
                        {Array.from({ length: 10 }, (_, i) => (
                            <img
                                key={i}
                                src={i < rating ? star : starOutline}
                                alt="star"
                                className="w-4 h-4 sm:w-5 sm:h-5 mr-0.5 sm:mr-1" 
                            />
                        ))}
                        <span className="ml-2 text-xs sm:text-sm">({rating}/10)</span>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-4 items-start sm:items-center gap-4 sm:gap-8"> 
                        <div className="flex items-center">
                            <img src={phoneIcon} alt="phoneIcon" className="w-6 h-6 mr-2" />
                            <p className="text-sm sm:text-base">{detail.contact}</p>
                        </div>
                        <div className="flex items-center">
                            <img src={emailIcon} alt="emailIcon" className="w-6 h-6 mr-2" />
                            <p className="text-sm sm:text-base">{detail.email}</p>
                        </div>
                    </div>
                    <div className="bg-[#FFA500] bg-opacity-20">
                         <h1 className="font-bold mb-3 text-xl sm:text-2xl mt-4 ml-4">Available:</h1>
                    <div className="flex flex-wrap gap-3 sm:gap-5 ml-4"> 
                        {detail.amenities?.map((amenity, index) => (
                            <div key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg shadow-sm text-sm"> 
                                <img src={amenityIcons[amenity]} alt={amenity} className="w-5 h-5 sm:w-6 sm:h-6" /> 
                                <span className="capitalize">{amenity.replace('-', ' ')}</span>
                            </div>
                        ))}
                    </div><br/></div>
                    <div className="mt-6">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3">Location</h3>
                        {detail.lat && detail.lng && (
                            <MapContainer center={[detail.lat, detail.lng]} zoom={16} style={{ height: '250px', width: '100%' }} className="rounded-lg shadow-md"> 
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
    );
}

export default Detail;
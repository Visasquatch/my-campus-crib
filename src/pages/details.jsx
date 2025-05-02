import "react-responsive-carousel/lib/styles/carousel.min.css";
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

const Detail = () => {
    const { slug } = useParams();
    const [detail, setDetail]= useState([]);
    const navigate = useNavigate(); 
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = hostels.filter(hostel => hostel.slug ===  slug);
        if(findDetail.length > 0){
            setDetail(findDetail[0]);
        }else{
            window.location.href = '/';
        }
    }, [slug])
 /*   const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    } */
    const handleBooking = () => {
        dispatch(book({
            productId: detail.id,
            quantity: quantity
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
      };      
    return(
        <div>
            <h2 className="text-3xl text-center mt-6">Hostel Details</h2>
            <button onClick={() => navigate('/university-of-ilorin')} className="bg-orange-200 p-2 rounded-lg ml-5 hover:bg-orange-400">⬅</button>
            <div className="grid grid-cols-2 gap-5 mt-5 mt-6">
            <div className="ml-5">
                    <Carousel>
                        {detail.images?.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`hostelImage ${index + 1}`} className="w-full"/>
                            </div>
                        ))}
                    </Carousel>

                </div>
            <div className="flex flex-col gap-5  ml-20">
                <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
                <p className="font-bold text-3xl">
                     ₦{detail.price}
                </p>
                <div className="flex gap-5">
                   {/*    <div className="flex gap-2 justify-center items-center">
                     <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handleMinusQuantity}>-</button>
                        <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">{quantity}</span>
                        <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handlePlusQuantity}>+</button>
                   </div>*/} 
                    <button className="flex gap-5 bg-orange-400 text-white px-7 py-3 rounded-xl shadow-2xl hover:bg-orange-600 flex gap-4" onClick={handleBooking}>
                        Book</button>
                    </div>
                    <p>
                        {detail.description}
                     </p>
                     <p className="flex"><img src={phoneIcon} alt="phoneIcon" className="w-7 mx-5"/>  {detail.contact}
                    <img src={emailIcon} alt="emailIcon" className="w-7 mx-3 "/>  {detail.email}</p>
                     <h1 className="text-bold">Available:</h1>
                     <div className="flex gap-5 flex-wrap">
  {detail.amenities?.map((amenity, index) => (
    <div key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg shadow">
      <img src={amenityIcons[amenity]} alt={amenity} className="w-6 h-6" />
      <span className="capitalize">{amenity.replace('-', ' ')}</span>
    </div>
  ))}
</div>         
            </div>
            </div>
            </div>
    )
}
export default Detail; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { hostels } from "./hostels";
import { useDispatch } from "react-redux";
import { book } from "../store/cart";
import phoneIcon from "../assets/images/phone.png";
import emailIcon from "../assets/images/email.png";

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
    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }
    const handleBooking = () => {
        dispatch(book({
            productId: detail.id,
            quantity: quantity
        }));
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
                    <div className="flex gap-2 justify-center items-center">
                        <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handleMinusQuantity}>-</button>
                        <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">{quantity}</span>
                        <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={handlePlusQuantity}>+</button>
                    </div>
                    <button className="bg-orange-400 text-white px-7 py-3 rounded-xl shadow-2xl hover:bg-orange-600 flex gap-4" onClick={handleBooking}>
                        Book</button>
                    </div>
                    <p>
                        {detail.description}
                     </p>
                     <p className="flex"><img src={phoneIcon} alt="phoneIcon" className="w-7"/>  {detail.contact}<br />
                     </p><p className="flex"><img src={emailIcon} alt="emailIcon" className="w-7 "/>  {detail.email}</p>
                
                    
            </div>
            </div>
            </div>
    )
}
export default Detail; 
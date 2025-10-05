import React from "react";
import { HotelCard } from "./hotelcard";
import { roomsDummyData } from "../assets/assets";

const FeaturedDestination=()=>{
    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                    Featured Hotels
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover our handpicked selection of exceptional properties around the world, 
                    offering unparalleled luxury and unforgettable experiences.
                </p>
            </div>

            {/* Hotel Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {roomsDummyData.slice(0,4).map((room,index)=>(
                    <HotelCard key={room._id} room={room} index={index}/>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
                <button className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200">
                    View All Hotels
                </button>
            </div>
        </div>
    )
}
export  default FeaturedDestination 

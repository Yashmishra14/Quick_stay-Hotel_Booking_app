import React from "react";
import { Link } from "react-router-dom";
import {assets} from '../assets/assets.js';


export const HotelCard = ({room,index}) => {
  // Determine tag based on index
  const getTag = () => {
    if (index === 0 || index === 2) return "Best Seller";
    if (index === 3) return "New";
    return null;
  };

  const tag = getTag();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <Link to={'/rooms/'+room._id} onClick={()=>{
        scrollTo(0,0);
      }}>
        <div className="relative">
          <img 
            src={room.images[0]} 
            alt={room.hotel.name} 
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {tag && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full shadow-sm">
                {tag}
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          {/* Hotel Name and Rating */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-serif font-semibold text-gray-900 truncate">
              {room.hotel.name}
            </h3>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
              <span>4.9</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <img src={assets.locationIcon} alt="location" className="w-4 h-4 text-gray-400" />
            <span className="truncate">{room.hotel.city}</span>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              ₹{room.pricePerNight.toLocaleString('en-IN')}
              <span className="text-sm font-normal text-gray-600">/night</span>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

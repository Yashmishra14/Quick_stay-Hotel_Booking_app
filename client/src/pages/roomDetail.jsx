import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { roomsDummyData, assets } from '../assets/assets';

const RoomDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);

    // Find the room by ID
    const room = roomsDummyData.find(r => r._id === id);

    if (!room) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Room Not Found</h1>
                    <button 
                        onClick={() => navigate('/hotels')}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Hotels
                    </button>
                </div>
            </div>
        );
    }

    const handleBooking = () => {
        if (!checkIn || !checkOut) {
            alert('Please select check-in and check-out dates');
            return;
        }
        navigate(`/booking/${room._id}`, {
            state: {
                room,
                checkIn,
                checkOut,
                guests
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <button onClick={() => navigate('/hotels')} className="hover:text-blue-600">
                            Hotels
                        </button>
                        <span>/</span>
                        <span>{room.hotel.city}</span>
                        <span>/</span>
                        <span className="text-gray-900">{room.hotel.name}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">
                        {room.hotel.name}
                    </h1>
                    <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                            <img src={assets.starIconFilled} alt="star" className="w-5 h-5" />
                            <span className="text-lg font-semibold">4.9</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                            <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
                            <span>{room.hotel.city}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Image Gallery */}
                        <div className="mb-8">
                            <div className="relative">
                                <img 
                                    src={room.images[selectedImage]} 
                                    alt={room.hotel.name}
                                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                                    <span className="text-sm font-medium">Photo {selectedImage + 1} of {room.images.length}</span>
                                </div>
                            </div>
                            
                            {/* Thumbnail Images */}
                            <div className="flex gap-2 mt-4 overflow-x-auto">
                                {room.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                                            selectedImage === index ? 'ring-2 ring-blue-500' : ''
                                        }`}
                                    >
                                        <img 
                                            src={image} 
                                            alt={`${room.hotel.name} ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Room Details */}
                        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Room Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Room Type</h3>
                                    <p className="text-gray-600">{room.roomType}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Availability</h3>
                                    <p className="text-green-600 font-medium">
                                        {room.isAvailable ? 'Available' : 'Not Available'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {room.amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                            <img src={assets.starIconFilled} alt="amenity" className="w-3 h-3" />
                                        </div>
                                        <span className="text-gray-700">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hotel Information */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hotel Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                                    <p className="text-gray-600">{room.hotel.address}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Contact</h3>
                                    <p className="text-gray-600">{room.hotel.contact}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <div className="text-center mb-6">
                                <div className="text-3xl font-bold text-gray-900 mb-2">
                                    ₹{room.pricePerNight.toLocaleString('en-IN')}
                                    <span className="text-lg font-normal text-gray-600">/night</span>
                                </div>
                                <p className="text-gray-600">Excluding taxes and fees</p>
                            </div>

                            {/* Booking Form */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Check-in Date
                                    </label>
                                    <input
                                        type="date"
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Check-out Date
                                    </label>
                                    <input
                                        type="date"
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Guests
                                    </label>
                                    <select
                                        value={guests}
                                        onChange={(e) => setGuests(parseInt(e.target.value))}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {[1, 2, 3, 4].map(num => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    onClick={handleBooking}
                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Book Now
                                </button>
                            </div>

                            {/* Price Breakdown */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Room price (1 night)</span>
                                        <span>₹{room.pricePerNight.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Taxes & fees</span>
                                        <span>₹{(room.pricePerNight * 0.18).toFixed(0)}</span>
                                    </div>
                                    <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200">
                                        <span>Total</span>
                                        <span>₹{(room.pricePerNight * 1.18).toFixed(0)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;

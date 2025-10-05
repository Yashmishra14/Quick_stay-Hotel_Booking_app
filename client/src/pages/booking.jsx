import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Booking = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const { room, checkIn, checkOut, guests } = location.state || {};

    useEffect(() => {
        if (!room || !checkIn || !checkOut) {
            navigate('/hotels');
        }
    }, [room, checkIn, checkOut, navigate]);

    if (!room) {
        return null;
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const calculateTotal = () => {
        const basePrice = room.pricePerNight;
        const taxes = basePrice * 0.18; // 18% GST
        return basePrice + taxes;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            navigate('/bookings', {
                state: {
                    booking: {
                        id: Date.now().toString(),
                        room,
                        checkIn,
                        checkOut,
                        guests,
                        guestInfo: formData,
                        total: calculateTotal(),
                        status: 'confirmed',
                        bookingDate: new Date().toISOString()
                    }
                }
            });
        }, 2000);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const calculateNights = () => {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const diffTime = Math.abs(checkOutDate - checkInDate);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">
                        Complete Your Booking
                    </h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Just a few more details to confirm your reservation
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Booking Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Guest Information */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Special Requests */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Requests</h2>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Any special requests or preferences?
                                    </label>
                                    <textarea
                                        name="specialRequests"
                                        value={formData.specialRequests}
                                        onChange={handleInputChange}
                                        rows={4}
                                        placeholder="Please let us know if you have any special requirements..."
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Card Number
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="1234 5678 9012 3456"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Expiry Date
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                CVV
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="123"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Processing...' : 'Confirm Booking'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Booking Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h2>
                            
                            {/* Hotel Info */}
                            <div className="mb-6">
                                <img 
                                    src={room.images[0]} 
                                    alt={room.hotel.name}
                                    className="w-full h-32 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-900">{room.hotel.name}</h3>
                                <p className="text-gray-600">{room.roomType}</p>
                                <p className="text-gray-600">{room.hotel.city}</p>
                            </div>

                            {/* Dates */}
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Check-in</span>
                                    <span className="font-medium">{formatDate(checkIn)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Check-out</span>
                                    <span className="font-medium">{formatDate(checkOut)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Guests</span>
                                    <span className="font-medium">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Nights</span>
                                    <span className="font-medium">{calculateNights()} {calculateNights() === 1 ? 'Night' : 'Nights'}</span>
                                </div>
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-2 pt-4 border-t border-gray-200">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Room price ({calculateNights()} nights)</span>
                                    <span>₹{(room.pricePerNight * calculateNights()).toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Taxes & fees (18%)</span>
                                    <span>₹{((room.pricePerNight * calculateNights()) * 0.18).toFixed(0)}</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                                    <span>Total</span>
                                    <span>₹{((room.pricePerNight * calculateNights()) * 1.18).toFixed(0)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;

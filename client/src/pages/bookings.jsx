import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Bookings = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [filterStatus, setFilterStatus] = useState('all');

    useEffect(() => {
        // Get bookings from localStorage or state
        const savedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const newBooking = location.state?.booking;
        
        if (newBooking) {
            const updatedBookings = [...savedBookings, newBooking];
            setBookings(updatedBookings);
            localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        } else {
            setBookings(savedBookings);
        }
    }, [location.state]);

    const filteredBookings = bookings.filter(booking => 
        filterStatus === 'all' || booking.status === filterStatus
    );

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed':
                return 'bg-green-100 text-green-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleCancelBooking = (bookingId) => {
        if (window.confirm('Are you sure you want to cancel this booking?')) {
            const updatedBookings = bookings.map(booking => 
                booking.id === bookingId 
                    ? { ...booking, status: 'cancelled' }
                    : booking
            );
            setBookings(updatedBookings);
            localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        }
    };

    const calculateNights = (checkIn, checkOut) => {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const diffTime = Math.abs(checkOutDate - checkInDate);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair">
                        My Bookings
                    </h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Manage your hotel reservations and view booking history
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Filter Tabs */}
                <div className="mb-8">
                    <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
                        {[
                            { key: 'all', label: 'All Bookings' },
                            { key: 'confirmed', label: 'Confirmed' },
                            { key: 'pending', label: 'Pending' },
                            { key: 'cancelled', label: 'Cancelled' }
                        ].map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setFilterStatus(tab.key)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    filterStatus === tab.key
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bookings List */}
                {filteredBookings.length > 0 ? (
                    <div className="space-y-6">
                        {filteredBookings.map((booking) => (
                            <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6">
                                    <div className="flex flex-col lg:flex-row gap-6">
                                        {/* Hotel Image */}
                                        <div className="lg:w-64">
                                            <img 
                                                src={booking.room.images[0]} 
                                                alt={booking.room.hotel.name}
                                                className="w-full h-48 lg:h-32 object-cover rounded-lg"
                                            />
                                        </div>

                                        {/* Booking Details */}
                                        <div className="flex-1">
                                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                        {booking.room.hotel.name}
                                                    </h3>
                                                    <p className="text-gray-600 mb-2">{booking.room.roomType}</p>
                                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                                        <div className="flex items-center gap-1">
                                                            <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
                                                            <span>{booking.room.hotel.city}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
                                                            <span>4.9</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 lg:mt-0">
                                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                                                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Booking Info */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                                <div>
                                                    <p className="text-sm text-gray-600">Check-in</p>
                                                    <p className="font-medium">{formatDate(booking.checkIn)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Check-out</p>
                                                    <p className="font-medium">{formatDate(booking.checkOut)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Guests</p>
                                                    <p className="font-medium">{booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Nights</p>
                                                    <p className="font-medium">{calculateNights(booking.checkIn, booking.checkOut)} {calculateNights(booking.checkIn, booking.checkOut) === 1 ? 'Night' : 'Nights'}</p>
                                                </div>
                                            </div>

                                            {/* Guest Information */}
                                            <div className="mb-4">
                                                <p className="text-sm text-gray-600 mb-1">Guest</p>
                                                <p className="font-medium">
                                                    {booking.guestInfo.firstName} {booking.guestInfo.lastName}
                                                </p>
                                                <p className="text-sm text-gray-600">{booking.guestInfo.email}</p>
                                            </div>

                                            {/* Price and Actions */}
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                                <div className="mb-4 lg:mb-0">
                                                    <p className="text-2xl font-bold text-gray-900">
                                                        ₹{booking.total.toLocaleString('en-IN')}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        Booking ID: {booking.id}
                                                    </p>
                                                </div>
                                                <div className="flex gap-3">
                                                    {booking.status === 'confirmed' && (
                                                        <button
                                                            onClick={() => handleCancelBooking(booking.id)}
                                                            className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                                                        >
                                                            Cancel Booking
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => navigate(`/rooms/${booking.room._id}`)}
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                                    >
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <img src={assets.searchIcon} alt="No bookings" className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings found</h3>
                        <p className="text-gray-600 mb-6">
                            {filterStatus === 'all' 
                                ? "You haven't made any bookings yet. Start exploring our amazing hotels!"
                                : `No ${filterStatus} bookings found.`
                            }
                        </p>
                        <button
                            onClick={() => navigate('/hotels')}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Explore Hotels
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Bookings;

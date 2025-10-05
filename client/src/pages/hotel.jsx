import React, { useState, useEffect } from 'react';
import { HotelCard } from '../component/Hotelcard';
import { roomsDummyData, cities, assets } from '../assets/assets';

const Hotel = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [priceRange, setPriceRange] = useState([0, 50000]);
    const [sortBy, setSortBy] = useState('price-low');
    const [filteredHotels, setFilteredHotels] = useState(roomsDummyData);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        let filtered = roomsDummyData;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(room => 
                room.hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                room.hotel.city.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by city
        if (selectedCity) {
            filtered = filtered.filter(room => 
                room.hotel.city.toLowerCase() === selectedCity.toLowerCase()
            );
        }

        // Filter by price range
        filtered = filtered.filter(room => 
            room.pricePerNight >= priceRange[0] && room.pricePerNight <= priceRange[1]
        );

        // Sort results
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.pricePerNight - b.pricePerNight;
                case 'price-high':
                    return b.pricePerNight - a.pricePerNight;
                case 'rating':
                    return 4.9 - 4.9; // All have same rating for now
                case 'name':
                    return a.hotel.name.localeCompare(b.hotel.name);
                default:
                    return 0;
            }
        });

        setFilteredHotels(filtered);
    }, [searchTerm, selectedCity, priceRange, sortBy]);

    const handlePriceChange = (index, value) => {
        const newRange = [...priceRange];
        newRange[index] = parseInt(value);
        setPriceRange(newRange);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-playfair">
                        Discover Amazing Hotels
                    </h1>
                    <p className="text-lg text-gray-600">
                        Find your perfect stay from our curated collection of luxury hotels
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:w-80">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
                                <button 
                                    className="lg:hidden"
                                    onClick={() => setShowFilters(!showFilters)}
                                >
                                    <img src={assets.menuIcon} alt="Filter" className="w-6 h-6" />
                                </button>
                            </div>

                            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                                {/* Search */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Search Hotels
                                    </label>
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Hotel name or city..."
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                {/* City Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        City
                                    </label>
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">All Cities</option>
                                        {cities.map((city, index) => (
                                            <option key={index} value={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Price Range */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Price Range (₹)
                                    </label>
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            <input
                                                type="number"
                                                value={priceRange[0]}
                                                onChange={(e) => handlePriceChange(0, e.target.value)}
                                                placeholder="Min"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                            <input
                                                type="number"
                                                value={priceRange[1]}
                                                onChange={(e) => handlePriceChange(1, e.target.value)}
                                                placeholder="Max"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Range: ₹{priceRange[0].toLocaleString('en-IN')} - ₹{priceRange[1].toLocaleString('en-IN')}
                                        </div>
                                    </div>
                                </div>

                                {/* Sort By */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Sort By
                                    </label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="rating">Rating</option>
                                        <option value="name">Name</option>
                                    </select>
                                </div>

                                {/* Clear Filters */}
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCity('');
                                        setPriceRange([0, 50000]);
                                        setSortBy('price-low');
                                    }}
                                    className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="flex-1">
                        {/* Results Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {filteredHotels.length} hotels found
                                </h3>
                                <p className="text-gray-600">
                                    {searchTerm && `Search results for "${searchTerm}"`}
                                    {selectedCity && ` in ${selectedCity}`}
                                </p>
                            </div>
                        </div>

                        {/* Hotel Grid */}
                        {filteredHotels.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredHotels.map((room, index) => (
                                    <HotelCard key={room._id} room={room} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <img src={assets.searchIcon} alt="No results" className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No hotels found</h3>
                                <p className="text-gray-600 mb-6">
                                    Try adjusting your search criteria or filters
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCity('');
                                        setPriceRange([0, 50000]);
                                        setSortBy('price-low');
                                    }}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}

                        {/* Load More Button */}
                        {filteredHotels.length > 0 && (
                            <div className="text-center mt-12">
                                <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                                    Load More Hotels
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;

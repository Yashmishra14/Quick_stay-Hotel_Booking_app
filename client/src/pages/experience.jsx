import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Experience = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const experiences = [
        {
            id: 1,
            title: "Luxury Spa Retreat",
            category: "wellness",
            location: "Taj Palace Hotel, New Delhi",
            price: 5000,
            duration: "3 hours",
            rating: 4.9,
            image: assets.roomImg1,
            description: "Indulge in a rejuvenating spa experience with traditional Indian treatments and modern wellness techniques.",
            features: ["Traditional Ayurvedic Massage", "Aromatherapy", "Steam Room", "Relaxation Lounge"]
        },
        {
            id: 2,
            title: "Culinary Masterclass",
            category: "dining",
            location: "Oberoi Mumbai, Mumbai",
            price: 3500,
            duration: "2 hours",
            rating: 4.8,
            image: assets.roomImg2,
            description: "Learn to cook authentic Indian cuisine with our master chefs in an interactive cooking session.",
            features: ["Hands-on Cooking", "Recipe Book", "Wine Pairing", "Take-home Spices"]
        },
        {
            id: 3,
            title: "City Heritage Walk",
            category: "culture",
            location: "ITC Gardenia, Bangalore",
            price: 2000,
            duration: "4 hours",
            rating: 4.7,
            image: assets.roomImg3,
            description: "Explore the rich cultural heritage of Bangalore with a guided walking tour of historic landmarks.",
            features: ["Expert Guide", "Historical Sites", "Local Stories", "Refreshments"]
        },
        {
            id: 4,
            title: "Sunset Yoga Session",
            category: "wellness",
            location: "Leela Palace Chennai, Chennai",
            price: 1500,
            duration: "1.5 hours",
            rating: 4.9,
            image: assets.roomImg4,
            description: "Practice yoga with a breathtaking sunset view over the Bay of Bengal with certified instructors.",
            features: ["Certified Instructor", "Yoga Mat Provided", "Sunset Views", "Meditation"]
        },
        {
            id: 5,
            title: "Wine Tasting Experience",
            category: "dining",
            location: "Taj Palace Hotel, New Delhi",
            price: 4000,
            duration: "2.5 hours",
            rating: 4.8,
            image: assets.roomImg1,
            description: "Discover the finest Indian and international wines with expert sommeliers in an elegant setting.",
            features: ["Expert Sommelier", "Wine Selection", "Cheese Pairing", "Tasting Notes"]
        },
        {
            id: 6,
            title: "Art Gallery Tour",
            category: "culture",
            location: "Oberoi Mumbai, Mumbai",
            price: 1800,
            duration: "3 hours",
            rating: 4.6,
            image: assets.roomImg2,
            description: "Explore contemporary Indian art with a private tour of our curated gallery collection.",
            features: ["Private Guide", "Contemporary Art", "Artist Meet", "Art Catalog"]
        }
    ];

    const categories = [
        { key: 'all', label: 'All Experiences' },
        { key: 'wellness', label: 'Wellness & Spa' },
        { key: 'dining', label: 'Culinary' },
        { key: 'culture', label: 'Culture & Heritage' }
    ];

    const filteredExperiences = experiences.filter(experience => 
        selectedCategory === 'all' || experience.category === selectedCategory
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-purple-900 to-blue-700 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">Experiences</h1>
                    <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                        Discover unique experiences and activities at our partner hotels
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Category Filter */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map(category => (
                            <button
                                key={category.key}
                                onClick={() => setSelectedCategory(category.key)}
                                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                                    selectedCategory === category.key
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Experiences Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredExperiences.map(experience => (
                        <div key={experience.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <img 
                                    src={experience.image} 
                                    alt={experience.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                                    <div className="flex items-center gap-1">
                                        <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
                                        <span className="text-sm font-medium">{experience.rating}</span>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {experience.category.charAt(0).toUpperCase() + experience.category.slice(1)}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {experience.title}
                                </h3>
                                
                                <div className="flex items-center gap-2 text-gray-600 mb-3">
                                    <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
                                    <span className="text-sm">{experience.location}</span>
                                </div>

                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {experience.description}
                                </p>

                                <div className="space-y-2 mb-4">
                                    {experience.features.slice(0, 2).map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                    {experience.features.length > 2 && (
                                        <div className="text-sm text-gray-500">
                                            +{experience.features.length - 2} more features
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-2xl font-bold text-gray-900">
                                        ₹{experience.price.toLocaleString('en-IN')}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {experience.duration}
                                    </div>
                                </div>

                                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                    Book Experience
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Our concierge team can create custom experiences tailored to your interests and preferences.
                    </p>
                    <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                        Contact Concierge
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Experience;

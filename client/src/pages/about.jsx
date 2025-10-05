import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">About Us</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Your trusted partner in luxury hospitality and unforgettable travel experiences
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Our Story */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Founded in 2020, our hotel booking platform has revolutionized the way travelers 
                                discover and book luxury accommodations across India. We believe that every journey 
                                should be extraordinary, and every stay should be memorable.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                With partnerships spanning over 500+ premium hotels across major Indian cities, 
                                we've helped thousands of travelers find their perfect getaway, from business 
                                trips to family vacations and romantic escapes.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                                    <div className="text-gray-600">Partner Hotels</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                                    <div className="text-gray-600">Happy Guests</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src={assets.roomImg1} 
                                alt="Luxury Hotel" 
                                className="rounded-lg shadow-xl w-full h-80 object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                                <div className="text-gray-600">Guest Rating</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Mission */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
                            Our Mission
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            To make luxury hospitality accessible while maintaining the highest standards 
                            of service and guest satisfaction.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src={assets.heartIcon} alt="Quality" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
                            <p className="text-gray-600">
                                We carefully curate our hotel partners to ensure only the finest 
                                accommodations make it to our platform.
                            </p>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src={assets.searchIcon} alt="Convenience" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Booking</h3>
                            <p className="text-gray-600">
                                Our intuitive platform makes finding and booking your perfect 
                                stay effortless and stress-free.
                            </p>
                        </div>
                        
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src={assets.userIcon} alt="Support" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                            <p className="text-gray-600">
                                Our dedicated support team is always ready to assist you 
                                throughout your journey.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-playfair">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The passionate individuals behind our success
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <img src={assets.userIcon} alt="Team Member" className="w-16 h-16" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Rajesh Kumar</h3>
                            <p className="text-blue-600 mb-2">Founder & CEO</p>
                            <p className="text-gray-600 text-sm">
                                Hospitality industry veteran with 15+ years of experience
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <img src={assets.userIcon} alt="Team Member" className="w-16 h-16" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya Sharma</h3>
                            <p className="text-blue-600 mb-2">Head of Operations</p>
                            <p className="text-gray-600 text-sm">
                                Expert in customer experience and hotel partnerships
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <img src={assets.userIcon} alt="Team Member" className="w-16 h-16" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Amit Patel</h3>
                            <p className="text-blue-600 mb-2">Technology Director</p>
                            <p className="text-gray-600 text-sm">
                                Leading our digital transformation and platform innovation
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied guests who have discovered their perfect stay with us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Explore Hotels
                        </button>
                        <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

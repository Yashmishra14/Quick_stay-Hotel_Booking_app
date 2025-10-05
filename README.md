# Quick_stay-Hotel_Booking_app

# 🏨 Hotel Booking App

A modern, responsive hotel booking application built with React and Vite, featuring luxury Indian hotels with seamless booking experience.

## 📸 Screenshots

### 🏠 Homepage
![Homepage](https://via.placeholder.com/800x400/2563eb/ffffff?text=Homepage+with+Hero+Section+and+Search+Form)

<img width="1899" height="928" alt="image" src="https://github.com/user-attachments/assets/d487bd62-0add-4c70-8def-e1a031715d66" />



**Features shown:**
- Stunning hero section with luxury hotel background
- QuickStay branding and navigation
- Search form with destination, check-in/out dates, and guests
- "The ultimate hotel experience awaits you" tagline

### 🏨 Featured Hotels
![Featured Hotels](https://via.placeholder.com/800x400/1f2937/ffffff?text=Featured+Hotels+Section+with+Indian+Hotels)

![
   
](image.png)
<img width="1836" height="757" alt="image" src="https://github.com/user-attachments/assets/4b317949-b3d6-4a07-a6b2-40442bc8746c" />


**Features shown:**
- Four luxury Indian hotel cards: Taj Palace Hotel, Oberoi Mumbai, ITC Gardenia, Leela Palace Chennai
- Pricing in Indian Rupees (₹12,000 - ₹25,000/night)
- Star ratings and location information
- "Best Seller" and "New" badges
- "View All Hotels" call-to-action

### 🔍 Hotel Search & Filtering
![Hotel Search](https://via.placeholder.com/800x400/374151/ffffff?text=Advanced+Hotel+Search+with+Filters)
<img width="1521" height="793" alt="image" src="https://github.com/user-attachments/assets/772205b9-61a5-4ee5-bc0d-21b34decd7df" />


**Features shown:**
- Advanced filtering sidebar with search, city, and price range filters
- Sort by options (Price: Low to High)
- Real-time search results showing "4 hotels found"
- Responsive grid layout for hotel cards
- Clear filters functionality

### 🎯 Experiences
![Experiences](https://via.placeholder.com/800x400/7c3aed/ffffff?text=Hotel+Experiences+and+Activities)
<img width="1856" height="929" alt="image" src="https://github.com/user-attachments/assets/680caaf1-d008-4944-966e-a3875c3d40fa" />


**Features shown:**
- Category filters: All Experiences, Wellness & Spa, Culinary, Culture & Heritage
- Experience cards with ratings and pricing
- Luxury Spa Retreat, Culinary Masterclass, City Heritage Walk
- Hotel partnerships and location details
- Professional card design with category tags

### ℹ️ About Us
![About Us](https://via.placeholder.com/800x400/1e40af/ffffff?text=About+Us+Page+with+Company+Story)
<img width="1707" height="919" alt="image" src="https://github.com/user-attachments/assets/2a16594d-fc34-4362-9389-eab4b6631319" />


**Features shown:**
- Professional hero section with company branding
- "Our Story" section with company statistics (500+ Partner Hotels, 50K+ Happy Guests)
- Mission statement and company values
- Hotel room showcase with guest rating overlay
- Clean, modern design with blue color scheme

## ✨ Features

### 🏠 **Core Functionality**
- **Hotel Search & Discovery** - Browse through curated collection of luxury Indian hotels
- **Advanced Filtering** - Filter by price range, city, amenities, and more
- **Room Details** - Comprehensive room information with image galleries
- **Booking System** - Complete booking workflow with guest information and payment
- **User Management** - Authentication and booking history management
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### 🎯 **Key Pages**
- **Home** - Hero section with search functionality and featured hotels
- **Hotels** - Advanced hotel listing with filters and search
- **Room Detail** - Detailed room information and booking form
- **Booking** - Complete booking process with payment integration
- **My Bookings** - User booking history and management
- **About** - Company information and team details
- **Contact** - Contact form and support information
- **Experience** - Hotel experiences and activities

### 🇮🇳 **Indian Market Focus**
- **Indian Hotel Names** - Taj Palace, Oberoi, ITC Gardenia, Leela Palace
- **Rupee Pricing** - All prices displayed in Indian Rupees (₹)
- **Indian Cities** - Major Indian cities in search options
- **Local Contact** - Indian phone numbers and addresses

## 🚀 Tech Stack

- **Frontend Framework** - React 19
- **Build Tool** - Vite
- **Styling** - Tailwind CSS 4
- **Routing** - React Router DOM
- **Authentication** - Clerk
- **Icons** - Custom SVG icons
- **State Management** - React Hooks

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Hotel_Booking_app/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the client directory:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
client/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── *.svg (Icons)
│   │   ├── *.png (Images)
│   │   └── assets.js (Asset management)
│   ├── component/
│   │   ├── Navbar.jsx (Navigation component)
│   │   ├── Hero.jsx (Hero section)
│   │   ├── Hotelcard.jsx (Hotel card component)
│   │   └── featuredDestination.jsx (Featured hotels)
│   ├── pages/
│   │   ├── Home.jsx (Landing page)
│   │   ├── about.jsx (About page)
│   │   ├── hotel.jsx (Hotels listing)
│   │   ├── roomDetail.jsx (Room details)
│   │   ├── booking.jsx (Booking form)
│   │   ├── bookings.jsx (Booking history)
│   │   ├── contact.jsx (Contact page)
│   │   └── experience.jsx (Experiences)
│   ├── App.jsx (Main app component)
│   ├── main.jsx (App entry point)
│   └── index.css (Global styles)
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Features

### **Modern UI/UX**
- Clean, professional design
- Smooth animations and transitions
- Consistent color scheme
- Mobile-first responsive design

### **User Experience**
- Intuitive navigation
- Fast search and filtering
- Clear booking process
- Comprehensive error handling

### **Accessibility**
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🏨 Featured Hotels

### **Luxury Indian Hotels**
1. **Taj Palace Hotel** - New Delhi (₹25,000/night)
2. **Oberoi Mumbai** - Mumbai (₹18,000/night)
3. **ITC Gardenia** - Bangalore (₹15,000/night)
4. **Leela Palace Chennai** - Chennai (₹12,000/night)

### **Room Types**
- Deluxe Suite
- Executive Room
- Premium Room
- Standard Room

## 🔐 Authentication

The app uses Clerk for authentication with features:
- User registration and login
- Profile management
- Booking history access
- Secure session management

## 💳 Booking Process

1. **Search** - Find hotels by location and dates
2. **Filter** - Refine results by price, amenities, etc.
3. **Select** - Choose your preferred room
4. **Book** - Fill guest information and payment details
5. **Confirm** - Receive booking confirmation

## 🎯 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time availability checking
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Hotel owner dashboard
- [ ] Review and rating system
- [ ] Multi-language support
- [ ] Advanced analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Development** - React & Vite
- **UI/UX Design** - Tailwind CSS
- **Authentication** - Clerk
- **Asset Management** - Custom SVG icons

## 📞 Support

For support, email support@hotelbooking.com or join our Slack channel.

---

**Built with ❤️ for the Indian hospitality market**



import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    roomImg1,
    roomImg2,
    roomImg3,
    roomImg4,
    exclusiveOfferCardImg1,
    exclusiveOfferCardImg2,
    exclusiveOfferCardImg3,
}

//cities for menu
 export const cities = [
    "New Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Jaipur",
    "Goa",
    "Kochi",
];

// User Dummy Data
export const userDummyData = {
    "_id": "67f76393197ac559e4089b71",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "hotel_owner",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Taj Palace Hotel",
    "address": "Sardar Patel Marg, Akbar Road, New Delhi",
    "contact": "+91-11-23026162",
    "owner": userDummyData,
    "city": "New Delhi",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Room Images are already imported at the top of the file

export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": {
            "_id": "67f76393197ac559e4089b72",
            "name": "Taj Palace Hotel",
            "address": "Sardar Patel Marg, Akbar Road, New Delhi",
            "contact": "+91-11-23026162",
            "owner": userDummyData,
            "city": "New Delhi",
            "createdAt": "2025-04-10T06:22:11.663Z",
            "updatedAt": "2025-04-10T06:22:11.663Z",
            "__v": 0
        },
        "roomType": "Deluxe Suite",
        "pricePerNight": 25000,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": {
            "_id": "67f76393197ac559e4089b73",
            "name": "Oberoi Mumbai",
            "address": "Nariman Point, Mumbai, Maharashtra",
            "contact": "+91-22-66324000",
            "owner": userDummyData,
            "city": "Mumbai",
            "createdAt": "2025-04-10T06:22:11.663Z",
            "updatedAt": "2025-04-10T06:22:11.663Z",
            "__v": 0
        },
        "roomType": "Executive Room",
        "pricePerNight": 18000,
        "amenities": ["Room Service", "Sea View", "Pool Access"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": {
            "_id": "67f76393197ac559e4089b74",
            "name": "ITC Gardenia",
            "address": "Residency Road, Bangalore, Karnataka",
            "contact": "+91-80-22112200",
            "owner": userDummyData,
            "city": "Bangalore",
            "createdAt": "2025-04-10T06:22:11.663Z",
            "updatedAt": "2025-04-10T06:22:11.663Z",
            "__v": 0
        },
        "roomType": "Premium Room",
        "pricePerNight": 15000,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "hotel": {
            "_id": "67f76393197ac559e4089b75",
            "name": "Leela Palace Chennai",
            "address": "Adyar Sea Face, Chennai, Tamil Nadu",
            "contact": "+91-44-33660000",
            "owner": userDummyData,
            "city": "Chennai",
            "createdAt": "2025-04-10T06:22:11.663Z",
            "updatedAt": "2025-04-10T06:22:11.663Z",
            "__v": 0
        },
        "roomType": "Standard Room",
        "pricePerNight": 12000,
        "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
]

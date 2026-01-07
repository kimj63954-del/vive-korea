
import React from 'react';
import { Category, GuideSection } from './types';

export const CATEGORIES = [
  { id: Category.FAVORITES, label: 'Favorites', icon: '⭐', color: 'bg-orange-300' },
  { id: Category.TAXI, label: 'Taxi', icon: '🚕', color: 'bg-yellow-400' },
  { id: Category.PUBLIC_TRANSPORT, label: 'Subway/Bus', icon: '🚌', color: 'bg-blue-500' },
  { id: Category.MAPS, label: 'Maps', icon: '📍', color: 'bg-green-500' },
  { id: Category.TMONEY, label: 'T-Money', icon: '💳', color: 'bg-purple-500' },
  { id: Category.K_BEAUTY, label: 'K-Beauty', icon: '💄', color: 'bg-pink-400' },
  { id: Category.K_FASHION, label: 'K-Fashion', icon: '👗', color: 'bg-orange-400' },
  { id: Category.K_DRAMA, label: 'K-Drama', icon: '🎬', color: 'bg-sky-400' },
  { id: Category.ATTRACTIONS, label: 'Tickets', icon: '🎟️', color: 'bg-red-400' },
  { id: Category.AI_CONCIERGE, label: 'AI Ask', icon: '🤖', color: 'bg-indigo-600' },
];

export const GUIDE_DATA: Record<string, GuideSection> = {
  [Category.TAXI]: {
    title: "Taking a Taxi in Korea",
    description: "Taxis in Korea are affordable and safe. Kakao T is the essential app for booking.",
    tips: [
      "Standard taxis are usually orange, silver, or white.",
      "Deluxe taxis (Mobeom) are black with yellow signs and cost more.",
      "Most drivers accept Credit Cards and T-Money.",
      "International Taxi service is available for English/Japanese speakers."
    ],
    apps: [
      { name: "Kakao T", link: "kakaot://", icon: "🚕" },
      { name: "Uber (UT)", link: "uber://", icon: "🚙" }
    ]
  },
  [Category.PUBLIC_TRANSPORT]: {
    title: "Public Transport Guide",
    description: "Korea has one of the world's best subway and bus systems.",
    tips: [
      "Download 'Subway Korea' for specific metro timings.",
      "Transferring between bus and subway is free within 30 mins.",
      "Always tag your card when getting off the bus.",
      "Naver and Kakao Maps provide real-time bus arrival data."
    ],
    apps: [
      { name: "Naver Map", link: "nmap://map", icon: "🗺️" },
      { name: "KakaoMap", link: "kakaomap://open", icon: "📍" },
      { name: "Google Maps", link: "comgooglemaps://", icon: "🌍" },
      { name: "Subway Korea", link: "subwaykorea://", icon: "🚇" }
    ]
  },
  [Category.MAPS]: {
    title: "Navigation & Maps",
    description: "Google Maps has limited functionality in Korea.",
    tips: [
      "Naver Maps and Kakao Maps are the gold standard.",
      "Google Maps is good for reviews but bad for walking directions.",
      "Most local maps support English, Chinese, and Japanese."
    ],
    apps: [
      { name: "Naver Map", link: "nmap://map", icon: "🗺️" },
      { name: "KakaoMap", link: "kakaomap://open", icon: "📍" },
      { name: "Google Maps", link: "comgooglemaps://", icon: "🌍" }
    ]
  },
  [Category.K_BEAUTY]: {
    title: "K-Beauty & Skincare",
    description: "Experience the world of Korean skincare and cosmetics.",
    liveStatus: {
      label: "Check Olive Young Real-time Sales",
      link: "https://www.oliveyoung.co.kr/store/main/getSaleList.do"
    },
    tips: [
      "Olive Young is the #1 drugstore; look for the 'Big Sale' labels.",
      "Tax-free shopping is available instantly with your passport.",
      "Visit 'Chicor' for high-end beauty curations.",
      "Myeongdong is the heart of K-Beauty road shops."
    ],
    apps: [
      { name: "Olive Young", link: "oliveyoung://", icon: "💄" },
      { name: "Hwahae", link: "hwahae://", icon: "🧴" }
    ]
  },
  [Category.K_FASHION]: {
    title: "K-Fashion Shopping",
    description: "From luxury brands to affordable underground malls.",
    tips: [
      "Goto Mall (Express Bus Terminal) is the largest underground mall.",
      "Hongdae is perfect for student-style streetwear.",
      "Seongsu-dong is the 'Brooklyn of Seoul' for trendy local brands.",
      "Dongdaemun Market stays open until 4 AM for night shopping."
    ],
    apps: [
      { name: "Musinsa", link: "musinsa://", icon: "🧥" },
      { name: "ZigZag", link: "zigzag://", icon: "👗" }
    ]
  },
  [Category.K_DRAMA]: {
    title: "K-Drama Filming Locations",
    description: "Walk in the footsteps of your favorite Hallyu stars.",
    tips: [
      "Bukchon Hanok Village (Our Beloved Summer, Goblin).",
      "N Seoul Tower (My Love from the Star, Boys Over Flowers).",
      "Petite France (Crash Landing on You).",
      "Pocheon Art Valley (Moon Lovers: Scarlet Heart Ryeo)."
    ],
    apps: [
      { name: "VISITKOREA", link: "visitkorea://", icon: "🎬" },
      { name: "Klook (Tours)", link: "klook://", icon: "🎫" }
    ]
  },
  [Category.TMONEY]: {
    title: "T-Money & Transit Cards",
    description: "Your all-in-one payment card for transportation.",
    tips: [
      "Buy at any convenience store (CU, GS25, 7-Eleven).",
      "Top-up with CASH at subway stations or convenience stores.",
      "Refunds for remaining balance available at stores.",
      "Climate Card is a new unlimited 30-day pass for Seoul."
    ],
    apps: [
      { name: "T-Money Pay", link: "tmoneypay://", icon: "💳" },
      { name: "Bellygom Card", link: "#", icon: "🧸" }
    ]
  },
  [Category.ATTRACTIONS]: {
    title: "Attractions & Tickets",
    description: "Essential guide to Korean landmarks and museums.",
    tips: [
      "Many royal palaces offer free entry with Hanbok.",
      "Book Lotte World tickets online to save up to 40%.",
      "Most museums are closed on Mondays.",
      "Keep your passport for immediate tax refunds at gift shops."
    ],
    apps: [
      { name: "Klook", link: "klook://", icon: "🎫" },
      { name: "Trazy", link: "trazy://", icon: "🇰🇷" },
      { name: "Interpark Global", link: "https://www.globalinterpark.com", icon: "🎟️" }
    ]
  }
};

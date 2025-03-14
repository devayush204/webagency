"use client"
import React, { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cryptoData = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '$56,623.54', change: '1.41%', marketStats: 'https://cdn.builder.io/api/v1/image/assets/TEMP/abdb763624db8101e052b3aa473bb554090382b3463584514dc2e47e3cb40032?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cdc24f701369fe8609f85c5ac9736ee83f68cf34b756cf00d2baf5d2faab1e41?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$4,267.90', change: '2.22%', marketStats: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5fba483fa0425a2d07aa68a1568264890ac0e593bf9514ae413bd74fe28fe3d3?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5d2e3f7119ce4fdf376c984a9fbcfb47124287f30a1d4c425a4cac341f09b8da?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196' },
  { id: 3, name: 'Binance', symbol: 'BNB', price: '$587.74', change: '0.82%', marketStats: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a18c10e1aaa84e09232e9334a9ae61eba9398ea1487ee9e0669093b58fd8b6af?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ca695a26f8860e3e05eb142153155f01d71cc0e971a077b3e6d83c3060e0dbf9?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196' },
  { id: 4, name: 'Tether', symbol: 'USDT', price: '$0.9998', change: '0.03%', marketStats: 'https://cdn.builder.io/api/v1/image/assets/TEMP/820b83b851fb0854832577ce51480e559887fa2a523bd70f5ebadc11f85d9e3d?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aca0955710819f2eee4d1176cba96aec1ee2f634143f65de0d9336cd069f7c24?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196' },
  { id: 5, name: 'Solana', symbol: 'SOL', price: '$213.67', change: '-0.53%', marketStats: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a973e5626e9511c6c664407d9b32b4163ed7b52ee445c370dada8c8ec659c776?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e4a4e27c9e9272a307ba91bcd88e3e5823712394cfe3bee2e63c1ecee09a5535?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196' },
  { id: 6, name: 'XRP', symbol: 'XRP', price: '$1.04', change: '-0.44%', marketStats: 'https://cdn.builder.io/api/v1/image/assets/TEMP/58d703cd4c7b4a4fb8fd7cb5645f85c1cbf8060139fc91e3242b7e479ba40978?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c56c34c8db11fc2e54ef20346b0d4f7d321224b07575dec22c1a1fad914de2ea?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196' },
  { id: 7, name: 'USD Coin', symbol: 'USDC', price: '$1.00', change: '-0.03%', marketStats: 'https://cdn.builder.io/api/v1/image/assets/TEMP/22511f14373abeb608a7b687fc8df0cc627308f5b0711602a6c10ca4086e8405?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fdd9db4f8401c5525322aadb618687d3c72d657040edaf2fc81a67f9fd619a18?placeholderIfAbsent=true&apiKey=0d7a153a28b9484c96314809a6915196' },
];

const CryptoTableRow = ({ id, name, symbol, price, change, marketStats, icon }) => {
  const isNegative = change.startsWith('-');
  return (
    <tr className="crypto-row border-b border-gray-200">
      <td className="py-4 pl-4 pr-3 text-sm">{id}</td>
      <td className="py-4 px-3">
        <div className="flex items-center">
          <img src={icon} alt={`${name} icon`} className="w-8 h-8 mr-3" />
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-gray-500">{symbol}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-3 text-right">{price}</td>
      <td className={`py-4 px-3 text-right ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
        {change}
      </td>
      <td className="py-4 px-3">
        <img src={marketStats} alt={`${name} market stats`} className="h-8 ml-auto" />
      </td>
      <td className="py-4 ">
        <button className="px-4 py-2 bg-purple-500 text-white text-sm rounded-full hover:bg-purple-600 transition-colors ">
          Trade
        </button>
      </td>
    </tr>
  );
};

const MarketUpdate = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const rows = tableRef.current.querySelectorAll('.crypto-row');

    gsap.fromTo(
      rows,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: tableRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      }
    );
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Cryptocurrency Prices</h2>
        <button className="flex items-center px-4 py-2 bg-gray-200 rounded-full">
          <Search className="mr-2 h-5 w-5 text-gray-600" />
          Search Coins
        </button>
      </div>
      <table className="min-w-full bg-white" ref={tableRef}>
        <thead className="border-b">
          <tr>
            <th className="py-4 pl-4 pr-3 text-left text-sm font-semibold">#</th>
            <th className="py-4 px-3 text-left text-sm font-semibold">Name</th>
            <th className="py-4 px-3 text-right text-sm font-semibold">Price</th>
            <th className="py-4 px-3 text-right text-sm font-semibold">Change</th>
            <th className="py-4 px-3 text-right text-sm font-semibold">Market Stats</th>
            <th className="py-4 px-3 text-right text-sm font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <CryptoTableRow key={crypto.id} {...crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketUpdate;

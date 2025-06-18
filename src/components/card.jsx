import React from 'react';

const Card = ({ title, tagline, items, icon }) => {
  return (
    <div className="w-80 bg-pink-100 rounded-xl p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
          {/* Dynamic icon - replace with your icon component or use the prop */}
          {icon || <span className="text-green-600 font-bold">📖</span>}
        </div>
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-green-600 font-semibold mb-4">{tagline}</p>
      <ul className="text-pink-700 list-disc list-inside space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
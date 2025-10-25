// File: ProfileCard.jsx
import React from 'react';

// 🎯 TASK 1: Complete the prop destructuring here
function ProfileCard() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-500 max-w-sm mx-auto text-center">
            {/* 🎯 TASK 2: Use the destructured 'avatarUrl' prop */}
            <img className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200" src={img} alt={txt} />
            
            <div className="text-xl font-semibold text-gray-800">{/* {name} */}</div>
            
            <div className="text-sm font-medium text-indigo-600 mb-2">{/* {title} */}</div>
            
            <div className="text-gray-500 text-xs">{/* {email} (Use the one from the data) */}</div>
        </div>
    );
}

export default ProfileCard;
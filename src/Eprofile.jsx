// File: ProfileCard.jsx
import React from 'react';
// 🎯 TASK 1: Complete the prop destructuring here
function ProfileCard( name, title, department, email, avatarUrl) {
    return (
        <div >
            {/* 🎯 TASK 2: Use the destructured 'avatarUrl' prop */}
            <img  src={avatarUrl}  />
            
            <div>{name}</div>
            
            <div >{title}</div>
            
            <div >{email}</div>
        </div>
    );
}

export default ProfileCard;
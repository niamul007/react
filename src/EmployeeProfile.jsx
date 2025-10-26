import React from "react";

export default function EmployeeProfile({ name, title, department, email,avatarUrl }) {
  return (
    <div className="employee-profile">
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-500 max-w-sm mx-auto text-center">
            <img className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200" src={avatarUrl} alt={`Profile of ${name}`} />
            
            <div className="text-xl font-semibold text-gray-800">{name}</div>
            
            <div className="text-sm font-medium text-indigo-600 mb-2">{department}</div><title></title>
            
            <div className="text-gray-500 text-xs">{email}</div>
        </div>
    </div>
  );
}
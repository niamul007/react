import React from "react";
export default function TravelSpot({location,duration,highlight,price,imageUrl}){
    return(
        <div className="flex bg-white rounded-lg shadow-xl overflow-hidden mb-6 transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
            {/* Image Section */}
            <div className="flex-shrink-0 w-32 md:w-48">
                <img 
                    className="h-full w-full object-cover" 
                    src={imageUrl} 
                    alt={`View of ${location}`} 
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x160/cccccc/333333?text=Travel"; }}
                />
            </div>

            {/* Content Section */}
            <div className="p-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{location}</h3>
                
                <p className="text-sm font-medium text-indigo-600 mb-2">
                    Trip Duration: {duration}
                </p>
                
                <p className="text-gray-600 text-sm mb-3">
                    <span className="font-semibold">Highlights:</span> {highlight}
                </p>

                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <p className="text-lg font-extrabold text-green-700">
                        Total Price: ${price.toLocaleString()}
                    </p>
                    <button className="bg-indigo-500 text-white text-sm py-1.5 px-3 rounded-full hover:bg-indigo-600 transition">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}
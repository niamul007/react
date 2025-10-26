import React from "react";
import TravelSpot from "./TravelSpot";
import {placesData} from "./placeData"
export default function TravelCard(){
    const place = placesData.map((item)=>{
        return(
            <TravelSpot
            key = {item.id}
            {...item}
            />
        )
    })
    return(
        <>
        {place}
        </>
    )
}
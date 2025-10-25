import React from "react";
import {employees} from './ecardData'
import ProfileCard from './Eprofile.jsx'

export function Ecard(){
    const newData = employees.map((item)=>{
        return(<ProfileCard 
            key = {item.id}
            img = {item.img}
            name = {item.name}
            department={item.department}
            email={item.email}
            avatarUrl={item.avatarUrl}
        />)
    })
    return(
        <>
        {newData}
        </>
    )
}
export default Ecard;
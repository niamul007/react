import EmployeeProfile from "./EmployeeProfile";
import React from "react";
import { employees } from "./ecardData";

export default function EmployeeCard(){
    const employeeCards = employees.map((emp) => (
        <EmployeeProfile 
            key={emp.id}
            name={emp.name}
            title={emp.title}
            department={emp.department}
            email={emp.email}
            avatarUrl={emp.avatarUrl}
        />
    ));
    return (
        <>
        {employeeCards}
        </>
    )
}
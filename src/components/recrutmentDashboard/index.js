import React from 'react'
import FilterOptions from '../filters'
import OwnerDetailsCard from '../ownerDetailsCard'
import "./recrutmentDashboard.css"
import person from "../../assest/person.png"

function RecrutmentDashboard() {
  return (
    <div className='recrutment-dashboard'>
        <div className='max-width heading'>
            Recruiter Dashboard
        </div>
        <FilterOptions />
        <OwnerDetailsCard />
    </div>
  )
}

export default RecrutmentDashboard
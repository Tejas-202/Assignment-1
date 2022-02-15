import React from 'react'
import "./ownerDetailsCard.css"
import person from "../../assest/person.png";

const ownerdetals = [
    {
      id: 1,
      image: person,
      name: "Tejal Dipak Karanjavkar",
      interest: "Aspiring Front End Developer",
      expertin1: "Software Development Life Cycle (SDLC)",
      expertin2: "Software dev methodologies",
      expertin3: "Git Version Control, Github",
    },
    {
        id: 2,
        image: person,
        name: "Tejal Dipak Karanjavkar",
        interest: "Aspiring Front End Developer",
        expertin1: "Software Development Life Cycle (SDLC)",
        expertin2: "Software dev methodologies",
        expertin3: "Git Version Control, Github",
      },
      {
        id: 3,
        image: person,
        name: "Tejal Dipak Karanjavkar",
        interest: "Aspiring Front End Developer",
        expertin1: "Software Development Life Cycle (SDLC)",
        expertin2: "Software dev methodologies",
        expertin3: "Git Version Control, Github",
      },
      {
        id: 4,
        image: person,
        name: "Tejal Dipak Karanjavkar",
        interest: "Aspiring Front End Developer",
        expertin1: "Software Development Life Cycle (SDLC)",
        expertin2: "Software dev methodologies",
        expertin3: "Git Version Control, Github",
      },
      {
          id: 5,
          image: person,
          name: "Tejal Dipak Karanjavkar",
          interest: "Aspiring Front End Developer",
          expertin1: "Software Development Life Cycle (SDLC)",
          expertin2: "Software dev methodologies",
          expertin3: "Git Version Control, Github",
        },
  ];

function OwnerDetailsCard() {
  return (
    <div className='max-width container'>
        {ownerdetals.map((details) => {
            return(
                <div className='owner-details-card'>
                    <div className='image-name-detilas'>
                        <img className='owner-image' src={details.image} alt='owner-image' />
                        <div className='name-details'>
                            <div className='owner-name'>{details.name}</div>
                            <div className='owner-interest'>{details.interest}</div>
                        </div>
                    </div>
                    <div className='seperation-line'></div>
                    <div className='learning-details'> 
                        <div className='haeding'>Top Areas</div>
                        <div className='expert-list'>
                            <div className='expert-in'>{details.expertin1}</div>
                            <div className='expert-in'>{details.expertin2}</div>
                            <div className='expert-in'>{details.expertin3}</div>
                        </div>
                    </div>
                </div>
            );
        })}  
    </div>

    
  )
}

export default OwnerDetailsCard
import React from 'react'
import "./navbar.css"
import logo from "../../assest/Rectangle.svg";

const tabList = [
  {
    id: 1,
    title: "ASSIGNMENT"
  },
  {
    id: 2,
    title: "INTERNSHIP"
  },
  {
    id: 3,
    title: "ABOUT US"
  },
  {
    id: 4,
    title: "CONTACT US"
  },
];

function Navbar() {
  return (
    <div className='navbar'>
      <div className='max-width-navbar absolute-center logo-tabs'>
        <img src={logo} alt="logo" className='logo absolute-center' />
        <div className='tab-list'>
          {tabList.map((tabs) => {
            return (
              <div className='tabs absolute-center'>{tabs.title}</div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar
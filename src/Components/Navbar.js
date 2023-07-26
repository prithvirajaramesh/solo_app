import React from "react";
import Image from '../images/RAJA.jpeg';
import '../Css/Navbar.css'

export default function Navbar() {
    return(<>
       <div>
        <img src={Image} className="Profile_image" alt="profile"/>
       </div>
    </>);
}
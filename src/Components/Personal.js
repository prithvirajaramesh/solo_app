import React from "react";

import '../Css/Personal.css'

export default function Personal() {
    return(<>
       <div className="personal_Data">
         <h1 className="heading_new">Prithviraja Ramesh</h1>
         <h6 className="Apostion">Frontend Developer</h6>
         <p className="heading_Mail">prithvirajaramesh@gmail.com</p>

         <div className="btn_group">
            <button className="linked_in"><a href="https://in.linkedin.com/in/prithviraja-ramesh-09341b166"><i class="fa fa-linkedin-square" aria-hidden="true"></i> Linked In</a></button>
            <button className="github"><a href="https://github.com/prithvirajaramesh"> <i class="fa fa-github-square" aria-hidden="true"></i> GitHub </a></button>

         </div>
       </div>
    </>);
}
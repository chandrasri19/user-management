import React from 'react';

export default function Dashboard(){
    return(
        <div  className="mt100">
        <h5 className="font-clr" style={{color:"black",textAlign:"center",justifyContent:"center",fontSize:"3rem"}}>Welcome</h5>
         <ul>         
           <li>
              <div><a className="nav-link NunitoSemiBold navFontSize" href="/allusers">AllUser List</a></div>

            </li>           
         </ul>
    </div>
    )
}
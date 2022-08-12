import React from 'react'
import './header.css'


 const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-black fixed" >
       <div class="container-fluid">
         <a class="navbar-brand " href="/" >
            <img
               src= 'https://img.icons8.com/external-dreamcreateicons-outline-color-dreamcreateicons/344/external-movie-museum-dreamcreateicons-outline-color-dreamcreateicons-2.png'
               class="ms-3 me-2 mb-3"
               height="50"
               alt="Logo"
               loading="lazy"
            />
      
            <b>
              <small class = "text-danger">Movie Rating</small>
            </b>   
       
       </a>
  </div>
</nav>
  )
}
export default Header
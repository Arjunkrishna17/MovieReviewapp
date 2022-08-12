/* -------------------------import section ------------------------------------------ */

import React,{useState} from 'react'



import './Addrating.css'



/* -------------------------import section -------------------------------------------- */


/* -------------------------Global Variable Section  ---------------------------------- */


/* -------------------------Global Variable Section  ---------------------------------- */



/* -------------------------Function to add Rating for movie  -------------------------- */


function Addrating (props) {

// store movie data
let [movie, setMovie] = useState({name:"", rating:""}); 

// Function triger on submit


let submitFn = (e) => {
    e.preventDefault();
    if(movie.name === "" || movie.rating === ""){
      alert("All fields are required")
    return
  }
  else{
    props.movieHandler(movie);
    setMovie({name:"", rating:""})
    
  }
} 
/* -------------------------Function to add Rating for movie  -------------------------- */



  return (
   <section class="  card rounded-3 rate m-4" >  
     <div class = "container"> 

        <div class = "text-center m-3">
           <h6 class= "font-weight-bold  " >Rate the Movie</h6>
        </div>

        <form onSubmit={submitFn} >

          <div class="form-group ">
            <input class="form-control  name "
             type ="text" 
             placeholder = 'Enter Movie name' 
             value ={movie.name}
             onChange={e => setMovie({...movie, name: e.target.value})}></input>
          </div>

         <div class="form-group mt-3">
           <input class="form-control  rating"
            type = "text"
            placeholder='Rating 0.0 -10.0'
            value = {movie.rating}
            onChange = {e => setMovie({...movie,rating: e.target.value})}></input>
         </div>

         <div className ="text-center m-2">
            <button  className='btn btn-danger'>Rate</button>
         </div>
         
        </form>
      </div>
   </section>
   

  )
}

export default Addrating
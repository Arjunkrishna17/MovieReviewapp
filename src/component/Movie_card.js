/* ------------------import section -------------------------- */

import React from "react";
import './movieCard.css'

/* -----------------import section---------------------------- */



/*-------------------Function to create Movie Card ---------------------*/

function Moviecard(props) {

 const count =props.movieData.length;
 console.log(count)
  const renderMovie = props.movieData.map((movie) => {
  
    /*---function to print emoji accoring to rating-*/
    
    const condition = (rating) => {
      if (rating >= 0 && rating <= 3.9) {
        return <div>☹️</div>;
      } else if (rating >= 4.0 && rating <= 5.9) {
        return <div>😐</div>;
      } else if (rating >= 6.0 && rating <= 7.9) {
        return <div>🙂</div>;
      } else if (rating >= 8 && rating <= 10.0) {
        return <div>😃</div>;
      }
    };

    /*---function to print emoji accoring to rating-*/
  
    return ( 
        <div className = "movieDetail ">
           <div class=" container rate movieRate m-3" > 
              <div class="row" >

                 <div class = "">
                    <h1 class= "font-weight-bold" >{movie.name}</h1>
                  </div>

                  <div>
                    <small class="h6">Rating: {movie.rating}</small>  
                  </div>

                  <div>
                     <p >{condition(movie.rating)}</p> 
                  </div>

                  <div>
                     <small class="h6">{movie.createdAt}</small> 
                  </div> 

                  <div>
                     <button class="btn btn-danger" onClick = {() => props.deleteHandler(movie.id)}>Delete</button>
                  </div>
                  
                </div>
            </div>
        </div>
    
  
        
     
    
    

    )
     
  });

  return (
    <div class="Cards container text-center ">
     
      <h2 className="col-4 movieContainer ">{renderMovie}</h2>
    </div>
    
  );
}
/*-------------------Function to create Movie Card ---------------------*/

export default Moviecard
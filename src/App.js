/*------------------------Import Section------------------------------------------*/

import Header from "./component/Header";
import Addrating from "./component/Addrating";
import Moviecard from "./component/Movie_card";
import moment from "moment";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import React, { useState, useEffect } from "react";

/*------------------------Import Section------------------------------------------*/

/*------------------------Global Variable Section----------------------------------*/

const LOC_STOR_KEY = "movie";
const retrieveData = JSON.parse(localStorage.getItem(LOC_STOR_KEY));
let date = moment().format("lll");
/*------------------------Global Variable Section----------------------------------*/

/*------------------------Function to render all component-----------------------------*/

function App() {
  const [movieData, setMovieData] = useState([]);


  // movie handler fn receive argument from addRating component
  const movieHandler = (movie) => {
    
    setMovieData([...movieData, { id: uuidv4(), createdAt: date, ...movie }]);
    
  };

  //retrieve data from localStorage on visit page

  useEffect(() => {
    setMovieData(retrieveData);
  }, []);

  // store data locally whenever change in movieDta

  useEffect(() => {
    localStorage.setItem(LOC_STOR_KEY, JSON.stringify(movieData));
  }, [movieData]);

  // Delete handler delete the card from list

  const deleteHandler = (id) => {
    const filtering = movieData.filter((movie) => {
      return movie.id !== id;
    });
    setMovieData(filtering);
  };

// sorting the card accoring to name/ rating
 

function sortNum(){
 const sortedData = [...movieData].sort((a, b) => {
    return a.rating - b.rating;
     })
      setMovieData(sortedData);
  }

function sortAlpha(){
  const sortedData = [...movieData].sort((a, b) => {
    return a.name>b.name ? 1: -1;
  })
  setMovieData(sortedData);
} 
  
   

  
 
  return (
    <div class="container cont">
      <div class="row headr ">
          <Header />
       </div>

       <div class ="row rw1 ">
           <div class="row rw2">
               <div class = "bts row ">
                    <div class = "col-7 text-center clh1 "></div>
                    <div class = "col-5 clh2"> 
                      <div class = "row">

                        <button class = "btn h6 col-3 p-2 m-2 btn-danger"
                         onClick = {sortAlpha} 
                        >Sort [A-Z]
                        </button>

                        <button  onClick={sortNum}
                        class = "btn h6 col-3  m-2 btn-danger"
                        >Sort [1-10]</button>

                      </div>
                   </div>
                </div>
                     <div class = "col-3  cl1">
                          <Addrating movieHandler={movieHandler}  movieData={movieData} />
                      </div>             
                    </div>
                       <div class="row rw3 ">
                          <div class="col-4 cln2">
                             <Moviecard movieData={movieData} deleteHandler={deleteHandler} />
                           </div>
                        </div>
                    </div>
                </div>
     
  );
}

export default App;

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
    console.log(movie);
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

  // sort card accoring to name/ rating
  if (movieData.length > 1) {
    movieData.sort((a, b) => {
      return a.rating - b.rating;
    });
  }

  return (
    <div class="container">
      <div class="row">
        <div class="">
          <Header />
          <Addrating movieHandler={movieHandler} />
        </div>

        <div class="col-4 cln2">
          <Moviecard movieData={movieData} deleteHandler={deleteHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;

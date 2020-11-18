import './App.css';
import { CardList } from "./components/CardList";
import { SearchBox } from './components/SearchBox';
import axios from "axios";
import React, { useEffect, useState, createContext } from 'react'

const apiKey = "20c7a7e5623de2ff25121296de81de0a"; //Your API key
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const MovieContext = createContext();

function Movie() {
  
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('Matrix');

  useEffect(() => {
    axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        page: 1,
        query: searchKeyword  //TODO: from input,
      }
    })
      .then((res) => setMovieList(res?.data?.results))
      .catch((err) => console.log(err))
  }, [searchKeyword])

  return (
    <div className="App-header" >
      <MovieContext.Provider value = {{movieList, baseImageUrl, setSearchKeyword}}>
        <SearchBox />
        <CardList />
      </MovieContext.Provider>
    </div>
  );
}

export default Movie;

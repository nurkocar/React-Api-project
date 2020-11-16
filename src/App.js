import './App.css';
import { CardList } from "./components/CardList";
import { SearchBox } from './components/SearchBox';
import axios from "axios";
import React, {useEffect, useState} from 'react'

const apiKey = ""; //Your API key
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function App() {

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
      .then((res) => setMovieList(res.data.results))
      .catch((err) => console.log(err))
  }, [searchKeyword])

  return (
    <div className="App-header" >
      <SearchBox setSearchKeyword = {setSearchKeyword} />
      <CardList movieList = {movieList} baseImageUrl = {baseImageUrl} />
    </div>
  );
}

export default App;

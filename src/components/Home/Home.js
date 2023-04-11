import { useState } from "react";
import MovieList from "../MovieList/MovieList";
import { useEffect } from "react";
export default function Home () {
    const [trendingMovie,setTrendingMovie ]=useState([])
    async function getTrendingMovie(){


        let url=process.env.REACT_APP_SERVER_URL;
        let response=await fetch(`${url}/trending`)
        let movieData=await response.json();
        console.log(movieData);

        setTrendingMovie(movieData);
        console.log(trendingMovie);

    }


    useEffect(() =>{
        getTrendingMovie()
    },[])


    return(
        <>
        <MovieList movies={trendingMovie} />
        </>
    )
}
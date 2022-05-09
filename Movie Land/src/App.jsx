
import  { useState, useEffect }  from "react";
import './App.css'
import searchIcon from './Search.svg'
import MovieCard from "./MovieCard";


const API_URL ='http://www.omdbapi.com?apikey=6950a162';
/* Static object data of a movie storage */

const movie0 = {

    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
    "Title": "Italian Spiderman",
    "Type": "movie",
    "Year": "2007",
    "imdbID": "tt2705436"
}


const App = () => {
    const[movies, setMovies] = useState([])
    const[searchTerm, setSearchTerm] =useState('')
    
    const searchMovies = async(title) => {
        const reponse= await fetch(`${API_URL}&s=${title}`)
        const data= await reponse.json();
    
       /* console.log(data.Search);*/
    
        setMovies(data.Search) 
    
    }

    /* call the searchmovie in the use effect */
    useEffect(  () => {
        searchMovies('heist') }, []);

return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                 placeholder="search for movies"
                 value={searchTerm}
                 onChange={(e)=> setSearchTerm(e.target.value)}
/* onchange accept a  callback function */
                />
                <img
                src={searchIcon}
                alt='search' 
                onClick={()=> searchMovies(searchTerm)}/>
                   </div>
   { movies?.length > 0
                 ?   (
                 <div className="container">   
                     {movies.map((movie) => ( 
                      <MovieCard movie={movie} />
                     ))}
                      </div>
                  ):(
                    <div className="empty">
                    <h2>No movies found</h2>
                    </div>
                  )
                  }
            </div>
             )    
            
            }

            

 
export default App;
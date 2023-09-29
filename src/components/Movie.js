import { useState } from "react"
import MovieDeleteButton from "./MovieDeleteButton"
import AllDeleteButton from "./AllDeleteButton"
import LoadAllMovies from "./LoadAllMovies"

import "./Movie.css"
import data from "../data"

const Movie = () => {
    const [movies, setMovies] = useState(data)

    const deleteMovieHandler = (id) => {
        const filteredMovies = movies.filter( (movie) => {
            return movie.id !== id
        })

        setMovies(filteredMovies)
    }

    const deleteAllMoviesHandler = () => {
        setMovies([])
    }

    const loadAllMoviesHandler = () => {
        setMovies(data)
    }    

    return (
        <section className="movies-wrapper">
            <div className="all-movies">
                {
                    movies.map( (movie) => {
                        const {id, image, title, age, tags, description} = movie

                        return (          
                            <div key={id} className="one-movie">
                                <img src={image} alt={title} />
                                <h2>{title}</h2>
                                <p>{age}</p>
                                <p>{tags}</p>
                                <p>{description}</p>
                                <MovieDeleteButton deleteMovieHandler={ () => deleteMovieHandler(id)}/>
                            </div>              
                        )
                    })
                }
            </div>
            <div className="button-wrapper">
                <AllDeleteButton deleteAllMoviesHandler={deleteAllMoviesHandler}/>
                <LoadAllMovies loadAllMoviesHandler={loadAllMoviesHandler}/>
            </div>
        </section>
    )
}

export default Movie
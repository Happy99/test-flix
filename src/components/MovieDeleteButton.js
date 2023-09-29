import "./MovieDeleteButton.css"

const MovieDeleteButton = (props) => {
    return (
        <button type="button" className="movie-delete-button" onClick={props.deleteMovieHandler}>Vymazat film</button>
    )
}

export default MovieDeleteButton
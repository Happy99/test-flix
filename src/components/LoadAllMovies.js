import "./LoadAllMovies.css"

const LoadAllMovies = (props) => {
    return (
        <button type="button" className="main-load-button" onClick={props.loadAllMoviesHandler}>Načti filmy</button>
    )
}

export default LoadAllMovies
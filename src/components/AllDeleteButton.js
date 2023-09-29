import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {
    return (
        <button type="button" className="main-delete-button" onClick={props.deleteAllMoviesHandler}>Vymazat vše</button>
    )
}

export default AllDeleteButton
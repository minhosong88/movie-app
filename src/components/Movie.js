import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function Movie({ coverImg, title, summary, year, genres, id }) {
    return (

        <Link
                to={{ pathname: `/movie/${id}` }}
                state={{ movie: { summary } }}
                className="movie-card"
        >
            <h2>{title}</h2>
            <img src={coverImg} alt={title} />
            <div className="movie-info">
                <div className="year">{year}</div>
                <ul>
                    {genres && genres.map((genre, index) => (
                        <li key={index}>{genre}</li>
                    ))}
                </ul>
            </div>
        </Link>



        
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
}

export default Movie;
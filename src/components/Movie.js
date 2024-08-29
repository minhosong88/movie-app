import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function Movie({ coverImg, title, summary, year, genres, id }) {
    return (
        <div>
            <h2>
                <Link
                    to={{ pathname: `/movie/${id}` }}
                    state= {{ movie: {summary} }}>
                    {title}
                </Link>
            </h2>

            <img src={coverImg} alt={title} />
            <div>{year}</div>
            <ul>
                {genres && genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>
        </div>
        
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
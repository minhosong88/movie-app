import PropTypes from "prop-types";

function Movie({ coverImg, title, synopsis, year, genres }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={coverImg} alt={title} />
            <p>{synopsis}</p>
            <span>{year}</span>
            <ul>
              {genres&&genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
}

export default Movie;
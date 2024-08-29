import { useEffect, useState } from "react";
import Movie from "../components/Movie"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [rating, setRating] = useState(7.0);   
    
    const onChange = (event) => {
        setRating(event.target.value);
    }

    const getMovies = async (rating) => {
    let url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=year`
    const data = await (
      await fetch(url)
    ).json();
    setMovies(data.data.movies);
    setLoading(false);
    }
    
    useEffect(() => {
        getMovies(rating);
    }, [rating]);
    return (
            <div>
            {loading ? <h1>Loading</h1> : 
                <div>
                    <h1> FlickFinder </h1>
                    <div className="rating-container"> Rate: {rating} or above</div>
                    <input className="range" onChange={onChange} type="range" min="7.0" max="10.0" step="0.1" value={rating} />
                    <div className="movies-scroll-container">
                        <div  className="movies-container">
                            {movies.map((movie) => (
                                    <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    coverImg={movie.medium_cover_image}
                                    title={movie.title}
                                    summary={movie.summary}
                                    year={movie.year}
                                    genres={movie.genres} />               
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
            </div>
        );
    }

export default Home;
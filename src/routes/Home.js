import { useEffect, useState } from "react";
import Movie from "../components/Movie"

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const data = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
    setMovies(data.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? <h1>Loading</h1> : 
        
        <div>
          <h1> Movies rated 8.8 or above</h1>  
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              year={movie.year}
              genres={movie.genres} />
          ))}
        </div>
      }
    </div>
  );
}

export default Home;
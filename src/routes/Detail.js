import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState("");
    const location = useLocation();
    const { id } = useParams();
    const summary = location.state?.movie.summary;

    const getDetail = async (id) => {
        const data = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(data.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getDetail(id);
    }, [id]);
    return (
        <div>
            {loading ? <h1>Loading</h1> : (
                <div>
                    <h2>{detail.title}</h2>
                    <img src={detail.medium_cover_image} alt={detail.title} />
                    <ul>
                        {detail.genres && detail.genres.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                    <div>
                        <span>{detail.year}</span>
                        <button><a href={detail.url}>Watch</a></button>
                    </div>
                    <p>{summary ? summary:"No summary available"}</p>
                </div>

            )}
       

        </div>
    );
}
export default Detail;
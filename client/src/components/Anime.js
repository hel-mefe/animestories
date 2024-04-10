import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Anime = () => {
    const [anime, setAnime] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let myAnime = {
            id: 1,
            title: "One Piece",
            release_date: "1986-03-07",
            runtime: 116,
            mpaa_rating: "R",
            description: "Some long description",
        }
        setAnime(myAnime);
    }, [id])

    return(
        <div>
            <h2>Anime: {anime.title}</h2>
            <small><em>{anime.release_date}, {anime.runtime} minutes, Rated {anime.mpaa_rating}</em></small>
            <hr />
            <p>{anime.description}</p>
        </div>
    )
}

export default Anime;
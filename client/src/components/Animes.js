import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Animes = () => {
    const [animes, setAnimes] = useState([]);

    useEffect( () => {
        let animesList = [
            {
                id: 1,
                title: "One Piece",
                release_date: "2004-01-01",
                runtime: 116,
                mpaa_rating: "R",
                description: "Some long description",
            },
            {
                id: 2,
                title: "Dragon Ball Z",
                release_date: "1999-06-12",
                runtime: 115,
                mpaa_rating: "PG-13",
                description: "Some long description",
            },
        ];

        setAnimes(animesList)
    }, []);

    return(
        <div>
            <h2>Animes</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Animes</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {animes.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/animes/${m.id}`}>
                                    {m.title}
                                </Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>    
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Animes;
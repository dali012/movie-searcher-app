import axios from "axios";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import Header from "../components/Header";

const UserList = () => {
    const [likedMovies, setLikedMovies] = useState([]);

    useEffect(() => {
        let moviesIds = window.localStorage.movies ? window.localStorage.movies.split(",") : [];
        for (let i = 0; i < moviesIds.length; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/${moviesIds[i]}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
                .then(({ data }) => setLikedMovies((likedMovies) => [...likedMovies, data]));
        }
    }, [])

    return (
        <div className="user-list-page">
            <Header />
            <h2>Liked Movies<span> 💖</span></h2>
            <div className="result">
                {likedMovies.length > 0 ? likedMovies.map((movie) => <Card key={movie.id} movie={movie} />) : (
                    <h2>no favorites movies yet</h2>
                )}
            </div>
        </div >
    )
};

export default UserList;

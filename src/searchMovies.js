import React from "react";

export default function SearchMovie() {

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const query = "Jurassic Park";
        const api_key = "584fd4a9317c8321f558652d51f4c099";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch(err) {
            console.error(err);
        }
        
    };

    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" 
                placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}
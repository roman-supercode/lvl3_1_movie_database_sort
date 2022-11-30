import "./FilterUI.css";
import movies from "../data/Data";
import Moviecard from "../card/Moviecard";
import { useState } from "react";

function FilterUI() {
    const [newMovies, setNewMovies] = useState(movies);

    // Erscheinungsjahr - neueste zuerst
    function sortYearAsceding() {
        const newArray = [...movies];
        setNewMovies(newArray.sort((a, b) => a.year - b.year));
        console.log(newArray);
    }
    // Erscheinungsjahr - älteste zuerst
    function sortYearDescending() {
        const newArray = [...movies];
        setNewMovies(newArray.sort((a, b) => b.year - a.year));
    };
    // Beste Bewertung
    function sortBestRate() {
        const newArray = [...movies];
        setNewMovies(newArray.sort((a, b) => b.rate - a.rate));
    }
    // A-Z
    function sortStringAscending() {
        const newArray = [...movies];
        setNewMovies(newArray.sort((a, b) => a.title > b.title ? 1 : -1));
    }
    // Z-A
    function sortStringDescending() {
        const newArray = [...movies];
        setNewMovies(newArray.sort((a, b) => b.title > a.title ? -1 : 1));
    }

    return (
        <div>
            <article className="filter">
                <button type="button" onClick={sortYearAsceding}>Sort by Date Ascending</button>
                <button type="button" onClick={sortYearDescending}>Sort by Date Descending</button>
                <button type="button" onClick={sortBestRate}>Beste Rate</button>
                <button type="button" onClick={sortStringAscending}>A-Z</button>
                <button type="button" onClick={sortStringDescending}>Z-A</button>
            </article>
            <div className="container">
                {newMovies.map((item, index) => {
                    return (
                        <Moviecard
                            key={index}
                            title={item.title}
                            year={item.year}
                            director={item.director}
                            duration={item.duration}
                            genre={item.genre}
                            // .toString().split(",").join(`${<br />}`)
                            rate={item.rate}
                        />
                    );
                })
                }
            </div>
        </div>
    );
};

export default FilterUI;
import { useEffect, useState } from "react";
import { RouteObject } from "react-router-dom";
import MovieCard, { Result, RootObject } from "../components/MovieCard/MovieCard"
import Navbar from "../components/Navbar/Navbar";
import SideBarMovies from "../components/SideBarMovies/SideBarMovies"


const Movies = () => {
    const [movies, setMovies] = useState<Result[]>([]);

    const getMovies = async () => {

        const response = await fetch(
            "https://63944f1f86829c49e819008c.mockapi.io/api/movies"
        );

        const results = (await response.json());
        console.log("title", results)

        setMovies(results)
    }

    useEffect(() => {

        getMovies()
    }, [])

    return (
        <>
            <Navbar></Navbar>

            <div className="franco">
                <div>
                    {movies.map((item) => (<MovieCard item={item} />))}
                </div>

                <SideBarMovies></SideBarMovies>
            </div>





        </>)


}


export default Movies
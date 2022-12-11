import { useEffect, useState } from "react";
import MovieCard, { Result } from "../components/MovieCard/MovieCard"
import Navbar from "../components/Navbar/Navbar";
import SideBarMovies from "../components/SideBarMovies/SideBarMovies"

const Movies = () => {
    const [movies, setMovies] = useState<Result[]>([]);

    const getMovies = async () => {

        const response = await fetch(
            "https://63944f1f86829c49e819008c.mockapi.io/api/movies"
        );
        const results = (await response.json());
        console.log("title", results[0].title)
        console.log("image", results[0].image)

        setMovies(results)
    }

    useEffect(() => {

        getMovies()
    }, [])

    return (
        <>

            <div>
                <Navbar></Navbar>
                <SideBarMovies></SideBarMovies>
                {movies.map((item) => (<MovieCard item={item} />))}

            </div>


        </>)


}


export default Movies
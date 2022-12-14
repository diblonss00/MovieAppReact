import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard, { Result } from "../components/MovieCard/MovieCard"
import Navbar from "../components/Navbar/Navbar";
import SideBarMovies from "../components/SideBarMovies/SideBarMovies"
import WishList from "../components/WishList/WishList";


const Movies = () => {
    const [movies, setMovies] = useState<Result[]>([]);
    const [users, setUsers] = useState([]);

    const getMovies = async () => {

        const response = await fetch(
            "https://63944f1f86829c49e819008c.mockapi.io/api/movies"
        );

        const results = (await response.json());
        console.log("title", results)

        setMovies(results)
    }

    const getUsers = async () => {

        const response = await fetch(
            "https://63944f1f86829c49e819008c.mockapi.io/api/users"
        );

        const results = (await response.json());
        console.log("image", results)

        setUsers(results)
    }



    useEffect(() => {

        getUsers()
        getMovies()
    }, [])

    return (
        <>
            <Navbar></Navbar>

            <div style={{ display: "flex", flexDirection: "row" }}>

                <div>
                    {users.map((item) => (<SideBarMovies user={item} />))}
                </div>

                <div>
                    <h3> New Releases</h3>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {movies.map((item) => (<MovieCard item={item}></MovieCard>))}

                    </div>

                    <WishList></WishList>

                </div>


            </div>







        </>)


}


export default Movies
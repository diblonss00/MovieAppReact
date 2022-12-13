import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MovieCard, { Result } from "../components/MovieCard/MovieCard"


const Movie = () => {
    const [movie, setMovie] = useState<Result[]>([])
    const { id } = useParams();

    const getMovie = async () => {

        const response = await fetch(
            `https://63944f1f86829c49e819008c.mockapi.io/api/movies/${id}`
        );

        const results = (await response.json());
        console.log("title", results)

        let gay: [any] = [results]

        setMovie(gay)



        console.log("olloo", movie)
    }






    useEffect(() => {
        getMovie()
    }, [])


    return (

        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>

                <div>{movie.map((item) => (<MovieCard item={item}></MovieCard>







                ))}</div>

            </div>



        </>)


}


export default Movie
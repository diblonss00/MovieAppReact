import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Result } from "../components/MovieCard/MovieCard";
import Navbar from "../components/Navbar/Navbar";
import SingleMovie from "../components/SingleMovie/SingleMovie";


const Movie = () => {
    const [movie, setMovie] = useState<Result[]>([])
    const { id } = useParams();

    //api film
    const getMovie = async () => {

        const response = await fetch(`https://63944f1f86829c49e819008c.mockapi.io/api/movies/${id}`);

        const results = (await response.json());
        console.log("title", results)

        let arrayMovie: [any] = [results]

        setMovie(arrayMovie)

        //console.log("film", movie)
    }

    useEffect(() => {
        getMovie()
    }, [])


    return (

        <>

            <Navbar></Navbar>

            <div>

                {movie.map((item) => (<SingleMovie item={item}></SingleMovie>))}


            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
                <button>Aggiungi alla WatchList</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>

                <h1>{movie.map((item) => (item.title))} ({movie.map((item) => (item.releaseDate))})</h1>
                <p style={{ color: 'white' }}>{movie.map((item) => (item.description))}</p>

                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h3>Director:</h3>
                        <p style={{ color: 'white', marginLeft: '5px' }}>{movie.map((item) => (item.director))}</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h3>Writers:</h3>
                        <p style={{ color: 'white', marginLeft: '5px' }}>{movie.map((item) => (item.writers))}</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h3>Stars:</h3>
                        <p style={{ color: 'white', marginLeft: '5px' }}>{movie.map((item) => (item.stars))}</p>
                    </div>
                </div>


            </div>





        </>)


}


export default Movie
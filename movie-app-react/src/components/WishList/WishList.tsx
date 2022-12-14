import { useEffect, useState } from "react"
import MovieCard, { Result } from "../MovieCard/MovieCard"


const WishList = (props: { item: Result }) => {
    const [favouriteMovie, setFavouriteMovie] = useState([])

    useEffect(() => {
        setFavouriteMovie(JSON.parse(localStorage.getItem('favouriteMovies')!))

    }, [])


    return (<></>)

}

export default WishList
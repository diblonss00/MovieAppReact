import { useEffect, useState } from "react"

interface ButtonProps {
    id: number
}


const Button = (props: ButtonProps) => {
    const [isFavouriteMovie, setIsFavouriteMovie] = useState()

    const setFavouriteMovie = () => {

        //se esiste il local storage lo rendo un array
        if (localStorage.getItem('favouriteMovies')) {
            let favouriteMovies = JSON.parse(localStorage.getItem('favouriteMovies')!)

            favouriteMovies.push(props.id)

            setIsFavouriteMovie(favouriteMovies?.includes(props.id))

            localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies));
        }

        //setto il localstorage se non esiste
        else {
            localStorage.setItem('favouriteMovies', "[" + JSON.stringify(props.id) + "]");
        }



    }

    return (
        <>
            <button style={{ backgroundColor: isFavouriteMovie ? 'red' : 'black', marginTop: '10px' }} onClick={setFavouriteMovie}>Aggiungi alla WatchList</button>
        </>
    )
}

export default Button
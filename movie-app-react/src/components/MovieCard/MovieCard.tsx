import "./MovieCard.scss"
import Button from "../Button/Button"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
export interface Result {
    title: string
    releaseDate: Date
    director: string
    writers: [],
    stars: [],
    video: string,
    image: string
    movie: string
    rating: number
    description: string
    duration: number
    id: number

}


const MovieCard = (props: { item: Result }) => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className="flexColumnCenterCard">
                <Link to={`/movies/${props.item.id}`}>
                    <div className="card"  >

                        <div>
                            <img src={props.item.image} alt="Avatar" width={"100%"} />
                        </div>


                        <div className="container flexColumnCenter">
                            <h2>{props.item.title}</h2>
                            <h4>{props.item.director}</h4>


                            <div>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                </Link>
                <Button id={props.item.id}></Button>
            </div>
        </>
    )


}

export default MovieCard
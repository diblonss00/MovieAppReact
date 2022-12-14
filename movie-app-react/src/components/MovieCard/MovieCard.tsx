import "./MovieCard.scss"
import Button from "../Button/Button"
import { Link, useNavigate } from "react-router-dom"
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

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link to={`/movies/${props.item.id}`}>
                    <div className="card" style={{ marginRight: "20px" }}>

                        <div>
                            <img src={props.item.image} alt="Avatar" width={"100%"} />
                        </div>


                        <div className="container">
                            <h4>{props.item.title}</h4>
                            <p style={{ color: 'white' }}>{props.item.director}</p>
                        </div>

                        <div>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>


                    </div></Link>
                <Button></Button>
            </div>





        </>
    )


}

export default MovieCard
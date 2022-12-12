import "./MovieCard.scss"
import Button from "../Button/Button"
export interface Result {
    title: string
    releaseDate: Date
    director: string
    writers: [],
    stars: [],
    image: string
    movie: string
    rating: number
    description: string
    duration: number
    id: number


}

export interface RootObject {
    resultCount: number;
    results: Result[];
}


const MovieCard = (props: { item: Result }) => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className="card">
                <img src={props.item.image} alt="Avatar" width={"100%"} />

                <div className="container">
                    <h4><b>{props.item.title}</b></h4>
                    <p>{props.item.director}</p>
                </div>

                <div>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>

                <Button isFavorite={true}></Button>
            </div>






        </>
    )


}

export default MovieCard
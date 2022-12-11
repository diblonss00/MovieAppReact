import "./MovieCard.scss"

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


const MovieCard = (props: { item: Result }) => {
    return (
        <>
            <div>
                <div className="card">
                    <img src={props.item.image} alt="Avatar" width={"10%"} />
                    <div className="container">
                        <h4><b>{props.item.title}</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>

            </div>

        </>
    )


}

export default MovieCard
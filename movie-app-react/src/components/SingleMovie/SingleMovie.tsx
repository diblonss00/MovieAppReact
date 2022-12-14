import { Result } from "../MovieCard/MovieCard"

const SingleMovie = (props: { item: Result }) => {

    return (<>

        <div style={{ display: 'flex', flexDirection: 'row' }}>

            <div>
                <img src={props.item.image} alt="" />
            </div>
        </div>









    </>)
}

export default SingleMovie
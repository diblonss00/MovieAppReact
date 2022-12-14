import "./SideBarMovies.scss"

export interface User {
    image: string;
    name: string
}

interface MoviesProp {
    user: User
}

const SideBarMovies = (props: MoviesProp) => {
    return (
        <>
            <div className="sideBar">

                <div className="flexColumnCenter">
                    <img src={props.user.image} alt="" className="profile" />
                    <p className="movieCardText"> Benvenuto {props.user.name}!</p>
                </div>

            </div>


        </>
    )

}

export default SideBarMovies
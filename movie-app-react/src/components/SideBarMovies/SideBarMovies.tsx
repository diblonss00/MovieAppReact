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

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
                    <img src={props.user.image} alt="" style={{ width: "50%", marginLeft: "10px", borderRadius: "30px" }} />
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>{props.user.name}</p>
                </div>

            </div>


        </>
    )

}

export default SideBarMovies
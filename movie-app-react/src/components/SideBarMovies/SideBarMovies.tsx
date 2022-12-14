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
                    <img src={props.user.image} alt="" style={{ width: "50%", borderRadius: "30px", marginTop: '40px' }} />
                    <p style={{ textAlign: "center", fontWeight: "bold" }}> Benvenuto {props.user.name}!</p>
                </div>

            </div>


        </>
    )

}

export default SideBarMovies
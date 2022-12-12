import "./SideBarMovies.scss"
const SideBarMovies = (props: any) => {
    return (
        <>
            <div className="sideBar">

                <input type="text" placeholder="Search.." />

                <div className="justify-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/119/119591.png" alt="" width={"50px"} height={"50px"} />

                </div>

                <div className="justify-center">
                    <p>HOME</p>
                </div>

            </div>


        </>
    )

}

export default SideBarMovies
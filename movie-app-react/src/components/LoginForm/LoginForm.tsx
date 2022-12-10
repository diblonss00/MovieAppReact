import { useState } from "react";
import "./LoginForm.scss"

const LoginForm = () => {
    const [users, setUsers] = useState([]);

    return (
        <>


            <form action="" className="LoginFormContainer">

                <input type="email" name="" id="" />

                <input type="password" name="" id="" />


                <button>Accedi</button>

            </form>

        </>
    )
}

export default LoginForm
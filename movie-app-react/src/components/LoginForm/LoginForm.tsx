import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./LoginForm.scss"

const LoginForm = () => {
    const [users, setUsers] = useState([]);
    const navigation = useNavigate()

    const getLogin = async () => {

        const response = await fetch(
            "https://63944f1f86829c49e819008c.mockapi.io/api/users"
        );
        const results = (await response.json());
        console.log("email", results[0].email)
        console.log("email", results[0].password)

        setUsers(results)

        if (results) {
            navigation("/movies")
        }

    }


    useEffect(() => {
        getLogin()
    }, [])



    return (
        <>
            <form action="" className="LoginFormContainer">

                <input type="email" name="" id="" />

                <input type="password" name="" id="" />


                <button onClick={() => getLogin()}>Accedi</button>

            </form>
        </>
    )
}

export default LoginForm
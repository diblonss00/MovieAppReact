import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./LoginForm.scss"

export interface User {
    email: string;
    password: string;
    image: string;
}

interface LoginProporm {
    user: User
}



const LoginForm = (props: LoginProporm) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate()

    const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        const login = {
            email: email,
            password: password
        }

        if (login.email === props.user.email && login.password === props.user.password) {

            navigation("/movies")

        }
        else {
            alert("errore")
        }

    }



    return (
        <>
            <div className="container">
                <form action="" onSubmit={submitHandler} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <h1> MyWatchList</h1>

                    <input type="email" name="" id="" value={email} onChange={emailChangeHandler} style={{ marginBottom: "10px" }} />

                    <input type="password" name="" id="" value={password} onChange={passwordChangeHandler} style={{ marginBottom: "10px" }} />


                    <button>Accedi</button>

                </form>
            </div>

        </>
    )
}

export default LoginForm
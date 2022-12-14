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
    const navigation = useNavigate() //cambio pagina

    //prendo i dati del form
    const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }

    //dati singolo input password
    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }

    //dati singolo input email
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const login = {
            email: email,
            password: password
        }

        if (login.email === props.user.email && login.password === props.user.password) { navigation("/movies") }

        else { alert("credenziali errate!") }

    }



    return (
        <>
            <div className="container formCenter">
                <form action="" onSubmit={submitHandler} className="flexColumnCenter">
                    <h1> MyWatchList</h1>

                    <input className="inputForm" type="email" placeholder="mario.rossi@gmail.com" id="" value={email} onChange={emailChangeHandler} style={{ marginBottom: "10px" }} />

                    <input className="inputForm" type="password" name="" placeholder="Your password" id="" value={password} onChange={passwordChangeHandler} style={{ marginBottom: "10px" }} />


                    <button>Accedi</button>

                    <p className="p-white">Non hai un account? Registrati qui</p>
                </form>
            </div>

        </>
    )
}

export default LoginForm
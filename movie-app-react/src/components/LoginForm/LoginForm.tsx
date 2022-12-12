import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./LoginForm.scss"

interface User {
    email: string;
    password: string;
}
interface LoginFormProps {
    user: User
}

const LoginForm = (props: LoginFormProps) => {
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
            <form action="" className={0 == 0 ? "LoginFormContainer" : "cicco"} onSubmit={submitHandler}>

                <input type="email" name="" id="" value={email} onChange={emailChangeHandler} />

                <input type="password" name="" id="" value={password} onChange={passwordChangeHandler} />


                <button>Accedi</button>

            </form>
        </>
    )
}

export default LoginForm
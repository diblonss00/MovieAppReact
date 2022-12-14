import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm"


const Login = () => {

    const [users, setUsers] = useState([]);

    //api login
    const getLogin = async () => {

        const response = await fetch("https://63944f1f86829c49e819008c.mockapi.io/api/users");

        setUsers(await response.json());
    }

    //console.log("email", users)

    useEffect(() => {
        getLogin()
    }, [])

    return (
        <>
            <LoginForm user={users[0]}></LoginForm>
        </>)


}


export default Login
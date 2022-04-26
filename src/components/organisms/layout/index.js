import React, { useState } from 'react';
import Home from '../../../pages/home';
import Login from '../../../pages/login';
import Profile from '../../../pages/profile';
import Header from '../../molecules/header';
import Nav from '../../molecules/navigation';

const Layout = () => {
    const [login, setLogin] = useState(false)
    const [page, setPage] = useState("Login")

    const style = {
        padding: "30px",
        textAlign: "center"
    }

    const handleLoginLogout = () => {
        setLogin(login ? false : true)
    }

    const returnPage = () => {
        document.title = page
        switch (page) {
            case "Home":
                return <Home isLogin={login} />
            case "Profile":
                return <Profile />
            default:
                if (login && page !== "Login") {
                    document.title = "Login"
                    return <Login />
                } else {
                    document.title = "Home"
                    return <Home isLogin={login} />
                }
        }
    }
    return (
        <div>
            <Header />
            <Nav isLogin={login} press={handleLoginLogout} setPage={setPage} />
            <div style={style}>{returnPage()}</div>

        </div>
    );
};

export default Layout;
import React, { useState } from 'react';
import Home from '../../../pages/home';
import Header from '../../molecules/header';
import Nav from '../../molecules/navigation';

const Layout = () => {
    const [login, setLogin] = useState(false)
    const [page, setPage] = useState(Home(login))

    const style = {
        padding: "30px",
        textAlign:"center"
    }

    const handleLoginLogout = () => {
        setLogin(login ? false : true)
    }
    return (
        <div>
            <Header />
            <Nav isLogin={login} press={handleLoginLogout} setPage={setPage} />
            <div style={style}>{page}</div>

        </div>
    );
};

export default Layout;
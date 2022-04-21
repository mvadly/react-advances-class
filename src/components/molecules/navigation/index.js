import React from 'react';
import Link from '../../atoms/link';
import Login from '../../../pages/login'
import Home from '../../../pages/home'
import Profile from '../../../pages/profile'

const Nav = ({ isLogin, press, setPage }) => {
    const listLink = [
        { text: "Home", element:Home(isLogin) },
        { text: "Profile", element:Profile },
        { text: "Login", element: Login, clickable: true },
    ]


    return (
        <ul>
            {listLink.map((val, i) => {
                return (
                    <li key={i}>
                        <Link
                            className={val.class}
                            autoFocus
                            href="#"
                            text={val.text === "Login" && isLogin === true ? "Logout" : val.text}
                            onClick={()=>{
                                if(val.clickable){
                                    press()
                                }
                                setPage(val.element)
                            }}
                        />
                    </li>)
            })}
        </ul>
    );

}

export default Nav;
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { Login } from './_components/Login';
import { LogOut } from './_components/Logout';

export interface IHeaderProps {
    accessToken: string,
}

function Header(props: IHeaderProps) {
    const [theme, setTheme] = useState('darkTheme')
    const [isUserLogin, setUserLogin] = useState(localStorage.getItem('movie-user'))
   

    const userInfo = useSelector((state:RootState) => state.user.userInfo)

    useEffect(() => {
        setUserLogin(localStorage.getItem('movie-user'))
    },[userInfo])
    const renderLogin = () => {
        return isUserLogin
            ? <LogOut theme={theme} />
            : <Login theme={theme} />
    }
    return (

        <div className='container'>
            <nav className="navbar navbar-expand-md">

                <NavLink className="navbar-brand animate__animated animate__fadeInLeftBig" to="">
                    <i className="fa-solid fa-film" style={{ fontSize: "50px" }}></i><h1 className='ml-2 d-inline-block'>CINEMA</h1>
                </NavLink>
                <button
                    style={{ background: 'rgba(255,255,255,0.2)' }}
                    className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item ml-3 animate__animated animate__fadeIn">
                            <NavLink to="/showing" className={({ isActive }) => isActive ? 'bg-primary text-white nav-link p-2' : 'nav-link p-2'} >Phim đang chiếu</NavLink>
                        </li>
                        <li className="nav-item ml-3 animate__animated animate__fadeIn">
                            <NavLink to="/comming-soon" className={({ isActive }) => isActive ? 'bg-primary text-white nav-link p-2' : 'nav-link p-2'} >Phim sắp chiếu</NavLink>
                        </li>
                    </ul>
                    {renderLogin()}
                </div>
            </nav>
        </div>
    );
}
export default Header
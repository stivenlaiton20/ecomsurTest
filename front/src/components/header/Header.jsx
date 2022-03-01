import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai";
import {BiChevronLeft} from "react-icons/bi";


import './header.scss';

import logo from '../../assets/ecomsur-logo.png'

const mainNav = [
    {
        display: "Productos",
        path: "/productos"
    },
    {
        display: "Nosotros",
        path: "/nosotros"
    },
    {
        display: "Contacto",
        path: "/contacto"
    }


]

const Header = () => {

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)


    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink', null)
            }
        })
        return () => {
            window.removeEventListener("scroll", null)
        };
    }, []);
    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/home">
                        <img  src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <AiOutlineMenu />
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <BiChevronLeft />
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <BsSearch />
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <BsCart3 />
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <BsPersonFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

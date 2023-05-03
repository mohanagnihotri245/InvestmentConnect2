import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return() => {
            window.removeEventListener("scroll", isActive);
        }
    }, []);

    const menuToggler = () => {
        open ? setOpen(false) : setOpen(true);
    }
    const currentUser = {
        id : 1,
        username : "Ayush",
        isSeller : true,
    }

    return(
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <Link to = "/" className="logo link">
                    <span className="text">Buckett</span>
                    <span className="dot"> .</span>
                </Link>
                <div className="links">
                    <span>Explore</span>
                    <Link to="/login" className="link">Sign In</Link>
                    {!currentUser?.isSeller && <span>Become Expert</span>}
                    {!currentUser && <Link className="link" to = "/register"><button>Join</button></Link>}
                    {currentUser && (
                        <div className="user" onClick={menuToggler}>
                            <img src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt = "face"/>
                            <span>{currentUser?.username}</span>
                            <div className = {!open ? "close options" : "options"}>
                                {currentUser.isSeller && (
                                    <>
                                        <Link className="link" to = "/myBuckets">My Buckets</Link>
                                        <Link className="link" to = "/add">Create Bucket</Link>
                                    </>
                                )}
                                <Link className="link" to = "/orders">Orders</Link>
                                <Link className="link" to = "/messages">Messages</Link>
                                <Link className="link" to = "/">Logout</Link>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
            {active &&
                <>
                <hr/>
                <div className="menu">
                    <Link className="link menuLink" to="/">
                    Banking
                    </Link>
                    <Link className="link menuLink" to="/">
                    Equity
                    </Link>
                    <Link className="link menuLink" to="/">
                    Options & Futures
                    </Link>
                    <Link className="link menuLink" to="/">
                    Bonds
                    </Link>
                    <Link className="link menuLink" to="/">
                    Gold
                    </Link>
                    <Link className="link menuLink" to="/">
                    Real Estate
                    </Link>
                    <Link className="link menuLink" to="/">
                    Commodity
                    </Link>
                </div>
            </>
            }
        </div>
    )
}

export default Navbar;
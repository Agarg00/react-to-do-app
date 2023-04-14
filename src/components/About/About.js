import React from "react";
import Navbar from "../Nav/Nav";
import ParticlesBg from "particles-bg";
import { NavLink, Outlet } from 'react-router-dom';
import Icon from './icon.png'

const About = () => {
    return (
        <div>
        <ParticlesBg type="cobweb" bg={true} />
        <div className="App">
            <img 
                className="ma2 bg-white" 
                alt="icon" 
                src={Icon} 
                height="50px"
            />
            <h1>About</h1>
        </div>
            <ul className="nav">
                <Navbar />
            </ul>
            <div className="ab">
                <ul className="about_list">
                <li>
                    <NavLink to="about-app">About app</NavLink>
                </li>
                <li>
                    <NavLink to="about-developer">About developer</NavLink>
                </li>
                </ul>
                <Outlet />
            </div>
        </div>
    );
}

export default About;
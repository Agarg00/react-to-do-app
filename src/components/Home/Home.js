import React from "react";
import Hook from '../Hook/Hook'
import BgStyle from "../BgStyle/BgStyle";
import logo from './icons8-clock.gif'
import Nav from '../Nav/Nav'

const Home = () => {
    return (
        <div>
            <div className="App">
                <img className="ma2" alt="icon" src={logo} />
                <h1>TO-DO</h1>
            </div>
            
            <ul className="nav">
                <Nav />
            </ul>
            <div className="pt1 pb2 ml2">
                <BgStyle />
            </div>
            <Hook />
        </div>
    );
}

export default Home;
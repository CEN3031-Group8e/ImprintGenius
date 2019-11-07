import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import { Link } from "react-router-dom"; 

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>

                <Link to={"/pagetwo"}>go to page2</Link>
               
            </header>
        </div>
    );
}

export default Home;

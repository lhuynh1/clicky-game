import React, { Component } from 'react';
import "./NavBar.css";

const NavBar = props => (
            <nav className="navbar navbar fixed top navbar default">
                <ul>
                    <li className="text-left">Dog or food?</li>
                    <li className="text-center guessMsg">{this.state.message}</li>
                    <li className="text-right">Score: {this.state.score} | High score: {this.state.highScore}</li>
                </ul>
            </nav>
);

export default NavBar;
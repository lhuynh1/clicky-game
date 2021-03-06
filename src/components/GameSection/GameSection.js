import React, { Component } from 'react';
import DogCard from "../DogCard";
import img from "../../dog.json";

class GameSection extends Component {
    state = {
        img,
        score: 0,
        highScore: 0,
        msg: "Click a picture to begin!"
    };

    // function running on whether the image was clicked or not
    onClick = (id, clicked) => {
        const changeImg = this.state.img;

        if(clicked) {
            changeImg.forEach((img, index) => {
                changeImg[index].clicked = false;
            });
            return this.setState({
                img: changeImg.sort(() => Math.random() - 0.5),
                msg: "Wrong guess!",
                score: 0
            })
        } else {
            changeImg.forEach((img, index) => {
                if (id === img.id) {
                    changeImg[index].clicked = true;
                }
            });

            const { highScore, score }= this.state;
            const newScore = score + 1;
            const newHighScore = newScore > highScore ? newScore : highScore;
            
            return this.setState({
                img: changeImg.sort(() => Math.random() - 0.5),
                msg: "You got it!",
                score: newScore,
                highScore: newHighScore
            });
        }

    };

    render() {
        return (
        <div className="container-fluid">
            <nav className="navbar navbar fixed top navbar default">
                <ul>
                    <li className="text-center gameMsg">{this.state.msg}</li>
                    <li className="text-right">Score: {this.state.score} | High score: {this.state.highScore}</li>
                </ul>
            </nav>
            
            <div className="container">
                <div className="row">
                {this.state.img.map(img => (
                    <DogCard
                        key={img.id}
                        id={img.id}
                        clicked={img.clicked}
                        image={img.image}
                        onClick={this.onClick}
                    />
                ))}
                </div>
            </div>
        </div>
        )
    }
}

export default GameSection;
import React, { Component } from "react";
import './TileStyle.css';

const images = [
    {
        "id": 1,
        "image": require("./icons/1.png"),
        "click": false
    },

    {
        "id": 2,
        "image": require("./icons/2.png"),
        "click": false
    },
    {
        "id": 3,
        "image": require("./icons/3.png"),
        "click": false
    },
    {

        "id": 4,
        "image": require("./icons/4.png"),
        "click": false
    },
    {
        "id": 5,
        "image": require("./icons/5.png"),
        "click": false
    },
    {
        "id": 6,
        "image": require("./icons/6.png"),
        "click": false
    },
    {
        "id": 7,
        "image": require("./icons/7.png"),
        "click": false
    },
    {
        "id": 8,
        "image": require("./icons/8.png"),
        "click": false
    },
    {
        "id": 9,
        "image": require("./icons/9.png"),
        "click": false
    },
    {
        "id": 10,
        "image": require("./icons/10.png"),
        "click": false
    },
    {
        "id": 11,
        "image": require("./icons/11.png"),
        "click": false
    },
    {
        "id": 12,
        "image": require("./icons/12.png"),
        "click": false
    },

]


class Tile extends React.Component {


    constructor() {
        super()
        this.state = {
            images: images,
            highscore: 0,
            score: 0
        }
    }

    onImageClick = id => {

        for (let i = 0; i < images.length; i++) {
            if (images[i].id === id && images[i].click === false) {
                images[i].click = true;
                this.state.score++; 
            }
            
            else if(images[i].id === id && images[i].click === true){
               if(this.state.highscore < this.state.score){
                   this.state.highscore = this.state.score;
                   this.state.score = 0;
                 for(let i = 0; i < images.length; i++){
                     images[i].click = false;
                 }
               }
               
               else{
                   this.state.score = 0;
                   for(let i = 0; i < images.length; i++){
                    images[i].click = false;
                }
               }
            }
        }
        console.log(images);

        let newArray = images.sort(() => Math.random() - .5);

        this.setState({
            images: newArray
        })
    };





    render() {

        let displayImages = this.state.images.map((eachObj, index) =>
            <img
                onClick={() => this.onImageClick(eachObj.id)}
                key={index}
                alt={index}
                src={eachObj.image}
            />
        )

        return (
            <div>
                This is your highscore! {this.state.highscore}
                <br></br>
                This is your current score {this.state.score}
                <div className="grid-container">
                    {displayImages}

                </div>

            </div>
        );
    }
}





export default Tile;

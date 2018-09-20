import React, { Component } from "react";
import NavBar from '../Navbar';
import './TileStyle.css';

//This is my is array of social network images and states
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

    //I need to make a constructor because each image object in my array needs a state
    constructor() {
        //For some reason I need this keyword everytime I make a constructor?
        super()
        this.state = {
            images: images,
            highscore: 0,
            score: 0
        }
    }

    //On click function with the id of the current div that the user just clicked on
    onImageClick = id => {

        //running through all of my images array
        for (let i = 0; i < images.length; i++) {


            /*
            
            Here I need two different paths of logic. One that decides what to do with an already clicked image, and one to handle
            an image that has not been clicked
            
            */

            //Saying that the image I click on is the one im changing, and checking to make sure that the image hasn't been clicked yet
            if (images[i].id === id && images[i].click === false) {
                images[i].click = true;
                this.state.score++;
            }
            //Saying that the image I click on is the one im changing, and checking to make sure that the image has already been clicked on.
            //This logic basically handles resetting the game and changing the game highscore
            else if (images[i].id === id && images[i].click === true) {
                //This logic checks to see if the current score is my highestscore or not
                if (this.state.highscore < this.state.score) {
                    //Changing the high score
                    this.state.highscore = this.state.score;
                    //resetting the game's score
                    this.state.score = 0;
                    //Changing all of the images back to false
                    for (let i = 0; i < images.length; i++) {
                        images[i].click = false;
                    }
                }

                //This logic handles resetting the game if the score is not greater than the highscore
                else {
                    this.state.score = 0;
                    for (let i = 0; i < images.length; i++) {
                        images[i].click = false;
                    }
                }
            }
        }
        console.log(images);


//This function makes a new array for my images to randomly be put into
        let newArray = images.sort(() => Math.random() - .5);

        //Changing the images array in my state
        this.setState({
            images: newArray
        })
    };





    render() {

        //This function generates all of my images. It reads the images array, and pushes them out.
        //Also, index is not getting information from anywhere. eachObj is getting information from 
        //the images array, but index is just a blank item. If an empty variable is passed into a map() method
        //it will return that variable as a number, counting up from each obj returned. We use this as our key
        //because React needs a key number. 
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

                {/* <div className="scoreWrapper">
                <div className="highscore">This is your highscore! {this.state.highscore}</div>
                <div className="score">This is your current score {this.state.score}</div>
              
                </div> */}
                
                <div className="grid-container">
                    {displayImages}

                </div>

            </div>
        );
    }
}





export default Tile;

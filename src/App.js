import React, { Component } from 'react';
import Navbar from './componets/Navbar';
import Container from './componets/Container';
import images from './data.json';
import Tiles from './componets/Tile';


class App extends Component {

  state = {
    images: images,
    highscore: 0,
    score: 0
  }



  onImageClick = id => {
    for (let i = 0; i < images.length; i++) {
      if (images[i].id === id && images[i].click === false) {
        images[i].click = true;
        this.state.score++;
      }

      else if (images[i].id === id && images[i].click === true) {
        if (this.state.highscore < this.state.score) {
          this.state.highscore = this.state.score;
          this.state.score = 0;
          for (let i = 0; i < images.length; i++) {
            images[i].click = false;
          }
        }


        else {
          this.state.score = 0;
          for (let i = 0; i < images.length; i++) {
            images[i].click = false;
          }
        }
      }
    }

    let newArray = images.sort(() => Math.random() - .5);

    this.setState({
      images: newArray
    })
  };




  render() {
    return (

      <div>
        <Navbar 
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Container>
          {this.state.images.map(item => {
            return (
              <Tiles
                src={item.image}
                id= {item.id}
                onImageClick={this.onImageClick}
              />
            );

          })}

        </Container>

      </div>




    );
  }

}







export default App;

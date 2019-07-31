import React from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './Assets/images/img1.jpg';
import img2 from './Assets/images/img2.jpg';
import img3 from './Assets/images/img3.jpg';
import img4 from './Assets/images/img4.jpg';
import img5 from './Assets/images/img5.jpg';
import img6 from './Assets/images/img6.jpg';
import img7 from './Assets/images/img7.jpg';
import img8 from './Assets/images/img8.jpg';
import img9 from './Assets/images/img9.jpg';
import img10 from './Assets/images/img10.jpg';
import img11 from './Assets/images/img11.jpg';
import img12 from './Assets/images/img12.jpg';
import img13 from './Assets/images/img13.jpg';
import img14 from './Assets/images/img14.jpg';
import img15 from './Assets/images/img15.jpg';
import img16 from './Assets/images/img16.jpg';

const imgArray = [
  {
    id: 1,
    url: img1,
    clicked: false
  },
  {
    id: 2,
    url: img2,
    clicked: false
  },
  {
    id: 3,
    url: img3,
    clicked: false
  },
  {
    id: 4,
    url: img4,
    clicked: false
  },
  {
    id: 5,
    url: img5,
    clicked: false
  },
  {
    id: 6,
    url: img6,
    clicked: false
  },
  {
    id: 7,
    url: img7,
    clicked: false
  },
  {
    id: 8,
    url: img8,
    clicked: false
  },
  {
    id: 9,
    url: img9,
    clicked: false
  },
  {
    id: 10,
    url: img10,
    clicked: false
  },
  {
    id: 11,
    url: img11,
    clicked: false
  },
  {
    id: 12,
    url: img12,
    clicked: false
  },
  {
    id: 13,
    url: img13,
    clicked: false
  },
  {
    id: 14,
    url: img14,
    clicked: false
  },
  {
    id: 15,
    url: img15,
    clicked: false
  },
  {
    id: 16,
    url: img16,
    clicked: false
  },

]
class App extends React.Component {
  // state is an object for storing data in class.
  state = {
    images: imgArray,
    score: 0
  }
  // function for shuffling an array.
  shuffle = (item) => {

    // is that one clicked
    // if it's not,
    // mark it as clicked and continue
    // otherwise, we lost

    let a = this.state.images.map(m => m);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    this.setState(
      {
        images: a,
      })
    if (item.clicked === false) {
      item.clicked = true;
      this.state.score = this.state.score + 1;
    } else {
      item.clicked = false;
      this.state.score = 0;
      alert("You Lose");
    };
    console.log(item.clicked);
    console.log(this.state.score);
  }

  //render method displays DOM by returning elements
  render() {
    return (
      <div className="App">
        <div id="head">CLICKY GAME <div id="score">Score: {this.state.score}/16</div></div>
        <div id="stuff">
          <div id="grid">
            {
              this.state.images.map(e =>
                <img
                  // onClick={() => this.click()}
                  onClick={() => this.shuffle(e)}
                  // have to give element unique id and name to work dynamically.
                  key={e.id}
                  src={e.url}
                  className="img"
                />
              )
            }
          </div>
        </div>
        <footer>Click each image only once</footer>
      </div>
    );
  }
}
export default App;

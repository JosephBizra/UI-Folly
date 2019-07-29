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
    url: img1
  },
  {
    id: 2,
    url: img2
  },
  {
    id: 3,
    url: img3
  },
  {
    id: 4,
    url: img4
  },
  {
    id: 5,
    url: img5
  },
  {
    id: 6,
    url: img6
  },
  {
    id: 7,
    url: img7
  },
  {
    id: 8,
    url: img8
  },
  {
    id: 9,
    url: img9
  },
  {
    id: 10,
    url: img10
  },
  {
    id: 11,
    url: img11
  },
  {
    id: 12,
    url: img12
  },
  {
    id: 13,
    url: img13
  },
  {
    id: 14,
    url: img14
  },
  {
    id: 15,
    url: img15
  },
  {
    id: 16,
    url: img16
  },

]
class App extends React.Component {
  // state is an object for storing data in class.
  state = {
    images: imgArray
  }
  // function for shuffling an array.
  shuffle = () =>{
    let a = this.state.images;
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  this.setState({images: a});
  }
  // click = () =>{
  //   let clicked = false; 
  //   if (clicked = false){
  //     clicked = true;
  //   } else{
  //     clicked = false;
  //   }
  // }
  //render method displays DOM by returning elements
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to joseph.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          {
            this.state.images.map(e =>
              <img 
                // onClick={() => this.click()}
                onClick={() => this.shuffle()}
                // have to give element unique id and name to work dynamically.
                key={e.id} 
                src={e.url} 
                className="img" 
              />
            )
          }

        </header>
      </div>
    );
  }
}
export default App;

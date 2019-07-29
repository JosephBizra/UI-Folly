import React from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './Assets/images/img1.jpg';
import img2 from './Assets/images/img2.jpg';
import img3 from './Assets/images/img3.jpg';

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

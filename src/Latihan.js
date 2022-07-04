import React, {Component} from 'react';
import './Latihan.css';

class Main extends Component{
  constructor(){
    super();
    this.myRef = React.createRef();
  }
  componentDidMount(){
    this.myRef.current.style.height='100vh';
    this.myRef.current.style.width='100%';
    
  }
  setBackground(bgColor, txtColor){
    this.myRef.current.style.background=bgColor;
    this.myRef.current.style.color=txtColor;
  }
  render(){
    return(
      <div ref={this.myRef}>
        <p style={{marginTop:'0px'}}>Belajar pengembangan aplikasi web dengan Reactjs dengan topik Router dan Refs.</p>
        <button onClick={this.setBackground.bind(this,'white','black')}>WHITE</button>
        <button onClick={this.setBackground.bind(this,'red','white')}>RED</button>
        <button onClick={this.setBackground.bind(this,'green','white')}>GREEN</button>
        <button onClick={this.setBackground.bind(this,'blue','white')}>BLUE</button>
        <footer>&copy; 192110975 - Mhd. Azhar (Latihan 6.6 Router dan Refs)</footer>
      </div>
    )
  }
}
export default Main;














//Default React.js
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
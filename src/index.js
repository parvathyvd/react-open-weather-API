import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search';
import Searchresult from './components/searchResult'

const apiKey = '38dd5648930ac0da8d0c6d4d20957fc4';


class Layout extends Component{
  constructor(props){
    super(props);
      this.state = {
            city : "london",
            description: "",
      }
  }

  componentDidMount(){
    this.grabweather(this.state.city);
  }

  grabweather(city){
      fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&q=${city}`)
      .then(res => res.json())
      .then(data => this.setState({
        description : data.weather[0].description
  }));
  }

  inputValue(city){
    this.setState({city})
    this.grabweather(city);
  }

 

  render(){
    return(
      <div>
        <h1>This is the weather report for {this.state.city}</h1>
        <p>{this.state.description}</p>
        <input value={this.state.city} onChange={event => this.inputValue(event.target.value)}/>
      </div>
    )
  }
  
}

ReactDOM.render(<Layout />, document.querySelector('.container'));

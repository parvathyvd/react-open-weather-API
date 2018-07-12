import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Searchresult from './searchResult'


class Search extends Component{
        constructor(props){
            super(props);
            this.state = { city : 'san franscisco'}
        }

        render(){
        return(
            <div>
            <input type="text" value= {this.state.city}
            onChange={this.onInputChange} />
            <Searchresult searchValue = {this.state.city} />
            </div>
        )
        }

        onInputChange(event){
            return this.setState({ city : event.target.value})
        }
    }


export default Search;




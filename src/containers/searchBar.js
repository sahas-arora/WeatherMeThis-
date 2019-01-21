

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { inputValue: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onInputChange(event){
    this.setState({ inputValue: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();

    //because we binded our action creator fetchWeather to dispatch,
    //and then mapping it to props gives us access to the function
    //this.props.fetchWeather like we have below.


    this.props.fetchWeather(this.state.inputValue);
    this.setState({inputValue: ''});
  }



  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
    </form>
  );
  }
}


let mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//Whenever we need to map our dispatch to the prop,
//the mapDispatchToProps arguement always comes as the second argument.
//Since we don't have a mapStateToProp function here (which was the first argument in the previous web app),
//we pass in null as the first arguement.
export default connect(null, mapDispatchToProps)(SearchBar);

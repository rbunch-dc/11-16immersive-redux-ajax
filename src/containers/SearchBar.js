import React, { Component } from 'react';
import FetchWeather from '../actions/FetchWeatherAction';
import FetchMovie from '../actions/FetchMovieAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: '',
            movieSearch: ''
        }
        this.changeZipCode = this.changeZipCode.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.getMovie = this.getMovie.bind(this);
        this.changeMovie = this.changeMovie.bind(this);
    }

    getMovie(event){
        event.preventDefault()
        this.props.FetchMovie(this.state.movieSearch)
    }

    getWeather(event){
        event.preventDefault()
        this.props.FetchWeather(this.state.zipCode);
    }

    changeMovie(event){
        this.setState({
            movieSearch: event.target.value
        })
    }

    changeZipCode(event){
        // console.log(event.target.value)
        this.setState({
            zipCode: event.target.value
        });
    }

    render() {
        console.log(this.props)
        if(this.props.weatherData == null){
            var weatherData = "";    
        }else{
            var weatherData = this.props.weatherData.name;    
        }
        if(this.props.movieData == null){
            var movieData = "";    
        }else{
            var movieData = this.props.movieData.poster_path;    
        }        
        return (
            <div>
                <form onSubmit={this.getWeather}>  
                    <input placeholder="Enter Zip Code" value={this.state.zipCode} onChange={this.changeZipCode} />
                    <button type="submit" className="btn btn-primary">Get the weather!</button>
                </form>
                {weatherData}
                <form onSubmit={this.getMovie}>  
                    <input placeholder="Enter a movie name" value={this.state.movieSearch} onChange={this.changeMovie} />
                    <button type="submit" className="btn btn-primary">Get the Movies!</button>
                </form>
                {movieData}
            </div>

        );
    }
}

function mapStateToProps(state){
    return{
        weatherData: state.weather
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        FetchWeather:FetchWeather,
        FetchMovie:FetchMovie
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

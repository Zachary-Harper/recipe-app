import React, { Component } from 'react';
import axios from 'axios';
import RecipeList from '../RecipeList/RecipeList';
import Header from '../Header/Header';

class RecipeSearcher extends Component {

    constructor(props) {
        super(props);
        this.state = { recipes: [] }
    }

    componentDidMount() {
        this.getRandomRecipe();
    }

    getRandomRecipe = () => {

        const _this = this;

        axios({
            /* We can configure everything we need to about the HTTP request in here */
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/random.php'
        })
        .then(function(response) {
            _this.setState({ recipes: response.data.meals || [] });   
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    getRecipeByName = (name) => {

        const _this = this;

        axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params: {
                s: name
            }
        })
        .then(function(response) {
            _this.setState({ recipes: response.data.meals || [] });
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    //Create a function called getRecipesByLetter that takes in a letter as a parameter. This should carry out the proper Axios call to the database. You will need to pass in the letter as the param f in the call.
    getRecipesByLetter = (letter) => {

        const _this = this;

        axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php',
            params: {
                f: letter
            }
        })
        .then(function(response) {
            _this.setState({ recipes: response.data.meals || [] });
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Header 
                    randomRecipeHandler={this.getRandomRecipe}
                    recipesByLetterHandler={this.getRecipesByLetter}
                    recipesByNameHandler={this.getRecipeByName}
                />
                <RecipeList recipes={this.state.recipes} />
            </div>
        );
    }
}

export default RecipeSearcher;
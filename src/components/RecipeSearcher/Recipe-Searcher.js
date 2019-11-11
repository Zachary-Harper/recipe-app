import React, { Component } from "react";
import axios from 'axios';



class RecipeSearcher extends Component {

    getRandomRecipe = () => {
        axios({
            /* We can configure everything we need to about the http request in here */
            method: "GET",
            url: "https://www.themealdb.com/api/json/v1/1/random.php"
            
        })

            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
            console.log(error )
        })
    }

    render() {
        return (
            <div>
                <h1>
                    SHWOOP
                </h1>
            </div>
        )
    }
}

export default RecipeSearcher;
import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { textFieldValue: '' }

        /* Binds the value of 'this' in the current context as the 'this' inside of the handleChange function */
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ textFieldValue: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.recipesByNameHandler(this.state.textFieldValue);
        this.setState({ textFieldValue: '' });
    }

    generateLetterButtons() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
            <button key={letter} onClick={() => this.props.recipesByLetterHandler(letter)}>
                {letter}
            </button>
        ));
    }

    render() {
        return (
            <div className="App-header">
                <h1>Recipe Finder</h1>
                <p className="byLetter">Get Recipes By Letter</p>
                {this.generateLetterButtons()}
                <p>Get Recipes By Keyword</p>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.textFieldValue} onChange={this.handleChange} />
                    <input type='submit' value='Submit' />
                </form>
                <p>Get Random Recipe</p>
                <button onClick={() => this.props.randomRecipeHandler()}>Submit</button>
            </div>
        );
    }
}

export default Header;
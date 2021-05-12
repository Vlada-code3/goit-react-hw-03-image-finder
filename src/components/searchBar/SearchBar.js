import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchBar extends Component {

    // static PropTypes = {
    //     onSubmit: PropTypes.func.isRequired
    // }

    state = {
        query: ''
    };
    
    handleChange = e => {
        this.setState({ query: e.currentTarget.value });

    };
    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    }



    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.query}
                        name="query"
                    />
                </form>
            </header>
        );
    }
}

export default SearchBar;
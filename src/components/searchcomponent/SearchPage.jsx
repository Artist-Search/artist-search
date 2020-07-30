import React, { Component }from 'react';
import SearchForm from './SearchForm';
import ArtistResults from '../display/ArtistSearchResults';
import { getArtists } from '../../services/getArtists';


export default class SearchPage extends
  Component {
  state = {
    searchQuery: '',
    searchResults: []
  }


  handleChange = ({ target }) => {
    this.setState({ [target.searchQuery]: target.value })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { searchQuery } = this.state;
    return getArtists(searchQuery)
      .then(searchResults => this.setState([searchResults]))
  }



  render() {
    const { searchQuery, searchResults } = this.state;
    return (
      <>
        {/* input, button and pagination on this page */}
        <SearchForm onChange={this.handleChange} onSubmit={this.handleSubmit} searchQuery={searchQuery} />
        

      </ >
    )
  }
}





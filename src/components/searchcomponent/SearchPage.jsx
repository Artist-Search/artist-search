import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ArtistSearchResults from '../display/ArtistSearchResults';
import { getArtists } from '../../services/getArtists';


export default class SearchPage extends Component {
  state = {
    searchQuery: '',
    searchResults: []
  }

  handleChange = ({ target }) => {
    this.setState({ searchQuery: target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { searchQuery } = this.state;
    return getArtists(searchQuery)
      .then(searchResults => this.setState(state => ({
        ...state,
        searchResults
      })));
    // .then(searchResults => searchResults.map(result => ({
    //   count: result.count, 
    //   offset: result.offset,
    //   artists: result.artists
    // })));
  }


  render() {
    const { searchQuery, searchResults } = this.state;
    const { count, offset, artists } = this.state.searchResults;

    console.log(artists);
    console.log(offset);
    console.log(count);
    
    return (
      <>

        <SearchForm onChange={this.handleChange} onSubmit={this.handleSubmit} searchQuery={searchQuery} />


        
        <ArtistSearchResults artists={artists} count={count} offset={offset}/>
        

      </ >
    );
  }
}





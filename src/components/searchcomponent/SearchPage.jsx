import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ArtistSearchResults from '../display/search/ArtistSearchResults';
import Pagination from '../pagination/Pagination';
import { getArtists } from '../../services/getArtists';

export default class SearchPage extends Component {
  state = {
    searchQuery: '',
    searchResults: {
      count: 0,
      artists: []
    },
    offset: 0
  }

  prevPage = () => {
    const offset = this.state.offset - 25;
    return getArtists(this.state.searchQuery, offset)
      .then(searchResults => this.setState(state => ({
        ...state,
        searchResults,
        offset
      })));
  }

  nextPage = () => {
    const offset = this.state.offset + 25;
    return getArtists(this.state.searchQuery, offset)
      .then(searchResults => this.setState(state => ({
        ...state,
        searchResults,
        offset
      })));
  }

  handleChange = ({ target }) => {
    this.setState({ searchQuery: target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { searchQuery } = this.state;
    return getArtists(searchQuery, this.offset)
      .then(searchResults => this.setState(state => ({
        ...state,
        searchResults
      })));
  }

  render() {
    const { searchQuery } = this.state;
    const { count, offset, artists } = this.state.searchResults;
    
    return (
      <>
        <SearchForm onChange={this.handleChange} onSubmit={this.handleSubmit} searchQuery={searchQuery} />

        <Pagination count={count} offset={offset} prevPage={this.prevPage} nextPage={this.nextPage} />
        
        <ArtistSearchResults artists={artists} />
      </ >
    );
  }
}

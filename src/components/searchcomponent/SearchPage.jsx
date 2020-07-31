import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ArtistSearchResults from '../display/ArtistSearchResults';
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

  prevPage = () => this.setState(state => ({ offset: state.offset - 25 }))

  nextPage = () => this.setState(state => ({ offset: state.offset + 25 }))

  handleChange = ({ target }) => {
    this.setState({ searchQuery: target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { searchQuery } = this.state;
    return getArtists(searchQuery, this.offset)
      // .find(this.state.count)
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

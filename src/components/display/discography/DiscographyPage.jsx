import React, { Component } from 'react';
import DiscographyResults from '../discography/DiscographyResults';
import Pagination from '../pagination/Pagination';
import { getOneArtist } from '../services/getArtists';

export default class DiscographyPage extends Component {
  // state = {
  //   artistName: '',
  //   albums: '',
  //   offset: 0
  // }

  // prevPage = () => {
  //   const offset = this.state.offset - 25;
  //   return getOneArtist(this.state.searchQuery, offset)
  //     .then(searchResults => this.setState(state => ({
  //       ...state,
  //       artistName,
  //       albums,
  //       offset
  //     })));
  // }

  // nextPage = () => {
  //   const offset = this.state.offset + 25;
  //   return getOneArtist(this.state.searchQuery, offset)
  //     .then(searchResults => this.setState(state => ({
  //       ...state,
  //       artistName,
  //       albums,
  //       offset
  //     })));
  // }

  // render() {
  //   const { artistName } = this.state;
  //   const { albums } = this.state;

  //   return (
  //     <>
  //       <Pagination count={count} offset={offset} prevPage={this.prevPage} nextPage={this.nextPage} />

  //       <DiscographyResults id={id} />
  //     </>
  //   );
  // }
}

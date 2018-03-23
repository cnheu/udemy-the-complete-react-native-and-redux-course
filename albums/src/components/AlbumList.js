import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // initial and empty state for AlbumList
  state = { albums: [] };

  // componentWillMount is being deprecated
  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // setState is a React function that updates the component state
      // always modify states using setState
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;

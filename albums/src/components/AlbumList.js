import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


// AlbumDetail is a class-based component, which stores component level state and lifecycle methods
class AlbumList extends Component {

  // initial and empty state for AlbumList
  state = { albums: [] };

  // componentWillMount is being deprecated
  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // setState is a React function that updates the component state
      // always modify states using setState
      // NEVER accept the state directly, use React's state controls
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    // Map over the list of items, and for each album retrieved, we display
    // on AlbumDetail component.
    // We pass information to the child via props: key and album
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

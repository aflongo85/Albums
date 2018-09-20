// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


// type Props = {
//   textStyle?: any,
//   buttonText: string,
//   onPress: any
// };

// type State = {};

class AlbumList extends Component {

  state = {
    albums: []
  };

  componentWillMount() {
    console.log('componentWillMount called');
    //debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {
      console.log(response);
      this.setState({ albums: response.data });
    });
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    const { textStyle, viewStyle } = styles; 
    console.log(this.state);
    return (
      <View style={viewStyle}>
        {this.renderAlbums()}
      </View>
    );
  } 
}

const styles = {
  viewStyle: {
    backgroundColor: 'aqua',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 150,
    paddingTop: 1,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
};

export default AlbumList;

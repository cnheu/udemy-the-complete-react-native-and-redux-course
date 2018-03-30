import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    // console.log('in renderRow');
    return <ListItem library={library} />;
    // return <View />
  }

  render() {
    // console.log(this.props);
    // console.log('hello');
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

// purpose of this function, take global state variable from the Redux Store
// then the state will be mapped to props that can be used by React components
const mapStateToProps = state => {
  // console.log(state);
  return { libraries: state.libraries };
};

// syntax calls connect(), gets invoked, and returns a function
// returned function is called with LibraryList
// just a weird fancy convention of redux
// connect helper will get us access to the state in the Provider

export default connect(mapStateToProps)(LibraryList);

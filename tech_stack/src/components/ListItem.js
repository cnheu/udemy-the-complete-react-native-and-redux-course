import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
      LayoutAnimation.spring();
  }

  renderDescription() {
    const { descriptionStyle } = styles;
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={descriptionStyle}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    console.log(this.props);

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.selectLibrary(id);
        }}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  descriptionStyle: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 15,
  }
};

// note: ownProps is a conventional name, and it is === this.props
// remove the logic from component
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

// null for first argument as we don't want to mapStateToProps
// second is the actions object, first mutating Action Creator into something special
// where whenever it's called the returned "action" will be dispatched to the
// Redux Store. The second thing is that it passes the output to the ListItem
// as props
export default connect(mapStateToProps, actions)(ListItem);

import React from 'react';
import { View } from 'react-native';

const Card = (props) =>
  (
    // When AlbumDetail (which is wrapped by Card.js) is called
    // Any children within the element <Card> will get passed straight
    // into the component through props.children

    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );


const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
};

// Make the component available to other parts of the app. Not usual default

export { Card };

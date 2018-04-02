import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  // user array to override
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',

  }
};

// Make the component available to other parts of the app. Not usual default

export { CardSection };

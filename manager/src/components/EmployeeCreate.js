import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EmployeeCreate extends Component {
  render() {
    return (
      <View style={{ paddingTop: 64, backgroundColor: '#f7f7f7', flex: 1 }}>
        <Text>Add Employee</Text>
      </View>
    );
  }
}

export default EmployeeCreate;

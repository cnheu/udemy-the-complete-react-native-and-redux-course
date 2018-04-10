import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    // Test what ListItem.js is passing into it
    // console.log(this.props.employee);

    return (
      <View style={{ paddingTop: 64, backgroundColor: '#f7f7f7', flex: 1 }}>
        <Card>
          <EmployeeForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Confirm
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate);

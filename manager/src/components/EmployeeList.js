import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  //  gets called when component renders
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  // gets called whenever new props come to the component (when state changes)
  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    // console.log('in render row');
    // console.log(employee);
    return <ListItem employee={employee} />;
  }

  render() {
    console.log(this.props);

    return (
      <View style={{ paddingTop: 64, backgroundColor: '#f7f7f7', flex: 1 }}>
        <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  // _.map for each value, run this fat-arrow function
  // end result: { shift: 'Monday', name: 'S', id: '12313sada' }
  // takes all returned objects (user models) into an array called employees
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="04XX-XXX-XXX"
          />
        </CardSection>

        <CardSection>
          // TODO: add shift dropdown? field
        </CardSection>

        <CardSection>
          <Button>
            Confirm
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;

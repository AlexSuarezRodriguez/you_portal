/* eslint-disable react/prefer-stateless-function */
import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

export default class FormComponent extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={7} />
      </Grid>
    );
  }
}

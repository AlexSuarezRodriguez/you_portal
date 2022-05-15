/* eslint-disable no-return-assign */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
import { Box, Grid, Paper, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Styles } from '../common/styles.elements';
import { renderInputText, renderText } from '../common/displayComponents';

class FormComponent extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    data: {
      firstName: '',
    },
    // eslint-disable-next-line react/no-unused-state
    errors: {},
  };

  render() {
    const { classes } = this.props;

    const handleOnChange = ({ target }) => {
      const { data, errors } = this.state;
      function targetError() {
        return (target.value.length <= 3
          ? (errors[target.name] = `${target.name} debe contener mas de 3 caracteres`)
          : (errors[target.name] = ''));
      }
      targetError();
      data[target.name] = target.value;
      this.setState({ data, errors });
    };
    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <Box p={2} mb={2} component={Paper}>
            {renderText({ label: 'Stepper component' })}
          </Box>
          <Box component={Paper}>
            <form className={classes.form}>
              {renderText({ label: 'Form component step 1' })}
              <Box>
                {renderInputText({
                  label: ' First name',
                  name: 'firstName',
                  state: this.state,
                  handleOnChange,
                })}
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
FormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(FormComponent);

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Education({ formation }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div style={{ margin: '0 auto' }}>
      <Box sx={{ maxWidth: 600 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {formation.map((step, index) => (
            <Step key={step.institute}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption" />
                  ) : null
                }
              >
                <p style={{ color: 'white' }}>{step.institute}</p>
              </StepLabel>
              <StepContent>
                <Typography><p style={{ color: 'white' }}>{step.achievements}</p></Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    {
                    activeStep === formation.length - 1
                      ? (
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      )
                      : (
                        <>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index === formation.length - 1
                              ? null
                              : 'Continue'}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Back
                          </Button>
                        </>
                      )
                  }
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>

    </div>
  );
}
Education.propTypes = {
  formation: PropTypes.arrayOf(Object),
};

Education.defaultProps = {
  formation: [],
};

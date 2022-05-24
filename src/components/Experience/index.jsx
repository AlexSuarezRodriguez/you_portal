import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Experience({ experienceJob }) {
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
          {experienceJob.map((step, index) => (
            <Step key={step.business}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption" />
                  ) : null
                }
              >
                <p style={{ color: 'white' }}>{step.business}</p>
              </StepLabel>
              <StepContent>
                <Typography><p style={{ color: 'white' }}>{step.descriptionJob}</p></Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    {
                    activeStep === experienceJob.length - 1
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
                            {index === experienceJob.length - 1
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

Experience.propTypes = {
  experienceJob: PropTypes.arrayOf(Object),
};

Experience.defaultProps = {
  experienceJob: [],
};

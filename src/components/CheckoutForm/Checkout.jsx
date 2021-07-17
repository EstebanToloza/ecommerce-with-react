import { Paper, Stepper, Typography, Step, StepLabel } from '@material-ui/core';
import { useState } from 'react';
import useStyles from './styles.jsx';
import AddressForm from  './AddressForm';
import PaymentForm from './PaymentForm';

const Checkout = () => {
  const classes = useStyles();
  const steps = ["Shipping address", "Payment details"];
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep} /> : <PaymentForm />

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map(step => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Form />
        </Paper>
      </main>
    </>
  )
}

export default Checkout

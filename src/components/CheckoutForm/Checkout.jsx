import { Paper, Stepper, Typography, Step, StepLabel } from '@material-ui/core';
import useStyles from './styles.jsx';

const Checkout = () => {
  const classes = useStyles();
  const steps = ["Shipping address", "Payment details"];

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
        </Paper>
      </main>
    </>
  )
}

export default Checkout

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function EventsAll() {
  const classes = useStyles();
  return (
    <React.Fragment>
     All events today
      <Typography component="p" variant="h3">
        6
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 28 October, 2021
      </Typography>
    </React.Fragment>
  );
}

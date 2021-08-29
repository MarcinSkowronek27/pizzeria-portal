import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  context: {
    flex: 1,
  },
});

export default function ReservationsAll() {
  const classes = useStyles();
  return (
    <React.Fragment>
      All reservations today
      <Typography component="p" variant="h3">
        11
      </Typography>
      <Typography color="textSecondary" className={classes.context}>
        on 28 October, 2021
      </Typography>
    </React.Fragment>
  );
}

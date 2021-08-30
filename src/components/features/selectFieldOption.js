import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const dishes = [
  {
    id: '1',
    label: 'with sauce',
  },
  {
    id: '2',
    label: 'without sugar',
  },
  {
    id: '3',
    label: 'gluten free',
  },
  {
    id: '4',
    label: 'extra olive oil',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function OptionTextFields() {
  const classes = useStyles();
  // const [dish, setDishes] = React.useState('EUR');

  // const handleChange = (event) => {
  //   setDishes(event.target.value);
  // };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-options"
          select
          label="Select"
          // value={dish}
          // onChange={handleChange}
          helperText="Please select your options"
        >
          {dishes.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}


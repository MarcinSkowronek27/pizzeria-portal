import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const dishes = [
  {
    id: '1',
    label: 'Water',
  },
  {
    id: '2',
    label: 'Coke',
  },
  {
    id: '3',
    label: 'Fanta',
  },
  {
    id: '4',
    label: 'Orange Juice',
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

export default function DrinksTextFields() {
  const classes = useStyles();
  // const [dish, setDishes] = React.useState('EUR');

  // const handleChange = (event) => {
  //   setDishes(event.target.value);
  // };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-drinks"
          select
          label="Select"
          // value={dish}
          // onChange={handleChange}
          helperText="Please select your drink"
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


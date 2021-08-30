import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Event Data
function createData(
  id,
  date,
  name,
  table,
  hour,
  paymentMethod,
  amount
) {
  return { id, date, name, table, hour, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '29 Oct, 2021',
    'Angelina Jolie',
    '2',
    '14:00',
    'VISA ⠀•••• 2704',
    820.00
  ),
  createData(
    1,
    '29 Oct, 2021',
    'George Bush',
    '5',
    '16:00',
    'MC ⠀•••• 5614',
    562.81
  ),
  createData(
    2,
    '29 Oct, 2021',
    'Bruce Willis',
    '2',
    '20:30',
    'CASH',
    340.20
  ),
  createData(
    3,
    '29 Oct, 2021',
    'Jackie Chan',
    '3',
    '20:30',
    'VISA ⠀•••• 6721',
    448.98
  ),
];

// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Events() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h3>Events</h3>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Table No.</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.table}</TableCell>
              <TableCell>{row.hour}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href='http://localhost:3000/panel/tables'>
          See more events
        </Link>
      </div>
    </React.Fragment>
  );
}

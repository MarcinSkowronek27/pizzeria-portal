import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Order Data
function createData(
  id,
  date,
  name,
  deliverTo,
  table,
  hour,
  paymentMethod,
  amount
) {
  return { id, date, name, deliverTo, table, hour, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '29 Oct, 2021',
    'Zygmunt III Waza',
    'ON SITE',
    '2',
    '12:00',
    'CASH',
    125.34
  ),
  createData(
    1,
    '29 Oct, 2021',
    'Królowa Bona',
    'Kinder Strasse, DE',
    '',
    '12:00',
    'VISA ⠀•••• 5919',
    78.85
  ),
  createData(
    2,
    '29 Oct, 2021',
    'Adam Malysz',
    'Lotnicza 5, PL',
    '',
    '13:30',
    'VISA ⠀•••• 3349',
    128.50
  ),
  createData(
    3,
    '29 Oct, 2021',
    'John White',
    'ON SITE',
    '6',
    '15:00',
    'VISA ⠀•••• 5919',
    95.39
  ),
  createData(
    4,
    '29 Oct, 2021',
    'Jimmy Bow',
    'ON SITE',
    '3',
    '17:00',
    'CASH',
    40.19
  ),
  createData(
    5,
    '29 Oct, 2021',
    'Marek Konrad',
    'Ogrodowa 5, CA',
    '',
    '18:00',
    'MASTER ⠀•••• 4836',
    131.20
  ),
  createData(
    6,
    '29 Oct, 2021',
    'Krzysztof Ibisz',
    'ON SITE',
    '2',
    '22:00',
    'VISA ⠀•••• 5919',
    195.85
  ),
  createData(
    7,
    '29 Oct, 2021',
    'Michael Jackson',
    'Bronx, NY',
    '',
    '23:30',
    'MC ⠀•••• 5789',
    203.12
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

export default function Reservations() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h3>Reservations</h3>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Deliver To</TableCell>
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
              <TableCell>{row.deliverTo}</TableCell>
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
          See more reservations
        </Link>
      </div>
    </React.Fragment>
  );
}

import React from 'react';
import styles from './TablesBookingNew.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DatePickers from '../../features/DatePicker';

function createData(info, details) {
  return { info, details };
}

const rows = [
  createData('Date:', <DatePickers />),
];

const TablesBookingNew = () => (
  <div className={styles.component}>
    <h2>
      Reservation of table:
    </h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.info}>
              <TableCell component="th" scope="row">
                {row.info}
              </TableCell>
              <TableCell>
                {row.details}
              </TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button align="right" color="primary"
        variant="outlined">Add
      </Button>
    </Paper>
  </div>
);

export default TablesBookingNew;

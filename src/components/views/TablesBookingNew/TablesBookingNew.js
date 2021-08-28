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
import BasicTextFields from '../../features/TextField';
import BasicNumberFields from '../../features/numberField';
import MultilineTextFields from '../../features/selectFieldDish';
import DrinksTextFields from '../../features/selectFieldDrinks';
import Container from '@material-ui/core/Container';

function createData(info, details) {
  return { info, details };
}

const rows = [
  createData('Date and Time:', <DatePickers />),
  createData('Name:', <BasicTextFields />),
  createData('Table No:', <BasicNumberFields />),
  createData('Choose a dish:', <MultilineTextFields />),
  createData('Choose a drink:', <DrinksTextFields />),
  createData('Number of people:', <BasicNumberFields />),
  createData('Deliver to (if delivery):', <BasicTextFields />),
];

const TablesBookingNew = () => (
  <div className={styles.component}>
    <h2>
      Reservation of table:
    </h2>
    <Paper className={styles.component}>
      <Table >
        <TableHead >
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.info}>
              <TableCell>
                {row.info}
              </TableCell>
              <TableCell className={styles.table}>
                {row.details}
              </TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Container className={styles.button}>
        <Button  color="primary"
          variant="outlined">Add Reservation
        </Button>
      </Container>
    </Paper>
  </div>
);

export default TablesBookingNew;

import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BasicNumberFields from '../../features/numberField';
import MultilineTextFields from '../../features/selectFieldDish';
import Container from '@material-ui/core/Container';
import OptionTextFields from '../../features/selectFieldOption';
import BasicTextFields from '../../features/TextField';

function createData(info, details) {
  return { info, details };
}

const rows = [
  createData('Table No:', <BasicNumberFields />),
  createData('Choose a dish:', <MultilineTextFields />),
  createData('Option of chosen dish:', <OptionTextFields />),
  // createData('Dishes:', ['Four Cheese - 1$', ', Water - 4,5$', ', Pizza Margherita - 12$']),
  // createData('Total order amount:', 17.5 + '$'),
  createData('Dishes:', <BasicTextFields/>),
  createData('Total order amount:', <BasicTextFields />),
];

const WaiterOrderNew = () => (
  <div className={styles.component}>
    <h2>
      New Order:
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Container className={styles.button}>
        <Button color="primary"
          variant="outlined">Add Order
        </Button>
      </Container>
    </Paper>
  </div>
);

export default WaiterOrderNew;

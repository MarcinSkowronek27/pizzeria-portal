import React from 'react';
import styles from './WaiterOrderId.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router';
import TableEditFields from '../../features/tableEditField';

function createData(info, details) {
  return { info, details };
}

const rows = [
  createData('Table No:', <TableEditFields />),
  createData('Choose a dish:', 'Pizza Vegetariana, Water, Fanta, Spaghetti'),
  createData('Option of chosen dish:', 'gluten free'),
  createData('Dishes:', ['Four Cheese - 1$', ', Water - 4,5$', ', Pizza Margherita - 12$']),
  createData('Total order amount:', 17.5 + '$'),
];

const WaiterOrderId = () => {
  const { id } = useParams();
  return (
    <div className={styles.component}>
      <h2>
        Edit Order No {id}:
      </h2>
      <Paper className={styles.component}>
        <Table >
          <TableHead >
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.info} >
                <TableCell >
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
            variant="outlined">Edit Order
          </Button>
        </Container>
      </Paper>
    </div>
  );
};

export default WaiterOrderId;

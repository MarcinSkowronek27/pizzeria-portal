import React from 'react';
import styles from './TablesEventsId.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router';

function createData(info, details) {
  return { info, details };
}

const rows = [
  createData('Date and Time:', '26.08.2021 19:30'),
  createData('Name:', 'Angelina Jolie'),
  createData('Table No:', 2),
  createData('Choose a dish:', ['Salmon Fish', ', Hot Spicy Burger']),
  createData('Choose a drink:', 'Water, Ice Tea'),
  createData('Number of people:', 2),
  createData('Deliver to (if delivery):', 'ON SITE'),
];

const TablesEventsId = () => {
  const { id } = useParams();
  return (
    <div className={styles.component}>
      <h2>
        Edit event no. {id}:
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
          <Button color="primary"
            variant="outlined">Edit Event
          </Button>
        </Container>
      </Paper>
    </div>
  );
};

export default TablesEventsId;

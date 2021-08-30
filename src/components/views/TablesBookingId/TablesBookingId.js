import React from 'react';
import styles from './TablesBookingId.module.scss';
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
  createData('Date and Time:', '29.08.2021 16:00'),
  createData('Name:', 'Marek Kondrad'),
  createData('Table No:', 5),
  createData('Choose a dish:', ['Jalapeno Burger', ', Burger Max']),
  createData('Choose a drink:', 'Coke'),
  createData('Number of people:', 4),
  createData('Deliver to (if delivery):', 'Time Square, NY'),
];

const TablesBookingId = () => {
  const { id } = useParams();
  return (
    <div className={styles.component}>
      <h2>
        Edit booking no. {id}:
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
            variant="outlined">Edit Booking
          </Button>
        </Container>
      </Paper>
    </div>
  );
};

export default TablesBookingId;

// PONIŻSZY KOD JEST W CELU WYJAŚNIENIA PODANEGO TIPS NA DOLE

// const TablesBookingId = props => (
//   <div className={styles.component}>
//     <h2>
//       TablesBookingId view
//     </h2>
//     <span>Table Id: {props.match.params.id}</span>
//   </div>
// );

// TablesBookingId.propTypes = {
//   match: PropTypes.object,
// };
// export default TablesBookingId;

// POMOCNE TIPS
// są dwie metody, żeby wyciągnąć końcówkę adresu strony, jaką używamy. Pierwsza metoda jest użyta tutaj (TablesBookingId) i polega
// na wyciągnięciu id z propsa.
// Druga metoda znajduje się w komponencie TablesEventsId i używa wbudowanej funkcji w Reacta useParams().

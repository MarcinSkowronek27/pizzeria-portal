import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Tables = () => {

  function createData(hour, table1, table2, table3, table4, table5, table6, typeTable) {
    return { hour, table1, table2, table3, table4, table5, table6, typeTable };
  }

  const rows = [
    createData('12:00', null, 'Zygmunt III Waza', 'Królowa Bona', null, null, null, 'booking'),
    createData('12:30', null, null, null, null, null, null, 'booking'),
    createData('13:00', null, null, null, null, null, null, 'booking'),
    createData('13:30', null, null, 'Adam Malysz', null, null, null, 'booking'),
    createData('14:00', null, 'Angelina Jolie', null, null, null, null, 'events'), /* */
    createData('14:30', null, null, null, null, null, null, 'booking'),
    createData('15:00', null, null, null, null, null, 'John White', 'booking'),
    createData('15:30', null, null, null, null, null, null, 'booking'),
    createData('16:00', null, null, null, null, 'George Bush', null, 'events'), /* */
    createData('16:30', null, null, null, null, null, null, 'booking'),
    createData('17:00', null, null, 'Jimmy Bow', null, null, null, 'booking'),
    createData('17:30', null, null, null, null, null, null, 'booking'),
    createData('18:00', null, null, 'Marek Konrad', null, null, null, 'booking'),
    createData('18:30', null, null, null, null, null, null, 'booking'),
    createData('19:00', null, null, null, null, null, null, 'booking'),
    createData('19:30', null, null, null, null, null, null, 'booking'),
    createData('20:00', null, null, null, null, null, null, 'booking'),
    createData('20:30', null, 'Bruce Willis', 'Jackie Chan', null, null, null, 'events'), /* */
    createData('21:00', null, null, null, null, null, null, 'booking'),
    createData('21:30', null, null, null, null, null, null, 'booking'),
    createData('22:00', null, 'Krzysztof Ibisz', null, null, null, null, 'booking'),
    createData('22:30', null, null, null, null, null, null, 'booking'),
    createData('23:00', null, null, null, null, null, null, 'booking'),
    createData('23:30', 'Michael Jackson', null, null, null, null, null, 'booking'),
    createData('00:00', null, null, null, null, null, null, 'booking'),
  ];

  const inputProps = {
    step: 600,
    shrink: true,
    disabled: true,
  };

  return (
    <div className={styles.component}>
      <Button className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>New Table
      </Button>
      {/* <Button className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'> Edit Table
      </Button> */}
      <Button className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'> New Event
      </Button>
      {/* <Button className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'> Edit Event
      </Button> */}
      <Paper className={styles.container}>
        <form noValidate>
          <TextField
            id="datetime-local"
            label="Pick a Date and Time"
            type="datetime-local"
            variant="standard"
            defaultValue="2021-08-26T10:30"
            className={styles.textField}
            InputLabelProps={inputProps}
          />
        </form>
        <Table className={styles.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Hour</TableCell>
              <TableCell align="center">Table 1</TableCell>
              <TableCell align="center">Table 2</TableCell>
              <TableCell align="center">Table 3</TableCell>
              <TableCell align="center">Table 4</TableCell>
              <TableCell align="center">Table 5</TableCell>
              <TableCell align="center">Table 6</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.hour}>
                <TableCell>{row.hour}</TableCell>
                <TableCell>
                  {row.table1 && (
                    <Button
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/${row.typeTable}/${row.table1}`}
                    >
                      {row.table1}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table2 && (
                    <Button
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/${row.typeTable}/${row.table2}`}
                    >
                      {row.table2}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table3 && (
                    <Button
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/${row.typeTable}/${row.table3}`}
                    >
                      {row.table3}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table4 && (
                    <Button
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/${row.typeTable}/${row.table4}`}
                    >
                      {row.table4}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table5 && (
                    <Button
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/${row.typeTable}/${row.table5}`}
                    >
                      {row.table5}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.table6 && (
                    <Button
                      startIcon={<InfoOutlinedIcon />}
                      component={Link}
                      size="small"
                      variant="outlined"
                      color="primary"
                      to={`${process.env.PUBLIC_URL}/tables/${row.typeTable}/${row.table6}`}
                    >
                      {row.table6}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div >
  );
};

export default Tables;

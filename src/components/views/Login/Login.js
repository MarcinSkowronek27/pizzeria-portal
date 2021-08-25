import React from 'react';
import styles from './Login.scss';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Login = () => (
  <div className={styles.component}>
    <Container>
      <Toolbar />
      <FormControl className={styles.margin}>
        <InputLabel htmlFor="input-with-icon-login">Login</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <Button>Login</Button>
    </Container>

  </div>
);

export default Login;

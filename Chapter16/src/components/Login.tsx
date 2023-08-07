import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Carlist from './Carlist';
import Snackbar from '@mui/material/Snackbar';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [isAuthenticated, setAuth] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [event.target.name] : event.target.value});
  }

  const login = () => {
    axios.post(import.meta.env.VITE_API_URL + "/login", user, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      const jwtToken = res.headers.authorization;

      if (jwtToken !== null) {
        sessionStorage.setItem("jwt", jwtToken);
        setAuth(true);
      }
    })
    .catch(() => setOpen(true));
  }

  if (isAuthenticated) {
    return <Carlist />;
  }
  else {
    return(
      <Stack spacing={2} alignItems="center" mt={2}>
        <TextField
          name="username"
          label="Username"
          onChange={handleChange} />
        <TextField
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}/>
        <Button
          variant="outlined"
          color="primary"
          onClick={login}>
            Login
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="Login failed: Check your username and password"
        />
      </Stack>
    );
  }
}

export default Login;
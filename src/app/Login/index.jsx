import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import validation from "../../Validation";
import Alert from '../Alert'
import Box from '@mui/material/Box';
import "./Login.css";
import Link from '@mui/material/Link';

function Index() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    severity: "",
    message: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });

    setError(validation(name, value));
  };
 const handleSubmit = () => {
    // setIsSubmitting(true);
    if (user.username !== " " && user.password !== "" &&  (Object.keys(error).length === 0)) {
      setIsSubmitting(false);
      alert("user created");
      setUser({
        username: "",
        password: "",
      })
    }else{
      setAlert({
        severity:"warning",
    message:"Please fill all the detals"
      })

      setTimeout(() => {
        setAlert({
          severity:"",
      message:""
        })
      },2000)

    }
  };

  return (
    <div className="parent">
      
        <Grid
          style={{ width: "1024px" }}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6} xs={12} className="col-1 col" spacing={2}>
            <h2 className="mb-4 center">Login</h2>
            <Alert  severity={alert.severity} message={alert.message}/>
            <div>
              <form noValidate>
                <TextField
                  id="outlined-name"
                  label="Username"
                  value={user.username}
                  name="username"
                  onChange={(e) => handleChange(e)}
                  className="mb-4 w-full"
                  helperText={error.username}
                  error={!!error.username}
                />

                <TextField
                  id="outlined-name2"
                  className="mb-4 w-full"
                  name="password"
                  label="Password"
                  value={user.password}
                  onChange={(e) => handleChange(e)}
                  helperText={error.password}
                  error={!!error.password}
                />

                <Stack direction="row" spacing={2}>
                  <Button 
                  
                  onClick={handleSubmit} 
                  className="w-full" 
                  size="large"
                   variant="contained">
                   {isSubmitting ? 'Loading' : 'Submit' } 
                  </Button>
                </Stack>
              </form>

              <Link className="forgot" href="#" variant="body2">
                  Forgot password?
                </Link>
            </div>
          
          </Grid>

          <Grid item md={6} xs={12} className="col-2 col"></Grid>
        </Grid>
        
    </div>
  );
}

export default Index;

// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useState } from "react";

function Home() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitted, setisSubmitted] = useState(false);

  const handleSubmit = () => {
    setisSubmitted(true);    
    setTimeout(() =>  setisSubmitted( false), 5000);
 
  };

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    // { formData, isSubmitted } = state;
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        className="mt-4"
      >
        <Grid item xs={10} md={6} lg={6}>
          <Card>
            <CardContent>
              <Typography
                variant="h5"
                className="p-2"
                component="div"
                textAlign="center"
              >
                Sign Up
              </Typography>

              <ValidatorForm onSubmit={handleSubmit}>
                <Grid  direction="row"
        justifyContent="center"
        container>
              <Grid item xs={10} md={6} lg={6}>
                  <TextValidator
                    label="Email"
                    onChange={(e) => handleChange(e)}
                    name="email"
                    value={formData.email}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required",
                      "email is not valid",
                    ]}
                  />
                </Grid>

                <Grid item xs={10} md={6} lg={6}>
                    <TextValidator
                      label="Password"
                      onChange={(e) => handleChange(e)}
                      name="password"
                      value={formData.password}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                </Grid>

                </Grid>

                <CardActions>
                  <Button type="submit" size="small" disabled={isSubmitted}>
                    {(isSubmitted && "Your form is submitted!") ||
                      (!isSubmitted && "Submit")}
                  </Button>
                </CardActions>
              </ValidatorForm>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;

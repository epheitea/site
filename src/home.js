import React from 'react';
import './home.css'
import {
  Typography,
  Container,
  Grid,
  Button
} from '@material-ui/core';


export default function App() {

  return (
    <Container className="page">
      <Grid container className="grid">

        <Grid item xs={6}>
          <Typography variant='h3'>
            Ephei
          </Typography>
          <Typography variant='h5'>
            The Fool
          </Typography>
          <br />
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <br />
          <br />

          <Grid container direction={{xs: "column", md: "row"}}>
            <GridButton name='Portfolio' />
            <GridButton name='Academics' />
            <GridButton name='Social' />
          </Grid>
        </Grid>

        <Grid item xs={6} className="background-image" />

      </Grid>
    </Container>
  );
}


const GridButton = ((props) => {
  return (
    <Grid item xs={4}>
      <Button variant="outlined" className="button">{props.name}</Button>
    </Grid>
  )
})
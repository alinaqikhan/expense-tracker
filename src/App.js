import React from 'react'
import './stylesheets/App.css';
import { Details } from './components/Details';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

export const App = () => {

  const { desktop, mobile, main, last, grid } = useStyles();

  return (
    <div>
      <Grid className={grid} container spacing={0} alignItems="center" justify="center" style={{height:'100vh'}}>

        <Grid item xs={12} sm={4}>
          <Details title="Income"/>
        </Grid>
        {/* ------------ */}
        <Grid item xs={12} sm={4}>
          Main
        </Grid>
        {/* ------------ */}
        <Grid item xs={12} sm={4}>
          <Details title="Expense"/>
        </Grid>

      </Grid>
    </div>
  )
}

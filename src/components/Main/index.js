import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import { Form } from './Form';
import { List } from './List';
import { ExpenseTrackerContext } from '../../context/context';

export const Main = () => {

    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Track your financial activity"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance: ${balance}</Typography>
                <Typography variant="subtitle1" style={{lineHeight:'1.5rem', marginTop:'20px'}}>
                    {/* InfoCard Component */}
                    Try saying: Add income for $100 in category Salary for Monday
                </Typography>
                <Divider />
                    <Form />
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

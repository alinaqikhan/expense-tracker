import React, { useContext, useState } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4} from 'uuid';
import { incomeCategories, expenseCategories } from '../../../constants/categories';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date(),
}

export const Form = () => {

    const { radioGroup, button } = useStyles();
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);

    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4()}
        addTransaction(transaction);
        setFormData(initialState);
    }

    const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;

    return (
        <Grid container spacing={2}> 
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ....
                </Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select value={formData.type} onChange={(event)=>setFormData({...formData, type:event.target.value})}>
                            <MenuItem value="Income">Income</MenuItem>
                            <MenuItem value="Expense">Expense</MenuItem>
                        </Select>
                    </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(event)=>setFormData({...formData, category:event.target.value})}>
                    {
                        selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)
                    }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(event)=>setFormData({...formData,amount:event.target.value})}/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(event)=>setFormData({...formData,date:event.target.value})} />
            </Grid>
            <Button className={button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>
                Create
            </Button>
        </Grid>
    )
}

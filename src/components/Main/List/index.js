import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyle from './styles';

export const List = () => {

    const classes = useStyle();

    const transactions = [
        {id:1, type:'Income', category:'Business', amount:50, date: new Date()},
        {id:2, type:'Income', category:'Salary', amount:100, date: new Date()},
        {id:3, type:'Expense', category:'Travel', amount:50, date: new Date()},
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {
                transactions.map((transaction)=>(
                    <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={transaction.type === 'Income'? classes.avatarIncome: classes.avatarExpense}>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={transaction.category} secondary={`$ ${transaction.amount} - ${transaction.date}`}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick=""><Delete/></IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))
            }
        </MUIList>
    )
}

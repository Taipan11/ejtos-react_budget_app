import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import getCurrencySymbol from '../utils';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name:name,
            cost: 10,
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        })
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{getCurrencySymbol(currency)}{props.cost}</td>
        <td><button style={{backgroundColor:'green', borderRadius:30, height: 30, width:30, borderColor:'transparent'}} onClick={event=> increaseAllocation(props.name)}><span style={{color:"white", alignSelf:'center', textAlign:'center', fontWeight:'bold'}}>+</span></button></td>
        <td><button style={{backgroundColor:'red', borderRadius:30, height: 30, width:30, borderColor:'transparent'}} onClick={event=> decreaseAllocation(props.name)}><span style={{color:"white", alignSelf:'center', textAlign:'center', fontWeight:'bold'}}>-</span></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
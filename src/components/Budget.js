import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import getCurrencySymbol from '../utils';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0);
    
    const handleBudgetChange = (event) => {
        let value = parseInt(event.target.value);
        if (value === 20000) {
            alert('The value cannot exceed remaing fund £30');
            return;
        }
        if (value < totalExpenses ) {
            alert('You cannot reduce the budget value lower than the spending');
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <label>Budget:{getCurrencySymbol(currency)}<input type='number' name='points' step="10" value={budget} onChange={handleBudgetChange} max={20000}/></label>
        </div>
    )
};

export default Budget
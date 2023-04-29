import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";
import getCurrencySymbol  from "../utils";

const ChangeCurrency = () => {
    const { currency, dispatch } = useContext(AppContext);


    const onSelection = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        })
    }
    
    return (
        <div className='alert alert-secondary'>
            <div class="custom-select" style={{position:'relative', backgroundColor:"#39ff14" }}>
            <select style={{ backgroundColor:"#39ff14", borderColor:"#39ff14", color:"white" }} onChange={onSelection} name={`Currency, ${getCurrencySymbol(currency)}, ${currency}`} value={currency}>
                <option style={{backgroundColor:"#39ff14"}} value='dollar'>$ Dollar</option>
                <option style={{backgroundColor:"#39ff14"}} value='pound'>£ Pound</option>
                <option style={{backgroundColor:"#39ff14"}} value='euro'>€ Euro</option>
                <option style={{backgroundColor:"#39ff14"}} value='ruppee'>₹ Ruppee</option>
            </select>
            </div>
        </div>
    );
};

export default ChangeCurrency
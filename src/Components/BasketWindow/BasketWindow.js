import './BasketWindow.css'  
import BasketWindowItem from '../BasketWindowItem/BasketWindowItem'
import { IoMdClose } from 'react-icons/io';
import { useState, useEffect } from 'react';


function BasketWindow(props){   

    function CloseBasketWindow(){ props.CloseBasketWindow()} 

    function VauleChangeOnItems(value, id){ props.VauleChangeOnItems(value, id)}  

    return( 
        <div className='BasketWindow'>
            <div className='BasketWindowCon'> 
                <div className='BasketWindowItem'>
                    <p onClick={CloseBasketWindow}><IoMdClose/></p> 
                </div> 
                <div className='BasketWindowItemList'>
                    {props.ItemBasketList.map((item) => {
                        return <BasketWindowItem foodItem={item['foodItem']} count={item['count']} id={item['id']} price={item['price']} VauleChangeOnItems={VauleChangeOnItems} /> 
                    })} 
                </div> 
                {props.ItemBasketList.length === 0 ? <p className='message'>Nothing has been added to the basket</p> : null}  
                <div className='checkoutButton'>  
                    <p>Total: £{props.totalItemCost.toFixed(2)}</p>
                    <button>Checkout</button> 
                </div>
            </div>
        </div> 
        )
} 

export default BasketWindow
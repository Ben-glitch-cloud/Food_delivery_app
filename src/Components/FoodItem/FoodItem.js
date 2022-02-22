import './FoodItem.css' 
import React, {useEffect, useState} from 'react'

function FoodItem(props){   

    const [propsIdFromFood, setPropsIdFromFood] = useState()    
    const [propsFoodItemName, setPropsFoodItemName] = useState() 
    const [propsPriceItem, setPropsPriceItem] = useState()

    function GetPropId(id, foodItem, price){  
        setPropsIdFromFood(id)  
        setPropsFoodItemName(foodItem) 
        setPropsPriceItem(price)
    }

    function AddToBusket(e){ 
        e.preventDefault()   
        let NumberOfItems = Number(e.target[0].value) 
        if(NumberOfItems >= 0){ props.GetAddToBasket(propsIdFromFood, NumberOfItems, propsFoodItemName, propsPriceItem)} 
        return 
    } 

    // stype the basket

    return(
        <div className='FoodItemCon'>  
            <div className='FoodItem'>
                <p>{props.foodItem}</p> 
                <p>{props.description}</p> 
                <p>£{props.price}</p>    
            </div> 
            <div className='FoodItem'>
            <form onSubmit={AddToBusket} className="FormCon"> 
                <input type="number" step="1" min="0" max="100"></input>  
                <input type="submit" value={props.basketVerify.some((item) => item['id'] === props.id) ? "Update" : "Add" } className='FormConButton' onClick={() => GetPropId(props.id, props.foodItem, props.price)}></input> 
            </form>
            </div>
        </div>
    )
} 

export default FoodItem
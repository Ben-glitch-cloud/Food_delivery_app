import './BasketWindowItem.css'

function BasketWindowItemItem(props){ 

    function VauleChangeOnItems(value, id){ props.VauleChangeOnItems(value, id)}

    return(
        <div className='BasketWindowItemContaner'> 
            <div className='BasketItemX'>
                <p>{ props.count > 1 ? `${props.count}x`: `${props.count}`} : {props.foodItem}</p>    
                <p>£{(props.count * props.price).toFixed(2)}</p>
            </div> 
            <div className='BasketItemY'>
                <button onClick={() => VauleChangeOnItems('add', props.id)}>+</button> 
                <button onClick={() => VauleChangeOnItems('take', props.id)}>-</button> 
            </div>
        </div>
    )
} 

export default BasketWindowItemItem
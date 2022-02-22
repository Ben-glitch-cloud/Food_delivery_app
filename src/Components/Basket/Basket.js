import './Basket.css'

function Basket(props){ 

    function ShowBasketList(){ props.ShowBasketList()}

    return(
        <div className='BasketCon'> 
            <div className='BasketItem'>
                <p>Basket: {props.basketSize}</p> 
            </div> 
            <button className='BasketItemButton' onClick={ShowBasketList}>View Basket</button>
        </div>
    )
}  

export default Basket
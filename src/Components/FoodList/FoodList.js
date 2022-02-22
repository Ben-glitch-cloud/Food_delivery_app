import './FoodList.css'  
import FoodItem from '../FoodItem/FoodItem'

function FoodList(props){  

    function GetAddToBasket(ID, NumberOfItems, FoodItem, ItemPrice){ props.GetAddToBasket(ID, NumberOfItems, FoodItem, ItemPrice)} 

    function GetRemoveFromBasket(id){ props.GetRemoveFromBasket(id)}

    return(
        <div className='FoodListCon'>
            {props.menuData.map((item) => {   
                return <FoodItem id={item['id']} foodItem={item['foodItem']} description={item['description']} price={item['price']} GetAddToBasket={GetAddToBasket} getRemoveFromBasket={GetRemoveFromBasket} basketVerify={props.basketVerify}/>
            })}
        </div>
    )
} 

export default FoodList
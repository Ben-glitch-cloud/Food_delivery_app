import './App.css';  
import FoodList from './Components/FoodList/FoodList' 
import Header from './Components/Header/Header' 
import Basket from './Components/Basket/Basket' 
import BasketWindow from './Components/BasketWindow/BasketWindow'
import React, {useEffect, useState} from 'react'   
import FoodItems from './DummyData'

function App() {  

  const [menu, setmenu] = useState(FoodItems) 

  const [showBasketList, setshowBasketList] = useState(false)   

  const [totalcost, setTotalcost] = useState(0)

  const [BasketList, setBasketList] = useState([])

  const [basket, setbasket] = useState(0)  

  // funaction working, fix the other funactions
  function GetAddToBasket(ID, NumberOfItems, FoodItem, ItemPrice){
    const object = {}     

    let FoundVaule = false

    if(BasketList.length === 0){
      object['id'] = ID 
      object['count'] = NumberOfItems     
      object['foodItem'] = FoodItem 
      object['price'] = ItemPrice
      setBasketList([...BasketList, object])     
      return
    } 

    BasketList.map((item) => {   
      if(item['id'] === ID){   
        item['count'] = NumberOfItems   
        FoundVaule = true
      } else if(!FoundVaule){ 
        object['id'] = ID 
        object['count'] = NumberOfItems    
        object['foodItem'] = FoodItem 
        object['price'] = ItemPrice
        setBasketList([...BasketList, object])  
      }
    })   
    setBasketList(BasketList => BasketList.filter((item) => item['count'] > 0 ? item : null)) 
  }  

  function getCloseBasketWindow(){ setshowBasketList(false)}

  function BasketListShow(){setshowBasketList(true)}

  function AddToBusketCount(){ 
    let countItemInBasket = 0
    BasketList.map((item) => { countItemInBasket += item['count']})  
    setbasket(countItemInBasket)
  } 

  function VauleChangeOnItems(value, id){
        BasketList.map((obj) => {
          if(obj['id'] === id && value === 'add'){
            obj['count'] += 1  
          } else if(obj['id'] === id && value === 'take'){
            obj['count'] -= 1 
          }
        })
        setBasketList([...BasketList]) 
        setBasketList(BasketList => BasketList.filter((item) => item['count'] > 0 ? item : null)) 
  } 


  function updateCost(){ 
    let count = 0
    BasketList.map((item) => { count += (item['count'] * item['price']) })  
    setTotalcost(count)
}

  // useEffect area   

  // 2. More over, show the price of the basket on both the item and the total amount. 

  useEffect(() => {  
    setBasketList(BasketList)  
    AddToBusketCount() 
    updateCost() 
  }, [BasketList])  



  useEffect(() => { setbasket(basket) }, [basket])

  return (
    <div className="App"> 
      <Header/>  
      { showBasketList ? <BasketWindow CloseBasketWindow={getCloseBasketWindow} ItemBasketList={BasketList} VauleChangeOnItems={VauleChangeOnItems} totalItemCost={totalcost}/> : null}
      <Basket basketSize={basket} ShowBasketList={BasketListShow}/>
      <FoodList menuData={menu} basketVerify={BasketList} GetAddToBasket={GetAddToBasket} />
    </div>
  );
}

export default App;

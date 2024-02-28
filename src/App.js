import './App.css';
import React from 'react';
import Itemlist from './itemlist';

function App() {
  var [items,setItems]=React.useState([
    {
      item:"item1",
      quantity:1,
      price:11.00
    },
    {
      item:"item2",
      quantity:1,
      price:12.00
    },
    {
      item:"item3",
      quantity:1,
      price:13.00
    },
    {
      item:"item4",
      quantity:1,
      price:14.00
    },
    {
      item:"item5",
      quantity:1,
      price:15.00
    }
  ])
  var [carttotal,setCarttotal]=React.useState(0)
  var [cartprice,setCartprice]=React.useState(0)


  function incBtn(i){
    items[i].quantity++;
    setItems([...items])
  }

  function decBtn(i){
    items[i].quantity--;
    setItems([...items])
  }

  // var itemsCount=()=>{
  //   var cartCount=items.reduce((acc,item)=>(acc+item.quantity),0)
  //   return cartCount;
  // }

//   const countItem = () =>{
//     var total = items.reduce((acc, item) => (acc + item.quantity), 0);
//     return total;
// }

  function refresh(){
    var temp=[...items]
    for(var i=0;i<=temp.length-1;i++){
      temp[i].quantity=0;
    }
    setItems(items)
    // setCarttotal([...carttotal])
    // setCartprice([...cartprice])
 }
  
  return (
    <div className="App">
      <div class="mydiv d-flex flex-wrap justify-content-between">
        <div className="">
          carttotal:{carttotal}&nbsp;&nbsp;&nbsp;&nbsp;
          Cartprice:{cartprice}
        </div>
        <div>
          <span class="text-primary" onClick={refresh}>X</span>
        </div>
      </div>
      {
        items.map((itm,i)=>{
          return <Itemlist itm={itm} i={i} incBtn={incBtn} decBtn={decBtn}></Itemlist>
        })
      }
 
    </div>
  );
}

export default App;

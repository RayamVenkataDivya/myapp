function Itemlist({itm,i,incBtn,decBtn}){
    return (
        <div className="App2 d-flex flex-wrap justify-content-between">
            <p>{itm.item}</p>
            <button class="btn btn-secondary ml-2 btn-sm float-right">{itm.quantity}</button>
            <span className="float-right">x</span>
            <button class="btn btn-secondary btn-sm float-right">${itm.price}</button>
            <span className="float-right">=</span>
            <button class="btn btn-warning btn-sm float-right">{itm.quantity*itm.price}</button>
            <button class="btn btn-danger btn-sm ml-2 mr-2  float-right" disabled={itm.quantity===0}onClick={()=>{decBtn(i)}}>-</button>
            <button class="btn btn-primary btn-sm float-right" onClick={()=>{incBtn(i)}}>+</button>
        </div>
    )
}
export default Itemlist;

import React, { useState } from 'react';

const Shoppingitem = () => {
var [count, setCount] = useState(0)

const Add = ()=>{
  setCount (count + 1);
}
const Remove = ()=>{
  setCount (count - 1);
}

  return (
    <div style={{marginLeft:'20%', marginTop:'15%'}}>
        <dv style={{display: 'flex' }}>
            <div><img width='130px' src = 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-2.jpg' alt='Shopping Item'/></div>
            <div>
              <h2 style={{marginLeft:'10px', marginTop:'0px'}}>Pizza</h2>
              <h3 style={{marginLeft:'12px'}}>{count<=10?count + " Items Added":"Out of order !"}</h3>
              <div style={{display: 'flex'}}>
                <button onClick={Add}    disabled={count>10?true:false} style={{backgroundColor:count>10?"grey":"green", border:'none', color:'white', marginLeft:'1em'}}>Add</button>
                <button onClick={Remove} disabled={count===0?true:false} style={{backgroundColor:count<=0?"grey":"red", border:'none', color:'white', marginLeft:'1em'}}>Remove</button>
              </div>
            </div>
        </dv>
    </div>
  )
}

export default Shoppingitem;
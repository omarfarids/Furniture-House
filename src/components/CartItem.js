import React ,{ useContext} from 'react';
import { AppContext } from './context';
import cartStyles from '../styles/Cart.module.css'
import '../styles/global.css'
import Purchase from './Purchase';

function CartItem() {
    const {cartItems,setCartItems,remove,total,setTotal,setPurchase} = useContext(AppContext);
    
  return (
    <>
      {cartItems.length === 0 && <p className='text-center mt-5 pt-5'>There is no item in your cart</p>}
      <div className={cartStyles.cartPage}>
          {cartItems.map(e=>{
            return  <div className={`${cartStyles.cartItem} item-card`} key={e.id}>
                      <img className={cartStyles.cartImg} src={e.img} alt={e.name} />
                      <div className={cartStyles.cartBody}>
                        <h3>{e.item}</h3>
                        <p><b>Price:</b> {e.price / 100}$</p>
                        <button className='btn btn-danger' onClick={()=>{remove(e.id);setTotal(total - (e.price / 100))}}>Clear item</button>
                      </div>
                    </div>
          })}
      </div>
      <Purchase />
      <div className={cartStyles.buttonGroup}>
        {cartItems.length !== 0 && <button className='btn btn-outline-primary' onClick={()=>setPurchase({
          order:true,
          submit:false
        })} >Order Now</button>}
        <button className='btn btn-danger' onClick={()=>{setCartItems([]);setTotal(0)}}>Clear cart</button>
      </div>
    </>
  )
}

export default CartItem
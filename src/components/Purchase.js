import React, { useContext } from 'react'
import { AppContext } from './context'
import styles from '../styles/Purchase.module.css'

function Purchase() {
    const{orderInfo,setOrderInfo,purchase,setPurchase,total,setTotal,setCartItems} = useContext(AppContext)


    return <>
                {purchase.order && (
                    <form onSubmit={()=>{setPurchase({
                        order:false,
                        submit:true
                    });
                    setOrderInfo({
                        name:'',
                        address:'',
                        number:'',
                        email:''
                    })
                    }} className={styles.purchaseForm}>
                        <h3>Package Info</h3>
                        <input value={orderInfo.name} onChange={(e)=>setOrderInfo({...orderInfo,name:e.target.value})} type='text' placeholder='Your Full Name' required />
                        <input value={orderInfo.address} onChange={(e)=>setOrderInfo({...orderInfo,address:e.target.value})} type='text' placeholder='Your Address' required />
                        <input value={orderInfo.number} onChange={(e)=>setOrderInfo({...orderInfo,number:e.target.value})} type='text' placeholder='Your Mobile Number' required />
                        <input value={orderInfo.email} onChange={(e)=>setOrderInfo({...orderInfo,email:e.target.value})} type='email' placeholder='Your Email Address' required />
                        <p><b>Total:</b> {total.toFixed(2)}</p>
                        <button onClick={()=>{setCartItems([]);setTotal(0)}} className='btn btn-primary'>Submit</button>
                        <button onClick={()=>setPurchase({
                            order:false,
                            submit:false
                        })} className='btn btn-outline-danger'>Close</button>
                    </form>
                )}
                {purchase.submit && (
                    <div className={styles.success}>
                        <p>Submitted Successfully!</p>
                    </div>
                )}
            </>
}

export default Purchase
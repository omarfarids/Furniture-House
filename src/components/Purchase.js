import React, { useContext } from 'react'
import { AppContext } from './context'
import styles from '../styles/Purchase.module.css'

function Purchase() {
    const{orderInfo,setOrderInfo,purchase,setPurchase} = useContext(AppContext)


    return <>
                {purchase.order && (
                    <form onSubmit={()=>setPurchase({
                        order:false,
                        submit:true
                    })} className={styles.purchaseForm}>
                        <h3>Package Info</h3>
                        <input value={orderInfo.name} onChange={(e)=>setOrderInfo({...orderInfo,name:e.target.value})} type='text' placeholder='Your Full Name' required />
                        <input value={orderInfo.address} onChange={(e)=>setOrderInfo({...orderInfo,address:e.target.value})} type='text' placeholder='Your Address' required />
                        <input value={orderInfo.number} onChange={(e)=>setOrderInfo({...orderInfo,number:e.target.value})} type='text' placeholder='Your Mobile Number' required />
                        <input value={orderInfo.email} onChange={(e)=>setOrderInfo({...orderInfo,email:e.target.value})} type='email' placeholder='Your Email Address' required />
                        <button className='btn btn-primary'>Submit</button>
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
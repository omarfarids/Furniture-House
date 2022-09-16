import React , { useState , useContext } from 'react';
import {Link} from 'react-router-dom';
import sideBarIcon from '../assets/icon-hamburger.svg';
import '../styles/navbar.css';
import { AppContext } from './context';


function NavBar() {
    const [sideBar,setSideBar] = useState(false);
    const {cartItems} = useContext(AppContext)

    return (
        <nav>
            <div className='nav-item'>
                <div className='item'>
                    <h3>Furniture</h3>
                    <ul className='big-screen'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>about</Link></li>
                        <li>
                            <span className='cart-counter'>{cartItems.length}</span>
                            <Link to='/cart'>cart</Link>
                        </li>
                    </ul>
                </div>
                <button onClick={()=>{setSideBar(!sideBar)}} className='sidebar-button' ><img className={sideBar?'rotate':''} src={sideBarIcon} alt='side bar icon'/></button>
            </div>
            <div className={!sideBar?'nav-item small-screen hidden':'nav-item small-screen'}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li>
                        <span className='cart-counter'>{cartItems.length}</span>
                        <Link to='/cart'>cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { ImMobile } from 'react-icons/im';
import { BsFacebook , BsTwitter ,BsInstagram } from 'react-icons/bs';
import '../styles/footer.css'


function Footer() {
  return (
        <footer>
        <span>
            <h2>Ready To Pick Very Unique Pieces?</h2>

        </span>
        <h2>Furniture</h2>
        <div>   
            <div>        
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua</p></div>

                <div><ImMobile /> <p>+2-0115-037-0674</p></div>
                <div><HiOutlineMail /> <p>Omar.farid007@gmail.com</p></div>
            </div>
            <div>
            <span>About Us</span>
            <span>What We Do</span>
            <span>FAQ</span>
            </div>
            <div>
            <span>Career</span>
            <span>Blog</span>
            <span>Contact Us</span>
            </div>
            <div>
            <a className='icon' href='https://www.facebook.com/omar.elkanzy'><BsFacebook/> </a>
            <a className='icon' href='https://twitter.com/Omar_Farid95'><BsTwitter /></a>
            <a className='icon' href='https://www.instagram.com/omar_elkenzy/?hl=en'><BsInstagram /></a>
            </div>
        </div>  
    <p>&copy; Copyright 2022. All rights reserved.</p>

    
        <p>
            Coded by <a href="https://omarfarids.github.io/profile-page">Omar Farid</a>.
        </p>
    </footer>
  )
}

export default Footer
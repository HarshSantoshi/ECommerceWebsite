import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import  Badge  from '@mui/material/Badge';
import Avatar  from '@mui/material/Avatar';
import {NavLink} from'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext } from 'react';
import { LoginContext } from '../Context/contextProvider';
const Navbar = () => {
  const {account ,setAccount} = useContext(LoginContext);
  console.log(account);
  return (
    <div>
      <header>
        <nav>
            <div className='left'>
               <div className='navlogo'>
               <NavLink to = "/"><img src='https://clipground.com/images/amazon-logo-clipart-transparent-background-8.png' alt='Logo'/></NavLink> 
               </div>
               <div>
                <div className='nav_searchbar'>
                    <input type = "text" name = "" id ="" placeholder ="Search Your Products" />
                    <div className='search_icon'>
                        <SearchIcon/>
                    </div>
                </div>
               </div>
            </div>
            <div className='right'>
                <div className='nav_btn'>
                    <NavLink to ='/login'>Sign in</NavLink>
                </div>
                <div className='cart_btn'>
                    <Badge badgeContent={ account.carts.length} color ="primary">
                        <ShoppingCartIcon id="icon"/>
                    </Badge>
                    <p>
                        Cart
                    </p>
                </div>
                <Avatar className='Avatar'/>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar

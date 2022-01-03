import React from 'react'
import './Header.css'

const Header = () => {
  let user = localStorage.getItem('user-info')

  function logOut () {
    localStorage.clear();
    sessionStorage.clear();
  }
  
  return (
    
      <div className='header'>
        
        { sessionStorage.getItem('activeSession') ?
        <div className="logout-dropdown" >Connected as {user && user} 
        <a href="/login"><button className="logout" onClick={logOut}>LOGOUT</button></a>
        </div>  
        : null
        }
      </div>      
    
  )
}

export default Header

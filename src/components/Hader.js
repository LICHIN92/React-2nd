import React from 'react'
import Button from './Button'
import hader from '../componet_style/hader.css'
function Hader({head}) {
  return (
    <div className='header_container'>
        <h3>{head}</h3>
        <ul>
            <li>Profile</li>
            <li>About</li>
            <li> <Button name={'Logout'}/></li>
        </ul>
    </div>
  )
}

export default Hader
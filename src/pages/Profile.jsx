import React from 'react'
import Hader from '../components/Hader'
import {FaRegUser} from 'react-icons/fa';
function Profile() {
  return (
    <div>
      <Hader head={"User Profile"}/>
      <h1><FaRegUser />User Profile</h1>
 
    </div>
  )
}

export default Profile
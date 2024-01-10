import React from 'react'
import Hader from '../components/Hader'
import { FaRegUser } from 'react-icons/fa';
import '../pagestyle/profile.css'
function Profile() {
  return (
    <div>
      <Hader head={"User Profile"} />
      <div className='profile_container'>
        <div className='first'>
          {/* <h1>name</h1> */}
          <h1><FaRegUser />User Name</h1>
          <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="user profile image" />
           <h4>Emailaddress.@gmail.com</h4>
        </div>
        <div className='second'>
          <h5>address:</h5>
          <p>nnjb  xadssmjj <br />hsa  xjjn</p>
          <p>Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dignissimos vel. Magnam asperiores aut facere odio officia culpa accusamus dicta recusandae molestiae corporis amet, inventore dolorem qui ratione harum voluptate?</p>
          <p>Mobile:5247866513</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
import React from 'react'

function Input({label,type}) {
  return (
    <div>
        <label htmlFor="">{label}:</label>
        <input type={type} /> 

    </div>
  )
}

export default Input
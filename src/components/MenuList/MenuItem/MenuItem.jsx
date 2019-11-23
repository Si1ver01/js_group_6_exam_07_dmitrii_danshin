import React from 'react'

const MenuItem = ({name,price,icon}) => {
  return (
    <div className='d-flex border border-warning rounded w-50 my-1'>
      <i className={icon}></i>
      <div className='d-flex flex-column'>
  <span>{name}</span>
        <span>Price : {price} kgs</span>
      </div>
      
    </div>
  )
}

export default MenuItem

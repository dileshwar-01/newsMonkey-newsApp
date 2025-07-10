import React from 'react'
import loading from './loadingg.gif'
 const Spinner =  ()=> {
    return (
      <div className='text-center'>
        <img src={loading} className='my-3' alt="loading" height={80} />
      </div>
    )
  
}
export default Spinner
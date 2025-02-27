import React from 'react'
import error from './../../assets/images/error.svg'
function Error() {
  return (
    <div className='w-full  flex justify-center items-center pt-2'>
      <img className='w-2/5' src={error} alt="error-404" />
    </div>
  )
}

export default Error

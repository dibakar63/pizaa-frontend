import React from 'react'

const Error = ({error}) => {
  return (
    <div className='error'>
      <div className="alert alert-danger" role="alert" style={{height:"100px",width:"200px",marginTop:"100px",textAlign:'center'}}>
  {error}
</div>
    </div>
  )
}

export default Error

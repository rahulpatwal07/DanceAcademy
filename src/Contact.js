import React from 'react'

export default function Contact() {
  return (
    <div>
      <form className='w-75 mx-auto my-4'>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="xyz"/>
</div> 
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> 
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div >
    <button className='btn btn-primary'>Send</button>
</div>
      </form>
    </div>
  )
}

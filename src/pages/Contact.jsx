import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <h3>get in touch</h3>
        <div className="body_contact">
            <div className="row grid">
                <div className="left part">
                    <h4>First Name</h4>
                    <input type="text" />
                </div>
                <div className="right part">
                <h4>Last Name</h4>
                    <input type="text" />
                </div>
            </div>
            <div className="row">
                <h4>Email</h4>
                <input type="text" />
            </div>
            <div className="row">
                <h4>subject</h4>
                <input type="text" />
            </div>
            <div className="row">
            <h4>message</h4>
                <textarea></textarea>
            </div>
            <div className="row">
                <button className='btn'>send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
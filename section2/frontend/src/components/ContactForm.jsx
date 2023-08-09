import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-75'>
        <div className='card' style= {{marginTop:'100px', marginLeft: '300px'}}>
            <div className='card-body'>
                <h3 className='text-center'>Contact Us</h3>
                <hr />
                <form>
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control mb-3" name="name"/>

                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control mb-3" name="email"/>

                    <label htmlFor="">Phone No.</label>
                    <input type="number" className="form-control mb-3" name="phone-no"/>

                    <label htmlFor="">Message For Us</label>
                    <input type="textarea" className="form-control mb-3" name="texrarea"/>

                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm;
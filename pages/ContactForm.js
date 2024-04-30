import React, { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
            console.log(value); 
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "subject") {
            setSubject(value);
        } else if (name === "message") {
            setMessage(value);
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
            <form className="col-md-9 m-auto" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="inputname">Name</label>
                        <input value={name} onChange={handleChange} type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label htmlFor="inputemail">Email</label>
                        <input value={email} onChange={handleChange} type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputsubject">Subject</label>
                    <input value={subject} onChange={handleChange} type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Subject" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputmessage">Message</label>
                    <textarea value={message} onChange={handleChange} className="form-control mt-1" id="message" name="message" placeholder="Message" rows="8"></textarea>
                </div>
                <div className="row">
                    <div className="col text-end mt-2">
                        <button type="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default ContactForm

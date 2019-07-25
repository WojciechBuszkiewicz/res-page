import React from 'react'
import img from '../img/contactimg.jpg'

const Contact = () => {

    return (<div className='contact'>
        <h2>Contact</h2>
        <div className='contact-text'>
            <h3>Adress</h3>
            <div></div>
            <p><span>Street: </span><strong>2208  Hillview Street</strong></p>
            <p><span>City: </span><strong>Westgate</strong></p>
            <p><span>State: </span><strong>IA</strong></p>
            <p><span>State Full: </span><strong>Iowa</strong></p>
            <p><span>Zip Code: </span><strong>50681</strong></p>
            <p><span>Phone Number: </span><strong>803-795-1147</strong></p>
        </div>
        <div className='contact-image'>
            <img src={img} alt="contact" />
        </div>
    </div>);
}

export default Contact;
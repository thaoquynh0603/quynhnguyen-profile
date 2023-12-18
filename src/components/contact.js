import './style/App.css';
import './style/contact.css';
import Form from 'react-bootstrap/Form';
import React, { useRef, useState} from 'react';
import { AiOutlinePhone , AiOutlineMail, AiOutlineLinkedin, AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineDownload } from 'react-icons/ai';
import Data from './dataresume.json'
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8n5yl8u', 'template_az5jcvp', form.current, 'zfgKxIz3bAX9piMVQ')
        .then((result) => {
            console.log(result.text);
            setIsSuccess(true);
            setIsFailure(false);
            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);
        }, (error) => {
            console.log(error.text);
            setIsSuccess(false);
            setIsFailure(true);
            setTimeout(() => {
                setIsFailure(false);
            }, 3000)
        });
    };
    return (
        <div class="grid" id='contact'>
            <div class="whole">               
                <div class="body">
                    <div class='contact'>
                        <h1 class='contact title'> Contact </h1>
                        <div class='contact-section grid_row'>
                            <div class='contact-information-container'>
                                <div class='contact-information'>
                                    <div class='contact-information-item' id='info-phone'>  
                                        <AiOutlinePhone class='contact-icon' style={{color:'#FDB600', 'font-size':'35px','padding-right':'10px'}} /> 
                                        <div class='more-contact-detail'> {Data.phone} </div>
                                    </div>
                                    <div class='contact-information-item' id='info-email'> 
                                        <AiOutlineMail class='contact-icon' style={{color:'#FDB600', 'font-size':'35px','padding-right':'10px'}} /> 
                                        <div class='more-contact-detail'>  <a href={Data.email} target='_blank'> {Data.email} </a> </div>
                                    </div>
                                    <div class='contact-information-item' id='info-linkedin'>
                                        <AiOutlineLinkedin class='contact-icon' style={{color:'#FDB600', 'font-size':'35px','padding-right':'10px'}} />
                                        <div class='more-contact-detail'>  <a href={Data.linkedin_link} target='_blank'> {Data.linkedin} </a> </div>
                                    </div>
                                </div>
                                <a id='cv_download' href={Data.cv_path}> <AiOutlineDownload style={{'font-size':'25px','padding-right':'5px'}} /> Download my CV in PDF </a>
                            </div>
                            <div class='contact-form'>
                                <div class='contact-form-main'>
                                    <Form ref={form} onSubmit={sendEmail}>
                                    <Form.Group className="mb-3" controlId="name" >
                                            <Form.Control class="form-control" type="name" style={{ width: '100%', 'justify-content': 'space-between' }} placeholder="Name" name="name"/>
                                        </Form.Group>
                                    <Form.Group className="mb-3" controlId="contact" class='contact-email-phone text_form'>  
                                        <Form.Group className="mb-3" controlId="phone" class='form-contact-phone form-contact-container' >
                                            <Form.Control class="form-control form-contact" type="phone" placeholder="Phone number" name="phone"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="Email" class='form-contact-email form-contact-container' > 
                                            <Form.Control class="form-control form-contact" type="email" placeholder="Email address" name="email"/>
                                        </Form.Group>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="message" >
                                        <textarea class="form-control"  id="exampleFormControlTextarea1" placeholder="Let's get in touch" name="message"></textarea>
                                    </Form.Group>
                                    <button class='button' type="submit">
                                        Submit
                                    </button>
                                    {isSuccess && <span className={`noti-success ${isSuccess ? 'show' : ''}`}> <AiOutlineCheckCircle /> Thank you for getting in touch!</span>}
                                    {isFailure && <span className={`noti-failure ${isFailure ? 'show' : ''}`}> <AiOutlineCloseCircle /> Oops! There is an error.</span>}
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

import React, { useState, useEffect } from "react";

import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";
import "./HomeContact.scss";

const HomeContact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name:'',
        email:'',
        message:''
    })
    const [userMessage, setUserMessage] = useState()
    const contactEndPoint = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
    
    useEffect(() => {
        

    },[])


    const handleChange = ({ target: { name, value }}) => {
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }))
    }
    
    const valid = () => {
        const err = {
            name: '',
            email: '',
            message: ''
        };

        const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (form.name.length < 1 || form.name.indexOf(' ') > 0) {err.name = 'Name is required and shall exist as a single word';}
        if (!(EMAIL_REGEX.test(form.email))) {err.email = 'Not valid email';}
        if (form.message.length < 120) {err.message = 'Message is to short';}
       
        if (Object.values(err).find(el => !!el)) {
            setErrors(err)
            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!valid()) {
            return
        } else {
            // setUserMessage ({
            //     name: form.name,
            //     email: form.email,
            //     message: form.message
            // })
            fetch(`${contactEndPoint}`, {
                method: "POST",
                body: JSON.stringify({...form}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(resp => console.log(resp))
                .catch(err => console.log(err));
        }
    }

    

    return(
        <section id="contact">
            <div className="container">
                <div className="contact">
                    <div className="contact_form">
                        <div className="contact_form_details">
                            <p className="contact_form_title">
                                Contact Us
                            </p>
                            <div className="contact_form_inputs">
                                <form method="post" onSubmit={handleSubmit}>
                                    <div className="form_credentials">
                                        <div className="form_credentials_name">
                                            <label>Your name</label>
                                            <input name="name" value={form.name} onChange={handleChange}/>
                                            <div className="form_error">{errors.name}</div>
                                        </div>
                                        <div className="form_credentials_email">
                                            <label>Your email</label>
                                            <input name="email" value={form.email} onChange={handleChange}/>
                                            <div className="form_error">{errors.email}</div>
                                        </div>
                                    </div>
                                    <div className="form_message">
                                        <label>Your message (min. 120 letters)</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} />
                                        <div className="form_error">{errors.message}</div>
                                    </div>
                                    <div className="form_btn">
                                        <button className="form_btn_sub" type="submit">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <p className="footer_copyrights">Copyright by Coders Lab</p>
                        <div className="footer_icons">
                            <a href="http://facebook.com"><div className="footer_icon-fb"><img src={Facebook} alt="Facebook" /></div></a>
                            <a href="http://instagram.com"><div className="footer_icon-inst"><img src={Instagram} alt="Instagram" /></div></a>
                        </div>
                    </footer>     
                              
                </div>
            </div>
        </section>
    )
}

export default HomeContact;
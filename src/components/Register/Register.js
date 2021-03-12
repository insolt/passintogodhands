import React, { useState } from "react";

import HomeLogin from "../HomeLogin";
import HomeNav from "../HomeNav";
import LoginItem from "../CommonComp/LoginItem";

import "./Register.scss";

const Register = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });
    const [errors, setErrors] = useState({
        email:'',
        password:'',
        repeatPassword: ''
    })
    const [registeredUser, setRegisteredUser] = useState()
    

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
            email: '',
            password: '',
            repeatPassword: ''
        };

        const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        
        if (!(EMAIL_REGEX.test(form.email))) {err.email = 'Not valid email';}
        if (form.password.length < 6) {err.password = 'Password is to short';}
        if (form.repeatPassword.length < 6) {err.repeatPassword = 'Password is to short';}
        if (!(form.password === form.repeatPassword)) {err.repeatPassword = 'Passwords are not identical';}
       
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
            setRegisteredUser ({
                email: form.email,
                password: form.password,
                repeatPassword: form.repeatPassword
            })
        }
    }

    console.log(registeredUser);

    return(
        <header id="register_start">
            <div className="container">
                <div className="register_header">
                    <div className="register_guide">
                        <div className="register_guide_menus">
                            <section className="register_login">
                                <HomeLogin />
                            </section>
                            <nav className="register_nav">
                                <HomeNav />
                            </nav>
                        </div>  
                    </div> 
                    <div className="register_form">
                        <div className="register_form_title">
                            <p>Login</p>
                        </div>
                        <div className="register_form_inputs">
                            <form>
                                <div className="register_form_credentials">
                                    <div className="register_form_credentials_email">
                                        <label>Email</label>
                                        <input name="email" value={form.email} onChange={handleChange}/>
                                        <div className="register_form_error">{errors.email}</div>
                                    </div>
                                    <div className="register_form_credentials_password">
                                        <label>Password</label>
                                        <input type="password" name="password" value={form.password} onChange={handleChange}/>
                                        <div className="register_form_error">{errors.password}</div>
                                    </div>
                                    <div className="register_form_credentials_repeatPassword">
                                        <label>Repeat password</label>
                                        <input type="password" name="repeatPassword" value={form.repeatPassword} onChange={handleChange}/>
                                        <div className="register_form_error">{errors.repeatPassword}</div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="register_btns">
                            <LoginItem text="Log in" to="/login" />
                            <button className="register_form_btn_sub" onClick={handleSubmit}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Register;
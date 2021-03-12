import React, { useState } from "react";

import HomeLogin from "../HomeLogin";
import HomeNav from "../HomeNav";
import LoginItem from "../CommonComp/LoginItem";
import "./Login.scss";

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email:'',
        password:''
    })
    const [loggedUser, setLoggedUser] = useState()
    

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
            password: ''
        };

        const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        
        if (!(EMAIL_REGEX.test(form.email))) {err.email = 'Not valid email';}
        if (form.password.length < 6) {err.password = 'Password is to short';}
       
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
            setLoggedUser ({
                email: form.email,
                password: form.password
            })
        }
    }
    console.log(loggedUser);
    return(
        <header id="login_start">
            <div className="container">
                <div className="login_header">
                    <div className="login_guide">
                        <div className="login_guide_menus">
                            <section className="login_login">
                                <HomeLogin />
                            </section>
                            <nav className="login_nav">
                                <HomeNav />
                            </nav>
                        </div>  
                    </div> 
                    <div className="login_form">
                        <div className="login_form_title">
                            <p>Login</p>
                        </div>
                        <div className="login_form_inputs">
                            <form>
                                <div className="login_form_credentials">
                                    <div className="login_form_credentials_email">
                                        <label>Email</label>
                                        <input name="email" value={form.email} onChange={handleChange}/>
                                        <div className="login_form_error">{errors.email}</div>
                                    </div>
                                    <div className="login_form_credentials_password">
                                        <label>Password</label>
                                        <input type="password" name="password" value={form.password} onChange={handleChange}/>
                                        <div className="login_form_error">{errors.password}</div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="login_btns">
                            <LoginItem text="Sign in" to="/register" />
                            <button className="login_form_btn_sub" onClick={handleSubmit}>Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Login;
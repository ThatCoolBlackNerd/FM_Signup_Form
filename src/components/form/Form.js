import React, { Component } from 'react';
import Emessage from './emessage';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fname: {
                value: "",
                changed: false
            },
            lname: {
                value: "",
                changed: false
            },
            email: {
                value:"",
                changed: false
            },
            pword: {
                value: "",
                changed: false
            }
        }
    }

    updateFirstName = (name) => {
        this.setState({
            fname: {value: name, changed: true}
        })
    }

    updateLastName = (name) => {
        this.setState({
            lname: {value: name, changed: true}
        })
    }

    updateEmail = (mail) => {
        this.setState({
            email: {value: mail, changed: true}
        })
    }

    updatePassword = (pass) => {
        this.setState({
            pword: {value: pass, changed: true}
        })
    }

    validateFirstName() {
        let fname = this.state.fname.value.trim();

        if (fname.length === 0) {
            return 'First Name cannot be empty';
        }
    }
    
    validateLasttName() {
        let lname = this.state.lname.value.trim();

        if (lname.length === 0) {
            return 'Last Name cannot be empty';
        }
    }

    validateEmail() {
        let email = this.state.email.value.trim();

        if (email.length === 0) {
            return 'Email cannot be empty';
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false ) {
            return 'Looks like this is not an email';
        }
    }

    validatePassword() {
        let pword = this.state.pword.value.trim();

        if (pword.length === 0) {
            return 'Password cannot be empty'
        } else if (pword.length < 6 || pword.length > 72) {
            return 'Password must be between 6 and 72 characters long';
        } else if (!pword.match(/[0-9]/)) {
            return 'Password must contain at least one number';
        }
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        const url = 'https://signup-form-api.herokuapp.com/api/v1/users';
        let newUser = {
            "first_name": this.state.fname.value.trim(),
            "last_name": this.state.lname.value.trim(),
            "email": this.state.email.value.trim(),
            "password": this.state.pword.value.trim()
        }
        console.log(newUser);

        fetch(url, {
              method: 'POST',
              body: JSON.stringify(newUser),
              headers: {
                'content-type': 'application/json',
              }
            })
              .then(res => {
                if (!res.ok) {
                  return res.json().then(error => {
                    throw error
                  })
                }
                return res.json()
              })
              .then(data => {
                alert(`${data.first_name}, thank you for your submission`);
                console.log(data);
                  this.setState({
                    fname: {value: '', changed: false},
                    lname: {value: '', changed: false},
                    email: {value: '', changed: false},
                    pword: {value: '', changed: false}
                  });
              })
              .catch(error => {
                alert(`${error}: Please re-submit your form`);
              })
    }

    render() {
        const fnameError = this.validateFirstName();
        const lnameError = this.validateLasttName();
        const pwordError= this.validatePassword();
        const emailError = this.validateEmail();

        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        name='fname' 
                        id='fname' 
                        placeholder='First Name' 
                        value={this.state.fname.value} 
                        onChange={e=>this.updateFirstName(e.target.value)} 
                        required
                        />
                    {this.state.fname.changed && <Emessage message={fnameError} />}
                    <input 
                        type='text' 
                        name='lname' 
                        id='lname' 
                        placeholder='Last Name' 
                        value={this.state.lname.value} 
                        onChange={e=>this.updateLastName(e.target.value)} 
                        required
                        />
                    {this.state.lname.changed && <Emessage message={lnameError} />}
                    <input 
                        type='email' 
                        name='email' 
                        id='email' 
                        placeholder='Email Address' 
                        value={this.state.email.value} 
                        onChange={e=>this.updateEmail(e.target.value)} 
                        required
                        />
                    {this.state.email.changed && <Emessage message={emailError} />}
                    <input 
                        type='password' 
                        name='password' 
                        id='password' 
                        placeholder='Password' 
                        value={this.state.pword.value}
                        onChange={e=>this.updatePassword(e.target.value)}  
                        required
                        />
                    {this.state.pword.changed && <Emessage message={pwordError} />}
                    <input 
                        type='submit' 
                        name='submit' 
                        id='submit' 
                        value='CLAIM YOUR FREE TRIAL'
                        />
                </form>
                <footer>
                    By clicking the button you are agreeingto our <span className='tas'>Terms and Services</span>
                </footer>
            </div>
        )
    }
}

export default Form

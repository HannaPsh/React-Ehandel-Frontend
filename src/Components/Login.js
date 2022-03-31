import React from 'react';

import './Loginsignup.css';
class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
    }
    render(){
        return(
            <div className='div-login'>

                <div>
                    <form onSubmit = {this.handleSubmit}>
                    <div><label for="Email">Email</label>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        </div>
                  
                        <label for="Password">password</label>
                        <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Log In</button>
                        <div className="register-text">
          <p>
            Not a user? Register <a href="Signup">Here</a>
          </p>
        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
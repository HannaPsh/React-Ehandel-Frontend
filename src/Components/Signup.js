import React from 'react';

import './Loginsignup.css';
class Signup extends React.Component{
    state={
      username:'',
      lastname:'',
        email:'',
        pwd:'',

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

                    <div><label for="Username">username</label>
                        <input type='text' name='username' placeholder='username' required onChange={this.handleChange}/>
                        </div>
                      <div><label for="lastname">lastname</label>
                        <input type='text' name='lastname' placeholder='username' required onChange={this.handleChange}/>
                        </div>
                    <div><label for="InputEmail">Email</label>
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        </div>
                     <div>   
                     <label for="Password">password</label>
                        <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        </div>
                        <button onSubmit={this.handleSubmit}>Signup</button>
                        <div className="register-text">
         
        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;














 
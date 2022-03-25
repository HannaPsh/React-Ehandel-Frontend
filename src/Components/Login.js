
import React from 'react'



const login = () => {
    return (
     <>
      <div class="login-body">
          <button className="btn">
              <span className= "fa fa-google me-2">Sign in with google</span>

          </button>
      <form>
  <div class="Email">
    <label for="inputEmail1">Email address</label>
    <input type="email" class="email-chek" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="Password">
    <label for="InputPassword1">Password</label>
    <input type="password" class="password-check" id="InputPassword1" placeholder="Password"/>
  </div>
  <div class="checkbox">
    <input type="checkbox" class="checkbox-input" id="Check1"/>
    <label class="checkbox-label" for="Check1">Check me out</label>
  </div>
  <button type="submit" class="btn-outine-primary">Login</button>
</form>
      </div>
   
      
    
  
     </>
    )
}

export default login
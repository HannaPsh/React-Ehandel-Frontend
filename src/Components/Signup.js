import React from 'react'

const Signup = () => {
    return (
       <>



      <div class="Signup-body">
          <button className="btn">
              <span className= "fa fa-google me-2"
              > Sign Up with google</span>

          </button>
      <form>
  <div class="Username">
    <label for="InputUsername">Username</label>
    <input type="email" class="Email" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="Password">
    <label for="InputPassword1">Password</label>
    <input type="password" class="password chek" id="InputPassword1" placeholder="Password"/>
  </div>
  <div class="checkbox">
    <input type="checkbox" class="check-input" id="Check1"/>
    <label class="check-label" for="Checkbox1">Check me out</label>
  </div>
  <button type="submit" class="btn-outine-primary">Regsiter</button>
</form>
      </div>
   
   
     </>
    )
}


       
   
export default Signup;


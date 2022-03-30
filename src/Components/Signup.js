import React from 'react'
import './Loginsignup.css';



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
    <input type="username" class="Username" id="InputUsername" aria-describedby="Userhelp" placeholder="Enter Username"/>
    
  </div>
  <div class="Lastname">
    <label for="InputLastname">Lastname</label>
    <input type="Lastname" class="Lastname" id="InputLastname" aria-describedby="Lasthelp" placeholder="Enter Lastname"/>
    
  </div>
  <div class="Email">
    <label for="InputEmail">Email</label>
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


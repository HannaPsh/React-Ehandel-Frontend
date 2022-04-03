import { useState, useEffect } from 'react';
import React from 'react';
import './Loginsignup.css';
import 'https://kit.fontawesome.com/a076d05399.js';

export default function Login() {
  const [email, setEmail] = useState();
  const [name, setName] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    let req = await fetch('http://127.0.0.1:5000/users/');
    let data = await req.json();
    for (let element in data) {
      if (
        email === data[element].email &&
        password === data[element].password
      ) {
        setSubmitted(true);
        setName(data[element].name);
        console.log(password + ' ' + data[element].password);
        localStorage.setItem('user', JSON.stringify(data[element]));

        return;
      } else {
        setSubmitted(false);
        setError(true);
        console.log(password + ' ' + data[element].password);
        console.log(data);
      }
    }
  }
  useEffect(() => {
    if (submitted) {
      console.log('it works!');
      localStorage.setItem('submitted', JSON.stringify(submitted));
    }
  }, [submitted]);

  return (
    <>
      {' '}
      {submitted ? (
        (window.location.href = '/')
      ) : (
        <section>
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <br />

            <label htmlFor="email">Email:</label>

            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Login</button>
            {error && (
              <div>
                <br />
                <span>Invalid email or password!</span>
              </div>
            )}

            <p id="one">
              Not yet a User?
              <br />
              <span className="line">
                <a href="Signup">Sign up now </a>
              </span>
            </p>
          </form>
        </section>
      )}
    </>
  );
}

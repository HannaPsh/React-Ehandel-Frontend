import { useState, useEffect } from 'react';
import './Loginsignup.css';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      console.log('it works!');
      localStorage.setItem('submitted', JSON.stringify(submitted));
    }
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const person = { name, email };
    localStorage.setItem('user', JSON.stringify(person));

    await axios.post(`http://127.0.0.1:5000/users/`, {
      email,
      name,
      password,
    });
  };

  return (
    <>
      {submitted ? (
        <section>
          <h1>Thank you for Registration</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <br />
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <br />
            <label htmlFor="emails">Email:</label>
            <input
              type="text"
              id="emails"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
            <div>
              <button>Signup</button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};
export default Signup;

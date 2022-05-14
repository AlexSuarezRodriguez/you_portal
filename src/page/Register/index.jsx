import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [menError, setMenError] = useState();
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMenError('');
    try {
      await signUp(user.email, user.password);
      navigate('/');
    } catch (error) {
      setMenError(error.message);
    }
  };

  return (
    <div className="bg-slate-300 h-screen text-black flex-column">
      {menError && <p>{menError}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="youremail@company.com"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*********"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>

    </div>
  );
}

export default Register;

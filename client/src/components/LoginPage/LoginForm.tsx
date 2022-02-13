/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../store/actions/userActions";
// @ts-ignore: Unreachable code error
const LoginForm = () => {
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <main className='form-signin text-center d-flex justify-content-center mt-5 align-items-center col-12'>
      <form className='col-3'>
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            onChange={(e) => setPass(e.target.value)}
            value={password}
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        <button
          className='w-100 btn btn-lg btn-primary'
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            dispatch(userLogin({ email, password }));
            setEmail("");
            setPass("");
            navigate("/home");
          }}>
          Sign in
        </button>
      </form>
    </main>
  );
};

export default LoginForm;

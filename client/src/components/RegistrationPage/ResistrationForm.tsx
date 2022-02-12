/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { redirect } from "../../helpres/redirect";
import { userRegistation } from "../../store/actions/userActions";
import InputItem from "../common/Input/InputItem";

const RegistrationForm = () => {
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const dispatch = useDispatch();
  const navigator = useNavigate();
  return (
    <main className='form-signin text-center d-flex justify-content-center'>
      <form className='col-6'>
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
        <InputItem
          value={email}
          onChangeEvent={setEmail}
          type='text'
          className='form-control'
          id='floatingInput'
          placeholder='name@example.com'
          label='enter your e-mail'
        />
        <InputItem
          value={name}
          onChangeEvent={setName}
          type='text'
          className='form-control'
          id='floatingInput'
          placeholder='your first name'
          label='your first name'
        />
        <InputItem
          value={surName}
          onChangeEvent={setSurName}
          type='text'
          className='form-control'
          id='floatingInput'
          placeholder='your last name'
          label='your last name'
        />
        <InputItem
          onChangeEvent={setPass}
          value={password}
          type='password'
          className='form-control'
          id='floatingPassword'
          placeholder='Password'
          label='Password'
        />
        <button
          className='w-100 btn btn-lg btn-primary'
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            dispatch(userRegistation({ email, password, name, surName }));
            setPass("");
            setEmail("");
            setName("");
            setSurName("");
            navigator("/login");
          }}>
          Sign up
        </button>
      </form>
    </main>
  );
};

export default RegistrationForm; /* eslint-disable react-hooks/rules-of-hooks */

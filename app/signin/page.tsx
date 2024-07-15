'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Sigin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleClick = () => {
    if (email === 'JohnDoe@gmail.com' && password == '123456') {
      router.push('/add');
    } else {
      toast.error('Incorrect email or passowrd!');
    }
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <div className="siginContainer">
        <h3 className="center-text">Sign in </h3>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            className="contactinputs"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />{' '}
          <br />
          <input
            type="password"
            className="contactinputs"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            autoComplete="on"
          />{' '}
          <br />
          <button
            className="btn btn-dark"
            style={{ width: '100%', marginTop: '8px' }}
            onClick={() => handleClick()}
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

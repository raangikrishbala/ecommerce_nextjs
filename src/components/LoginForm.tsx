'use client';

import { useState, FormEvent } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login with:', email);
  };

  return (
    <form className="mb-0" onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="email" className="font-weight-normal">
          Enter mobile number or email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter mobile number or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-2">
        <label className="font-weight-normal small text-muted">
          By continuing, you agree to Megastore&apos;s{' '}
          <a href="/terms">Terms of Use</a> and{' '}
          <a href="/privacy">Privacy Policy</a>.
        </label>
      </div>

      <div className="form-footer mb-0">
        <button
          type="submit"
          className="btn btn-md btn-primary w-100 form-footer-right font-weight-normal text-transform-none mr-0"
        >
          Continue
        </button>
      </div>

      <div className="text-center mt-3">
        <label className="font-weight-normal m-0 p-0">
          <a href="/register">
            New to Megastore? Create an account
          </a>
        </label>
      </div>
    </form>
  );
}

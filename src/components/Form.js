import React from 'react';

export default function Form(props) {
  const { handleSubmit, handleChange, values } = props;
  const { email, password } = values;
  return (
    <div className='ui form success'>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label>Email:</label>
          <input
            type='text'
            name='email'
            placeholder='email'
            value={email}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            type='text'
            name='password'
            placeholder='password'
            value={password}
            onChange={handleChange}
          />
        </div>
        {/* <div className='ui success message'>
          <div className='header'>Sign up successfully!</div>
          <p>You're now a player</p>
        </div> */}
        <button className='ui submit button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

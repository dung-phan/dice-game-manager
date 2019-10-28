import React from 'react';

export default function Form(props) {
  const { handleSubmit, handleChange, values } = props;
  const { email, password } = values;
  return (
    <form onSubmit={handleSubmit}>
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
      <button type='submit'>Submit</button>
    </form>
  );
}

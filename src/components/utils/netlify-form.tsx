import React from 'react';
import { css } from '@emotion/core';

const form = css({
  width: `100%`,
  maxWidth: `800px`,
  margin: `0 auto`,
});

const label = css({
  display: `block`,
  width: `100%`,
  marginBottom: `1.6rem`,
});

const abbr = css({
  marginRight: `2rem`,
  textDecoration: `none`,
  color: `red`,
});

const input = css({
  width: `100%`,
});

const button = css({
  width: `100%`,
  display: `inline-block`,
  padding: `0.4em 1.6em`,
  fontSize: `0.8em`,
  color: `#fff`,
  textDecoration: `none`,
  userSelect: `none`,
  background: `blue`,
  border: `2px red solid`,
  boxShadow: `0 0 0 4px blue`,
});

// this form works only Netlify
const Component: React.FCX = () => (
  <form css={form} name='contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field'>
    <input type='hidden' name='form-name' value='contact' />
    <input type='hidden' name='bot-field' />
    <label htmlFor='name' css={label}>
      Name
      <span title='required' css={abbr}>
        *
      </span>
      <input
        type='text'
        className='form-control'
        name='name'
        placeholder='Name'
        maxLength={30}
        minLength={2}
        required
        autoComplete='name'
        css={input}
      />
    </label>

    <label htmlFor='mail' css={label}>
      Email
      <span title='required' css={abbr}>
        *
      </span>
      <input
        type='email'
        name='email'
        placeholder='Email'
        pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
        required
        autoComplete='email'
        css={input}
      />
    </label>

    <label htmlFor='message' css={label}>
      <p>Comment</p>
      <abbr title='required' />
      <textarea name='content' rows={8} required css={input} />
    </label>

    <button type='submit' css={button}>
      SEND
    </button>
  </form>
);

export default Component;

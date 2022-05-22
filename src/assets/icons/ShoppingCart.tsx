import React from 'react';

export default function ShoppingCart(props: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 8H8.5L9.84615 11.5M9.84615 11.5L16 27.5H39.5L45.5 11.5H9.84615Z'
        stroke='currentColor'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19 41.5C22.0376 41.5 24.5 39.0376 24.5 36C24.5 32.9624 22.0376 30.5 19 30.5C15.9624 30.5 13.5 32.9624 13.5 36C13.5 39.0376 15.9624 41.5 19 41.5ZM19 39.5C20.933 39.5 22.5 37.933 22.5 36C22.5 34.067 20.933 32.5 19 32.5C17.067 32.5 15.5 34.067 15.5 36C15.5 37.933 17.067 39.5 19 39.5Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M37 41.5C40.0376 41.5 42.5 39.0376 42.5 36C42.5 32.9624 40.0376 30.5 37 30.5C33.9624 30.5 31.5 32.9624 31.5 36C31.5 39.0376 33.9624 41.5 37 41.5ZM37 39.5C38.933 39.5 40.5 37.933 40.5 36C40.5 34.067 38.933 32.5 37 32.5C35.067 32.5 33.5 34.067 33.5 36C33.5 37.933 35.067 39.5 37 39.5Z'
        fill='currentColor'
      />
    </svg>
  );
}

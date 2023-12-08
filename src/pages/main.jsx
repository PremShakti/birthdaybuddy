



import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

const BirthdayEffect = () => {
    let { name } = useParams();
  return (
    <>
    <div className="birthday-message">
        <h1>
        <span className="happy-birthday">Happy Birthday {name} !</span>
      </h1>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
    </div>
    <div className='balloon1'><img src="/bp1.png" alt="happy birthday" /></div>
    </>
  );
};

export default BirthdayEffect;


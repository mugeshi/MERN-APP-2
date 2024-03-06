import React from 'react';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';

export default function Recovery() {
  return (
    <div className="container mx-auto">
      <Toaster className="top-centre" reverseOrder="false" />

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-3xl font-bold">Recovery</h4>
            <span className="py-4 text-xl w-2/3 text-center black">
              Enter OTP to recover password.
            </span>
          </div>

          <form className="py-9" onSubmit={(e) => { e.preventDefault(); }}>
            <div className="textbox flex flex-col items-center ">
              <div className="input" text-centre>
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6-digit OTP sent to your email address.
                </span>
                <input className={styles.textbox} type="text" placeholder='OTP' />
              </div>
              <button className={styles.btn} type='submit'>Recover</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Can't get OTP ? <button className='text-red-500'>Recover Now</button></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


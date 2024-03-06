import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import {Toaster} from 'react-hot-toast';
import {useFormik}  from 'formik'
import {passwordValidate} from '../helper/validate'

export default function Password() {


  const formik =useFormik({
    initialValues :{
      Password : 'admin123/'
    },
    validate:  passwordValidate, 
    validateOnBlur: false,
    validationOnChange: false,
    onSubmit : async values => {
      console.log(values)
    }
  })

  return (
    <div className="container mx-auto">

     
     <Toaster className="top-centre" reverseOrder="false" ></Toaster>


      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again</h4>
            <span className="py-4 text-xl w-2/3 text-center black">
              Explore More by connecting with
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={avatar} className={styles.profile_img} alt="avatar"/>
            </div>

            <div className="textbox flex flex-col items-center">
          <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='Password'/>
          <button className={styles.btn} type='submit'>Sign in</button>
            </div> 

            <div className="text-center py-4">
              <span className='text-gray-500'>Forgot password ? <Link className='text-red-500' to="/Recovery">Recover Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

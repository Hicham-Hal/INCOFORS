
import { Link, redirect } from "react-router-dom";
import customFetch from '../../utils/customFetch';
import '../Sign/sign up/signup.css';
import SubmitBtn from "../SubmitBtn";

import { toast } from 'react-toastify';
export const action=async({request})=>{
  const formData=await request.formData()
  const data=Object.fromEntries(formData)
  try{
    await customFetch.post('auth/register',data)
    toast.success('Registration successful')
    return redirect('/login')
  }catch(error){
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const Signup = () => {
  return (
    <div className="section-sign_up">
        <div className="content-sign_up">
            <h1>register</h1>
            <form action="/" method="post" className="input-form-sign_up">
                <div className='input-sign-up'>
                    <label htmlFor="id">username</label>
                    <input type="text" name="name" defaultValue="" />
                </div>
                <div className='input-sign-up'>
                    <label htmlFor="id">email</label>
                    <input type="email" name="email" defaultValue=""/>
                </div>
                <div className='input-sign-up'>
                    <label htmlFor="id">password</label>
                    <input type="password" name="password" />
                </div>
                <div className='input-sign-up'>
                    <label htmlFor="id">repeat password</label>
                    <input type="password" name="repeat-password" />
                </div>
                <SubmitBtn text="Register" />
            </form>
            <div className='new-account-sign-in'>
                <p>Already have an account? <Link to={'/login'}>Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup
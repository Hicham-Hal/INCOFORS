import FormRow from "../FormRow";
import SubmitBtn from "../SubmitBtn";
import customFetch from '../../utils/customFetch'
import { Form, Link ,redirect} from "react-router-dom";

import { toast } from 'react-toastify'
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
const Register = () => {

  return (
    <div className="relative  h-screen overflow-hidden bg-white ">
    <div className=" flex w-full">
    <div className="md:w-[50%] lg:w-[35%] 3xl:w-[30%] hidden md:block absolute h-full select-none ">
            <img className="w-full   h-full " src="/src/images/How Should a Mouthguard Fit_.jpg" alt="" />
           </div>
           <div className="w-full md:ml-[50%] lg:ml-[40%]">
           <div className="container mx-auto  px-0 lg:px-12      ">
        <div className="max-w-full select-none   sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 ">
          <Form method="post">
            <div className="flex flex-col pt-6 items-center">
            {/* <Logo2 className='h-[60px] w-[60px]' /> */}

            </div><br/>
            <div className="lg:px-16">
            <label htmlFor="id"><h2 className="text-black px-2 text-sm py-[6px]">Name</h2></label>
              <FormRow
                className="p-2 rounded-md    text-[14px] focus:outline-none font-sans bg-[#E8F0FE] w-full border-b-[1px] text-black"
                type="text"
                name="name"
                placeholder="Username"
                defaultValue=""
              />



              <label htmlFor="id "><h2 className="text-black px-2 pt-2 text-sm py-[6px]">Email</h2></label>
              <FormRow
                className="p-2 rounded-md    text-[14px] focus:outline-none font-sans bg-[#E8F0FE] w-full border-b-[1px] text-black"
                type="email"
                name="email"
                placeholder="Email address"
                defaultValue=""
              />
              <label htmlFor="id"><h2 className="text-black px-2 pt-2  text-sm py-[6px]">Password</h2></label>
              <FormRow
                className="p-2 rounded-md    text-[14px] focus:outline-none font-sans bg-[#E8F0FE] w-full border-b-[1px] text-black"
                type="password"
                name="password"
                placeholder="password"
              />


              <br/>
              <SubmitBtn text="Register" />
              <div className="pt-2 flex justify-center">
                <p className="text-black font-sans text-[14px] flex justify-end py-2">
                  Already have an account?
                  <Link
                    className="px-2  text-[#5B53FF] font-sans"
                    to='/login'
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </Form>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

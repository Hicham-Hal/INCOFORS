import FormRow from "../FormRow";
import SubmitBtn from "../SubmitBtn";
// import { useEffect } from "react";
import { Form, Link,redirect ,useActionData} from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
// import { useUserContext } from "../context/userContext";
export const action=async({request})=>{
  const formData=await request.formData()
  const data=Object.fromEntries(formData)
  const errors={msg:''}
  if(data.password.length < 3){
    errors.msg='passowrd too short'
    return errors;
  }
  try {
    const response = await customFetch.post('auth/login', data);
    const { data: responseData } = response;
    const { user } = responseData;

    toast.success('Login successful');
    if (user.role === 'admin') {
      return redirect('/ajouteformation');
    } else if (user.role === 'user') {
      return redirect('/inscriptions');
    }
  } catch (error) {
    const errorMsg = error?.response?.data?.msg || 'An unexpected error occurred';
    toast.error(errorMsg);
    return error;
  }

}
const Login = () => {
  const errors=useActionData()
//   const{user,fetchUser}=useUserContext()
// useEffect(()=>{
//   if(user){
//     fetchUser()
//   }
// },[])
  return (
    <div className="relative  h-screen overflow-hidden bg-white">
    <div className=" flex ">

           <div className="md:w-[50%] lg:w-[35%] 3xl:w-[30%] absolute h-full select-none">
            <img className=" w-full  h-full hidden md:block " src="/src/images/How Should a Mouthguard Fit_.jpg" alt="" />
           </div>
            <div className="w-full md:ml-[50%] lg:ml-[40%]">
            <div className="container mx-auto px-0 lg:px-12      ">
        <div className="max-w-full select-none    lg:max-w-6xl mx-auto px-8 lg:px-18 py-20 ">
            <Form method='post' >
            <div className="flex flex-col  items-center">
              {/* <Logo2 className='h-[60px] w-[60px]' /> */}
              <h2 className="text-black text-2xl font-normal  font-sans py-3">Welcome</h2>
              <p className="font-sans  text-[14px] p select-none text-black">
              Enter your email to get started.
              </p>
              {errors?.msg && <p style={{color:'red'}}>{errors.msg}</p>}
            </div>
            <div className="lg:px-16">
              <label htmlFor="id"><h2 className="text-black px-2 text-sm py-2">Email</h2></label>
              <FormRow
                className="p-2 rounded-md    text-sm focus:outline-none font-sans bg-[#E8F0FE] w-full border-b-[1px] text-black"
                type="email"
                name="email"
                id='id'
                placeholder="email"
                defaultValue=""
              />
            <div className="pt-2">
              <label htmlFor="id" ><h2 className="text-black px-2 text-sm py-2">password</h2></label>
              <FormRow
                className="p-2  rounded-md  text-sm focus:outline-none font-sans bg-[#E8F0FE] w-full border-b-[1px] text-black "
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
              <Link className="text-black font-sans text-sm flex justify-end py-4">
                Forgot your password?
              </Link>

              <SubmitBtn text="Login" request="login" />
              <div className="py-4 flex justify-center">
                <p className="text-black text-sm    font-sans">
                  don’t have an account ?
                  <Link
                    className="px-2  text-[#5B53FF]"
                    to='/register'
                  >
                    register
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

export default Login;

// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

// eslint-disable-next-line react/prop-types
const Login = ({setShowLogin}) => { 

  const {url,setToken} = useContext(StoreContext);

    const [currState, setCurrState] = useState("Sign Up")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    });

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) => {
      event.preventDefault();

      let newUrl = url;
      if(currState==="Login"){
        newUrl += "/api/user/login"
      } 
       else{
        newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl,data);

      if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token)
        setShowLogin(false);
        toast.success("Login Successful")
    }
    else{
      alert(response.data.message)
    }

  }



  return (
    <div className='login'> 
      <form className='popup' onSubmit={onLogin}>
        <div className="title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.close} alt="" />
        </div>
        <div className="input">
        {currState === "Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter your name' required />}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Give your e-mail' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required /> 
        </div>
        <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="condition">
        <input type="checkbox" required />
        <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>

        {currState==="Login"
        ?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login</span></p>
        }

      </form>
    </div>
  )
}

export default Login

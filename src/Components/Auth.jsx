import React, { useState } from 'react'
import { Form ,Button} from 'react-bootstrap'
import { Link ,useNavigate} from 'react-router-dom'
// import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allApis';
import Header from './Header';




function Auth({register}) {
  const [ isSignup,setIsSignup]=useState(false)
  const registerForm = register? true:false

  const[inputs,setInputs]=useState({
    name:"",email:"",password:""
  })
  const navigate=useNavigate()



  const handleRegister = async(e)=>{
    console.log(inputs);
    e.preventDefault()
    const{name,email,password}=inputs
    if(!name || !email || !password){
       toast.info("please fill the form completely")
    }else{
       //api call
       const res = await registerAPI(inputs)
       console.log(res);
       if(res.status===200){
         toast.success(`${res.data.name} has successfully registerd..`)
         //reset state
         setInputs({
          username:"",email:"",password:""
         })
         navigate('/login')

       }else{
          toast.warning(res.response.data)
       }
    }
 }

 const handleLogin = async(e)=>{
  e.preventDefault()
  const{email,password}=inputs
  if(!email || !password){
     toast.info("please fill the form completely")
  }else{
     //api call
     const res = await loginAPI({email,password})
     console.log(res);
     if(res.status===200){
        //save res
        // localStorage.setItem("existingUser",JSON.stringify(res.data.existingUser))
        // localStorage.setItem("Role",res.data.role)
        // sessionStorage.setItem("token",res.data.token)
        //reset state
       setInputs({
        email:"",password:""
       })
       navigate('/blogs')
       setIsSignup(true)
       
     }else{
        toast.warning(res.response.data)
     }
  }
}




// const sendRequest=async(type="login")=>{
// const res=await axios.post(`http://localhost:4000/${type}`,{
//   name:inputs.name,
//   email:inputs.email,
//   password:inputs.password
// }).catch(err=>console.log(err))
// const data=await res.data
// return data
// }

// const handleSubmit=(e)=>{
//   e.preventDefault()
//   console.log(inputs);
//   if(isSignup){
//     sendRequest("signup").then((data)=>console.log(data))

//   }else{
//     sendRequest().then((data)=>console.log(data))

//   }
// }

  return (
    < >


  <Header insideauth={true}/>    
    <div style={{width:'100%',height:'90vh'}} className='d-flex justify-content-center align-items-center'>
      <div style={{}} className='container w-50'>
        <div className='card shadow p-3 '>
        {/* <div className='d-flex mt-2 '  style={{textAlign:'center'}}> */}
                       {/* <span className='h1 text-center  m-3'>{isSignup?"Signup":"Login"}</span> */}
                 {/* </div> */}
          <div className='row align-items-center'>
          <div className='col-lg-6'>
              <img src="https://th.bing.com/th/id/R.1b409996f6a597430a11711de7ff965b?rik=fQfKCDItUUqT1Q&pid=ImgRaw&r=0" className='rounded-start w-100' alt="" />
           </div>
           <div  className='col-lg-6'>
            <div className='d-flex flex-column align-items-center'>
            <Form  className="text-light">
                  
                     {
                      registerForm&&
                     <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Control value={inputs.name} type="text" placeholder="Enter your name" onChange={(e)=>setInputs({...inputs,name:e.target.value})}  />
                 </Form.Group>
                    }
                 
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control value={inputs.email} type="email" placeholder="Enter your Email ID" onChange={(e)=>setInputs({...inputs,email:e.target.value})}  />
                 </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control value={inputs.password} type="password" placeholder="Enter password" onChange={(e)=>setInputs({...inputs,password:e.target.value})}  />
                 </Form.Group>

                 {
                  registerForm?
                  <div>
                  <Button onClick={handleRegister} variant='light'type='submit' size='lg'>Register</Button>
                  {/* <p className='mt-3 text-light'>Already have an account?<Link to={'/login'} className='btn-link text-light' >Login Here</Link></p> */}
                  </div>
                  :
                  <div>
                   <Button  onClick={handleLogin } variant='light'type='submit' size='lg'>Login</Button>
                  {/* <p className='mt-3 text-light'>New User?<Link to={'/register'} className='btn-link text-light'>Register Here</Link></p> */}
                  </div>
                 }

                 
              </Form>
            </div>

           </div>
          </div>

        </div>

      </div>

    </div>
    <ToastContainer
     position="top-right"
     autoClose={2000}
     theme="colored"
     />
    </>
   
  )
}

export default Auth
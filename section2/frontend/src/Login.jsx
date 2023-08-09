//  import { useFormik } from 'formik';
// import React from 'react'

//  const Login = () => {
//   //Initializing formik
//   const loginForm = useFormik({
//       initialValues:{
//         email : "",
//         password : ""
//       },
//       onSubmit : (values) => {
//         console.log(values);
//       }
//   });

//   return(
//     <div>
//       <div className='w-25'>

//       </div>
//     </div>
//   )

//  //return ()
//  }
//     <div className='body' style={{ width : '100%', height : '90vh',backgroundColor : 'lightPink'}}>  
//         <div className = 'row' style = {{display : 'flex', justifyContent : 'space-evenly'}}>
//         <div className = 'col-1' style = {{backgroundColor : 'ButtonShadow', width : '40vw', height : '70vh',
//           marginTop : '80px', borderRadius : '40px', border: '10px solid lightGrey'}} >
//            <h3 style = {{textAlign : 'center', fontFamily : 'fantasy', paddingTop : '30px'}}>Sign Up</h3>
//               <form onSubmit = {LoginForm.han}>
//               <h5 style={{marginTop : '30px'}}>Name:</h5>
//               <input type="text" style={{width : '80%'}}/>
//               <h5>Mobile No:</h5>
//               <input type="number" style={{width : '80%'}} />
//               <h5>Email Id:</h5>
//               <input type="email" style={{width : '80%'}}  />
//               <h5>Password:</h5>
//               <input type="password" style={{width : '80%'}} /> 
//               <br />
//               <button style = {{marginTop : '35px', width : '180px', height: '45px', marginLeft : '160px',
//                backgroundColor : 'lightpink', border: 'none', borderRadius: '15px', fontWeight: 'bold'}}>Sign UP</button>
//             </form>
// //         </div>
// //         <div className = 'col-2' style = {{backgroundColor : 'ButtonShadow', width : '40vw', height : '70vh',
// //          marginTop : '80px', borderRadius : '40px', border: '10px solid lightGrey'}}>
// //         <h3 style = {{textAlign : 'center', fontFamily : 'fantasy', paddingTop : '30px'}}>Login</h3>
// //              <h5 style={{marginTop : '30px'}}>User Name:</h5>
// //              <input type="text" style={{width : '80%'}}/>
// //              <h5>Email Id:</h5>
// //              <input type="email" style={{width : '80%'}} />
// //              <h5>Password:</h5>
// //              <input type="password" style={{width : '80%'}}  />
// //              <h5>Confirm Password:</h5>
// //              <input type="password" style={{width : '80%'}} /> 
// //              <br />
// //              <button style = {{marginTop : '35px', width : '180px', height: '45px', marginLeft : '160px',
// //               backgroundColor : 'lightpink', border: 'none', borderRadius: '15px', fontWeight: 'bold'}}>Login</button>

// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// export default Login;


import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is Required')
});



const Login = () => {

  // Initializing formik
  const loginForm = useFormik({
    initialValues: {
      email : "",
      password : ""
    },
    onSubmit : ( values ) => {
      console.log(values);
      // write code to submit form to server
    },
    validationSchema : LoginSchema
  });

  return (
    <div>
      <div className="w-25" >
        <div className="card" >
          <div className="card-body">
            <h3 className="text-center">Login Form</h3>
            <hr />

            <form onSubmit={loginForm.handleSubmit}>
              <label htmlFor="">Email Address</label>
              <span style = {{color:'red', fontSize : '0.7em', marginLeft:10}}> {loginForm.errors.email}*Email is required.</span>
              <input type="email" className="form-control mb-3" name="email" onChange={loginForm.handleChange} value={loginForm.values.email} />

              <label htmlFor="">Password</label>
              <span style = {{color:'red', fontSize : '0.7em', marginLeft:10}}> {loginForm.errors.email}*Password is required.</span>
              <input type="password" className="form-control mb-3" name="password" onChange={loginForm.handleChange} value={loginForm.values.password} />

              <button className="btn btn-primary w-100 mt-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
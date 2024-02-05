import {useFormik} from 'formik'
import * as YUP from 'yup'

function App() 
{
  const formik =useFormik({
    initialValues:{
      username:"",
      email:"",
      password:""
    },
    validationSchema:YUP.object({
      username:YUP.string()
      .max(10,"cannot excced 10 characters")
      .required("This field is required"),

      email:YUP.string()
      .required("This field is required"),

      password:YUP.string()
      .max(12,"Password should have maximum 12 characters")
      .min(6,"Password should have Minimum is 6 characters")

      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])/, "Password should contain 1 lower case, 1 uppercase, 1 number, 1 special character")

      .required("This field is required")


    }),
    onSubmit:(values)=>{
      alert(JSON.stringify(values))
    }
    
  })

    
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <label>Username:</label>
      <input type="text" name="username" placeholder="Enter UserName"
      onChange={formik.handleChange}
      value={formik.values.username}    
      />
      {formik.errors.username && <p style={{color:'red'}}>{formik.errors.username}</p>}


      <br/>
      <label>Email Id:</label>
      <input type="email" name="email" placeholder="Enter EmailId"
      onChange={formik.handleChange}
      value={formik.values.email}
      
      />
      {formik.errors.email && <p style={{color:'red'}}>{formik.errors.email}</p>}
      <br/>
      <label>Password:</label>
      <input type="password" name="password" placeholder="Enter Password"
     onChange={formik.handleChange}
     value={formik.values.password}
      />
      {formik.errors.password && <p style={{color:'red'}}>{formik.errors.password}</p>}
      <br/>
      <input type="submit"/>
    </form>
    </div>
  );
}

export default App;
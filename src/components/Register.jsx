import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const Register = () => {

  const { addNewUser, setLoggedInUser, users } = useContext(UserContext);

  const navigation = useNavigate();

  const handleSubmit = (values) => {
    let newUser = {
      ...values,
      id: Date.now(),
    }
    addNewUser(newUser)
    setLoggedInUser(newUser)
    navigation('/home');
  } 

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('This field must be filled.')
      .test('unique-username', 'This email is already taken, please choose a different one', value => !users.find(user => user.email === value)),
    password: Yup.string()
      .min(8, 'Password must be at least 8 symbols length.')
      .max(20, 'Password must be 20 characters or less.')
      .required('This field must be filled.'),
    passwordRepeat: Yup.mixed()
      .oneOf([Yup.ref('password'), null], 'Passwords must match.')
      .required('This field must be filled.')
  });

  return ( 
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordRepeat: '',
        }} 
        validationSchema={validationSchema}
          
        onSubmit= {(values, {resetForm} )=> {
          console.log(values);
          resetForm({values: ''})
          handleSubmit(values);
        }}
      >
        {({ errors, touched, values, setValues }) => (
          <div className='formContainer'>
            <h1>Fill out form to register</h1>
            <Form className='registerForm'>
              <label>eMail adress:
                <Field 
                  name='email'
                  value={values.email} 
                  onChange={(e)=>setValues({...values, email:e.target.value})}
                />
                {
                  errors.email && touched.email ? 
                    <span>{errors.email}</span>
                    : null
                }
              </label>
              <br />
              <label>Password (must be atleast 8 symbols):
                <Field 
                  type="password"
                  name='password'
                  value={values.password} 
                  onChange={(e)=>setValues({...values, password:e.target.value})}
                />
                {
                  errors.password && touched.password ? 
                    <span>{errors.password}</span>
                    : null
                }
              </label>
              <br />
              <label>Confirm password:
                <Field 
                  type="password"
                  name='passwordRepeat'
                  value={values.passwordRepeat} 
                  onChange={(e)=>setValues({...values, passwordRepeat:e.target.value})}
                />
                {
                  errors.passwordRepeat && touched.passwordRepeat ? 
                    <span>{errors.passwordRepeat}</span>
                    : null
                }
                </label>
                <button className="registerButton" type='submit'>Register</button>
            </Form>
          </div>
        )} 
      </Formik>
    </>
  );
}
 
export default Register;
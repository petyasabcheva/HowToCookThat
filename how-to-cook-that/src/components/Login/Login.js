import {auth} from '../../utils/firebase';
import {Link} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css'

const Login=({
     history
})=>{

    const initialValues = {
        email: ``,
        password: '',
      }
    
  const onSubmit = values => {
    auth.signInWithEmailAndPassword(values.email,values.password)
    .then(()=>{
        history.push('/');
    }).catch(error => console.log(error));
    }; 

    
  const validationSchema = Yup.object({
    email: Yup.string().required('Required').email('Invalid email'),
    password: Yup.string().required('Required'),
  })


    return(
        <section className="login">
          <div className="login-header">
          <h1>Login</h1>
          </div>
         <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form className="login-form">
            <div className="field">
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" id="email" />
            <ErrorMessage name='email' />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name='password'/>
          </div>
          <input className="submit-button" type="submit" value="Login" />
        </Form>
        </Formik>
        <p>You don`t have an account? 
        <Link to='/register'>  Register</Link>
        </p>
    </section>
    )} 
    
    
    export default Login;
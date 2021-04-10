import { auth } from '../../utils/firebase';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Register.css';

const Register = ({
    history,
}) => {
    const initialValues = {
        email: ``,
        password: '',
      }
    
  const onSubmit = values => {
    auth.createUserWithEmailAndPassword(values.email,values.password)
    .then(()=>{
        history.push('/');
    }).catch(error => console.log(error));
    }; 

    
  const validationSchema = Yup.object({
    email: Yup.string().required('Required').email('Invalid email'),
    password: Yup.string().required('Required'),
  })

    return (
        <section className="register">
          <div className="register-header">
          <h1>Register</h1>
          </div>
             <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form className="register-form">
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
          <input className="submit-button" type="submit" value="Register" />
        </Form>
        </Formik>
            <p>You have an account?
        <Link to='/login'>  Sign in</Link>
            </p>
        </section>
    )
}


export default Register;
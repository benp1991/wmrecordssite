import { Authenticator } from '@aws-amplify/ui-react';
import outputs from '../../../amplify_outputs.json';
import Footer from '../Footer/Footer';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { Link } from 'react-router-dom';

function Login() {
  Amplify.configure(outputs);

  const formFields = {
    signUp: {
      email: {
        placeholder: 'Email',
        label: 'Email',
        required: true,
      },
      name: {
        placeholder: 'Name',
        label: 'Name',
        required: true,
      },
      password: {
        placeholder: 'Password',
        label: 'Password',
        required: true,
      },
    },
  };

   return (
    <div>
      <div className="Login-Page">
        <div className='Page-Header-Container'>
          <h1 className='Page-Header'>Login</h1>
        </div>
        <Authenticator className='Autenticator-Page' formFields={formFields} >
          {({ signOut }) => {
            return (
              <div className='Autenticator-Page'>
                <Link to="/Home" key="Home">Home</Link>
                <button onClick={signOut}>Sign out</button>
              </div>
            );
          }}
        </Authenticator>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
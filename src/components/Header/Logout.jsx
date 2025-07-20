import { signOut } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import outputs from '../../../amplify_outputs.json';
import { useAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(outputs);

function Logout() {
  const navigate = useNavigate();
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/Home'); // Redirect to Home page after signing out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (authStatus !== 'authenticated') {
    return null; // Don't render the logout button if not authenticated
  }
  else if (authStatus === 'authenticated') {
    return (
      <div className="logout-button">
          <button type="button" onClick={handleSignOut}>
              Sign out
          </button>
      </div>
    );
  }
}

export default Logout;
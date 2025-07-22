import './HomePage.css';
import Footer from '../Footer/Footer';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useGetAuthData } from '../../hooks/useGetAuthData';

export default function HomePage(){
    const { authStatus , user  } = useAuthenticator((context) => [context.authStatus]);

    const getAuthData = useGetAuthData(authStatus);

    let authenticationstatus = "";
    if (authStatus === 'authenticated') {
        authenticationstatus = "Welcome back! "+ getAuthData.userName;
    }
    else {
        authenticationstatus = "Please log in";
    }
    
    return(
        <div >
            <div className="HomePage">
                <h1>{authenticationstatus}</h1>
                <p>Welcome to the new West Midlands Powerlifting Website</p>
            </div>
            <Footer />
        </div>
    )
}
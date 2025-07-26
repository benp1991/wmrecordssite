import './HomePage.css';
import Footer from '../Footer/Footer';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useGetAuthData } from '../../hooks/useGetAuthData';
import HomePageBlurb from './HomePageBlurb';
import HomePageBanner from './HomePageBanner';
import ParentLogos from './ParentLogos';
import WhatIsPowerlifting from './WhatIsPowerlifting';

export default function HomePage(){
    const { authStatus , user  } = useAuthenticator((context) => [context.authStatus]);

    const getAuthData = useGetAuthData(authStatus);

    let authenticationstatus = "";
    if (authStatus === 'authenticated') {
        authenticationstatus = "Welcome! "+ getAuthData.userName;
    }
    else {
        authenticationstatus = "";
    }
    
    return(
        <div >
            <HomePageBanner />
            <div className="HomePage">
                
                <h1>{authenticationstatus}</h1>
                <HomePageBlurb />
                <ParentLogos />
                
            </div>
            <WhatIsPowerlifting />
            <Footer />
        </div>
    )
}
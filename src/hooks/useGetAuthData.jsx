import {useState , useEffect } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';

export function useGetAuthData(authStatus) {
  const [authData, setAuthData] = useState({});

  async function fetchAuthData() {
    const session = await fetchAuthSession();
    let groups = [];
    let userName = '';
    try {
      groups = session.tokens.accessToken.payload['cognito:groups'];
      console.log('User groups in hook:', groups);
    } catch (error) {
      console.error('Error fetching user groups:', error);
    }
    try {
      userName = session.tokens.idToken.payload['name'];
    } catch (error) {
      console.error('Error fetching user name:', error);
    }

    setAuthData({ groups:groups, userName: userName });
  }

    useEffect(() => {
        fetchAuthData();
    }, [authStatus]);

  return authData;
}
import React, { useEffect } from 'react';
import { auth } from '@/app/firebase.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Import the auth module from firebase/compat
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      return false; // Prevent automatic redirect.
    },
    uiShown: function () {
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [ 
    {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
    }
  ],
  tosUrl: '<your-tos-url>',
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

const SignInScreen = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
      
      ui.start('#firebaseui-auth-container', uiConfig);
      
      
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Your Pantry</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
};

export default SignInScreen;

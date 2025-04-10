'use client';
import * as React from 'react';
import { SignInPage } from '@toolpad/core/SignInPage';
import LinearProgress from '@mui/material/LinearProgress';
import { Navigate, useNavigate } from 'react-router';
import { useSession } from '../SessionContext';
import {
  signInWithGoogle,
  signInWithCredentials,
} from '../firebase/auth';

export default function SignIn() {
  const { session, setSession, loading } = useSession();
  const navigate = useNavigate();

  if (loading) {
    return <LinearProgress />;
  }

  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <SignInPage
      providers={[
        { id: 'google', name: 'Google' },
        { id: 'credentials', name: 'Credentials' },
      ]}
      signIn={async (provider, formData, callbackUrl) => {
        let result;
        try {
          if (provider.id === 'google') {
            result = await signInWithGoogle();
          }
          if (provider.id === 'credentials') {
            const email = formData?.get('email');
            const password = formData?.get('password');

            if (!email || !password) {
              return { error: 'Email and password are required' };
            }

            result = await signInWithCredentials(email, password);
          }

          if (result?.success && result?.user) {
            // Convert Firebase user to Session format
            const userSession = {
              user: {
                name: result.user.displayName || '',
                email: result.user.email || '',
                image: result.user.photoURL || '',
              },
            };
            setSession(userSession);
            navigate(callbackUrl || '/', { replace: true });
            return {};
          }
          return { error: result?.error || 'Failed to sign in' };
        } catch (error) {
          return {
            error: error instanceof Error ? error.message : 'An error occurred',
          };
        }
      }}
    />
  );
}

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import React from 'react';

export default function App() {
  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <main style={{ padding: 16 }}>
          <h1>Welcome {user?.signInDetails?.loginId}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}

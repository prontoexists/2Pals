// amplify/auth/resource.ts
import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  // Email + password sign-in (no username)
  loginWith: {
    email: true,
  },

  // Optional but recommended: password policy & MFA toggles
  userAttributes: {
    email: {
      required: true,
      mutable: false,
    },
  },
  // Example extras you can turn on later:
  // multifactor: { mode: 'OFF' }, // 'ON' | 'OPTIONAL' | 'OFF'
  // passwordPolicy: { minLength: 8, requireLowercase: true, requireUppercase: true, requireNumbers: true, requireSymbols: true },
});

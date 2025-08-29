import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json'; // Vite lets you import JSON

Amplify.configure(outputs);

// (Optional) Try a quick call later with generateClient<Schema>()
console.log('Amplify is configured with:', outputs);

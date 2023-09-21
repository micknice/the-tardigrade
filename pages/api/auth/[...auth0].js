import {handleAuth} from '@auth0/nextjs-auth0';

console.log("secret", process.env.AUTH0_SECRET, 'secret!!!!')

export default handleAuth();
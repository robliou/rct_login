import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import AuthorizedApolloProvider from './AuthorizedApolloProvider';
import {Auth0Provider} from "@auth0/auth0-react";

const cache = new InMemoryCache()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
  domain="dev-7-8i89hb.us.auth0.com"
  clientId='IfWNFQUg2KxdrvalNnm3Y7pXHHiHMw8e'
   redirectUri='http://localhost:3000/home'
 
//Note- unfreeze above and freeze below when going from production to local testing!
// redirectUri='https://ddr-store.herokuapp.com/'
 
  audience='hasura'
>

<AuthorizedApolloProvider graphQLClientConfig={{ cache }}>


  <React.StrictMode>
    <App />
  </React.StrictMode>

  </AuthorizedApolloProvider>

  </Auth0Provider>,
   
  
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

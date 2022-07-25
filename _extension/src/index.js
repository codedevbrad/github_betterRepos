import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import ThemeContextWrapper from './app/app.contexts/context.theme';
import UserContextWrapper  from './app/app.contexts/context.auth';


import { clearHTMLInProduction } from './funcs.production/prod.clearHtml';

if ( process.env.NODE_ENV === 'development' ) {
  document.querySelector('html').classList.add('dev');
}

clearHTMLInProduction();

ReactDOM.render(
    <ThemeContextWrapper>
        <UserContextWrapper>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </UserContextWrapper>
    </ThemeContextWrapper> , 
    document.getElementById('root')
);
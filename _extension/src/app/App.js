import './App.scss';
import { useContext } from 'react';
import { ThemeContext } from './app.contexts/context.theme';
import { SetGithubColorThemeInProduction } from '../funcs.production/prod.setTheme';

import Authed from './app.authed/authed.main';

const DetermineApp = ( { type } ) => {
    // if not logged, modal.
    return (
        <div>

        </div>
    )
}

function App() {
  let { theme , changeTheme } = useContext( ThemeContext );

  SetGithubColorThemeInProduction( changeTheme );

  return (
    <div className={`App theme_${ theme } App_${ process.env.NODE_ENV === 'development' ? 'dev' : '' }`}>
        <Authed />
    </div>
  );
}

export default App;
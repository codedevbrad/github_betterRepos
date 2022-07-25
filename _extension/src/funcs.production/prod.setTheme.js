import { useEffect } from 'react';

const mutationCallback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type !== "attributes" ||
        mutation.attributeName !== "data-color-mode"
      ) {
        return
      }
      console.log('old:', mutation.oldValue)
      console.log('new:', mutation.target.getAttribute('data-color-mode') )
    }
  }
  
const ObserverGithubColorThemeChange = ( ) => {
  
      useEffect( ( ) => {
        
        let theme_Github = document.querySelector('html[data-color-mode]');
        if ( theme_Github ) {
           const observer = new MutationObserver(mutationCallback)
           observer.observe( theme_Github ,{ attributes: true } );
        }

      }, [ ] );
  }
  
const SetGithubColorThemeInProduction = ( changeTheme ) => {
      useEffect( ( ) => {
        // add color theme to app.
        if ( process.env.NODE_ENV === 'production' ) {

            let theme_Github = document.querySelector('html[data-color-mode]');
            if ( theme_Github ) {
              let theme = theme_Github.getAttribute('data-color-mode');
              changeTheme( theme );
            }
         }
      }, [ ] );
  }


export {
    ObserverGithubColorThemeChange , 
    SetGithubColorThemeInProduction
}
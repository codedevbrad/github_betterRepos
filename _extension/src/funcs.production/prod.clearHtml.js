

export const clearHTMLInProduction = (  ) => {
        
        if ( process.env.NODE_ENV === 'production' ) {
            // figure out if you're on the repos page.
            // https://github.com/codedevbrad?tab=repositories
            let windowHREF = window.location.href;
        
        
            const repos_body = document.querySelector('#user-repositories-list');
            repos_body.innerHTML = '';
        
            const repos_html = document.createElement('div');
        
            repos_html.id = 'root';
            
        
            if (repos_body ) {
            // document.querySelector('.UnderlineNav').innerHTML = '';
            document.querySelector("form[data-autosearch-results-container]").parentNode.parentNode.innerHTML = '';
            repos_body.prepend( repos_html );
            }
        }
}
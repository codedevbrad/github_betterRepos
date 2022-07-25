import { useContext, useEffect , useState } from 'react';
import { reposGET } from '../../network_requests';
import { ThemeContext } from '../app.contexts/context.theme';

let colorsLight = {
    background: 'white',
     textColor: 'black'
}
let colorsDark = {
    background: 'none',
     textColor: 'white'
}


function ReposComponent( { repos } ) {
  
  let { theme } = useContext( ThemeContext );
  const [colorTheme, setcolorTheme] = useState( theme );

  useEffect( ( ) => {
      
  } , [ ] );
  
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5">
        { repos.map( ( repo ) => (
            <li key={ 'id' } className="col-span-1 bg-white rounded-lg shadow divide-y flex flex-col">
                <div className="w-full flex items-center justify-between p-6 space-x-6">
                    <div className="flex-1 truncate">
                        <div className="flex justify-center items-center space-x-3">
                            <a href={ repo.html_url } className="text-gray-900 text-sm font-medium truncate">  
                                    <span className="ml-3"> { repo.name } </span>
                            </a>
                            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                    { repo.language != null ? repo.language : 'langauge not set' } 
                            </span>
                        </div>
                        <p className="mt-1 text-gray-500 text-sm whitespace-pre-line truncate ...">
                                { repo.description != null ? repo.description.split(' ').slice(0, 10).join(' ') + ' ...' : 'description not set' } 
                        </p>
                    </div>
                </div>
            </li>
        ))}
    </ul>
  )
}


const Authed = ( ) => {

    const [ repos, setrepos ] = useState([]);
    useEffect( ( ) => {
        ( async ( ) => {
               let data = await reposGET('codedevbrad');
               setrepos( data );
               console.log( data );
        } )( );
    }, [ ] );

    return (
        <div>
            <ReposComponent repos={ repos } />
        </div>
    )
}

export default Authed;
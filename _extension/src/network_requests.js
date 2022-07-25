import axios from "axios";

async function reposGET( username ) {
    return axios.get(`https://api.github.com/users/${ username }/repos?per_page=100`)
                .then(  res => { 
                    return res.data;
                })
                .then(  data => {
                   return data.map( ( { name , html_url , description , language , updated_at } ) => {
                        return { name , html_url , description , language , updated_at }
                   });
                })
}

export {
    reposGET
}
import LoginGithub from 'react-login-github';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

const NoAuthed = ( ) => {
    return (
        <div>
                <LoginGithub clientId="ac56fad434a3a3c1561e"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                />
        </div>
    )
}

export default NoAuthed;
import {useRouteError} from 'react-router-dom';

const ErrorPage = ()=> {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <h1>Ouch!</h1>
            <p>You broke me</p>
            <p>
                <i>{error.message || error.status+": "+error.statusText }</i>
            </p>
        </>
    );
}

export default ErrorPage;
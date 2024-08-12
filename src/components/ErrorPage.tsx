import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

  return (
    <div id="error-page">
            <h1>Sorry, an unexpected error has occurred.</h1>
            <p>
                <i>{(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}</i>
            </p>
        </div>
  )
}

export default ErrorPage
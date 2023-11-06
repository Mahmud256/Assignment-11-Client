import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center my-10 md:my-40 lg:my-96 space-y-4">
      <h1 className="text-4xl font-semibold">Oops!!!..</h1>
      <p className="text-lg font-medium">Sorry, an unexpected error has occurred.</p>
      <p className="font-semibold"><i>404 Not Found!!</i></p></div>
  );
}
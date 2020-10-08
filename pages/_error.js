const CustomError = ({ statusCode }) => {
  if (statusCode === 404) {
    return <h1>The resource not found</h1>;
  }
  return <h1>Oops! something went wrong</h1>;
};

CustomError.getInitialProps = ({ err, res }) => {
  return { statusCode: res ? res.statusCode : err ? err.statusCode : 404 };
};

export default CustomError;

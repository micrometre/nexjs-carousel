/* eslint-disable react/no-danger */

import PropTypes from "prop-types";
import "../styles/index.css";

const App = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
  </>
);

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object
};

export default App;

import React from "react";
import "./../styles/Global.css";

import Layout from "../components/Layout/Layout";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <Layout>Test</Layout>
      </div>
    );
  }
}

export default App;

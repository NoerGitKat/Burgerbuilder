import React from "react";
import "./../styles/Global.css";

import Layout from "../components/Layout/Layout";
import BurgerBuilder from "./Burgerbuilder/Burgerbuilder";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;

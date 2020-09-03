import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import MainBlock from "./containers/MainBlock/MainBlock";
import './App.css';
import AdminBlock from "./containers/AdmiBlock/AdminBlock";

const App = () => {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact component={MainBlock}/>
            <Route path="/pages/admin" component={AdminBlock}/>
            <Route path="/pages/:id" component={MainBlock}/>
          <Route render={() => <h1>404 Not Found</h1>}/>
        </Switch>
      </Layout>
  );
};

export default App;
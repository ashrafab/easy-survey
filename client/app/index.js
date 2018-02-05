import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Styled from "styled-components";
import CreateSurvey from "./pages/createSurvey";
import EditSurvey from "./pages/editSurvey";

const Content = Styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const App = () => {
  return (
    <Router>
      <Content>
        <Route exact path="/" component={CreateSurvey} />
        <Route path="/survey/:id" component={EditSurvey} />
      </Content>
    </Router>
  );
};

export default App;

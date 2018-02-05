import React from "react";
import Styled from "styled-components";

import { DragDropContext, DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Label from "./components/label";
import Input from "./components/Input";
import SurveyCanvas from "./components/surveySpace";

const Container = Styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100vw;
  background-color: #e7e7e7;
  padding: 20px;
  box-sizing: border-box;
`;

const box = Styled.div`
  background-color: #fff;
  border: 1px solid lightgrey;
  border-radius: 8px;
`;

const ToolboxWrapper = box.extend`
  flex: 1;
  min-width: 100px;
`;

const ToolboxTitle = Styled.p`
  font-size: 18px;
  color: lightgrey;
  text-align: center;
  border-bottom: 1px solid lightgrey;
  margin: 10px;
  padding: 10px 0;
  font-family: sans-serif;
`;

const SurveySpace = box.extend`
  margin-left: 20px;
  height: 900px;
  width: 1273px;
  display: flex;
`;

const SurveyName = Styled.p`
  text-align: center;
  font-size: 24px;
`;

class EditSurvey extends React.Component {
  componentWillMount() {
    if (!(this.props.location.state && this.props.location.state.survey)) {
      console.log("should fetch survey details");
    } else {
      this.setState({ survey: this.props.location.state.survey });
    }
  }

  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <Container>
          <ToolboxWrapper>
            <ToolboxTitle>Tools</ToolboxTitle>
            <Label />
            <Input />
          </ToolboxWrapper>
          <SurveySpace>
            <SurveyCanvas onDrop={item => console.log("dropped", item)} />
          </SurveySpace>
        </Container>
      </DragDropContextProvider>
    );
  }
}

export default EditSurvey;

import React, { Component } from "react";
import { DragSource } from "react-dnd";
import Styled from "styled-components";

const Container = Styled.div`
  background-color: #f7f7f7;
  text-align: center;
  color: #b7b7b7;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;
`;

const Input = Styled.input`
  width: 100%;
  height: 50px;
  font-size: 22px;
  border: 1px solid #4e4e4e;
  border-radius: 5px;
  padding: 8px 10px;
  box-sizing: border-box;
  pointer-events: none;
`;

class InputComponent extends React.Component {
  setEditMode() {
    this.setState({ editing: true });
  }

  setDisplayMode() {
    this.setState({ editing: false });
  }

  renderContent() {
    return <Input placeholder="this is text field" />;
  }

  render() {
    const { connectDragSource, top, left } = this.props;
    return connectDragSource(
      <div style={{ position: "absolute", top, left }}>
        <Container>{this.renderContent()}</Container>
      </div>
    );
  }
}

const boxSource = {
  beginDrag(props, monitor, component) {
    return {
      component: "inputUi",
      id: props.id,
      left: props.left,
      top: props.top
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
  }
};

export default DragSource("toolbox", boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(InputComponent);

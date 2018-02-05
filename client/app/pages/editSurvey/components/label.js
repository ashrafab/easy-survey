import React, { Component } from "react";
import { DragSource } from "react-dnd";
import Styled from "styled-components";

const Container = Styled.div`
  background-color: #f7f7f7;
  text-align: center;
  color: #b7b7b7;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 5px 0;
  width: 80%;
  margin: 0 auto;
`;

class Label extends React.Component {
  render() {
    const {
      hideSourceOnDrag,
      left,
      top,
      connectDragSource,
      isDragging,
      children
    } = this.props;
    if (isDragging && hideSourceOnDrag) {
      return null;
    }

    return connectDragSource(
      <div style={{ marginBottom: "10px" }}>
        <Container style={{ left, top }}>
          <span>Label</span>
        </Container>
      </div>
    );
  }
}

const boxSource = {
  beginDrag(props, monitor, component) {
    return {
      component: "label"
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
}))(Label);

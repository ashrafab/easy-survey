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
  width: 400px;
  height: 50px;
`;

const Input = Styled.input`
  width: 100%;
  height: 50px;
  font-size: 22px;
  border: 1px solid #4e4e4e;
  border-radius: 5px;
  padding: 8px 10px;
  box-sizing: border-box;
`;

const Span = Styled.span`
  height: 100%;
  font-size: 22px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Label extends React.Component {
  state = {
    editing: false,
    content: "initial text"
  };

  setEditMode() {
    this.setState({ editing: true });
  }

  setDisplayMode() {
    this.setState({ editing: false });
  }

  renderContent() {
    return this.state.editing ? (
      <Input
        autoFocus
        onChange={event => this.setState({ content: event.target.value })}
        value={this.state.content}
        onBlur={() => this.setDisplayMode()}
      />
    ) : (
      <Span onDoubleClick={() => this.setEditMode()}>{this.state.content}</Span>
    );
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
      component: "labelUi",
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
}))(Label);

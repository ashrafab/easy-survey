import React from "react";
import { DropTarget, DragDropContext } from "react-dnd";
import Label from "./labelUi";
import Input from "./inputUi";

const components = {
  label: Label,
  input: Input
};

class SurveySpace extends React.Component {
  state = {
    dropIds: ["label", "input"],
    moveIds: ["labelUi", "inputUi"],
    components: []
  };

  handleDrop({ component, id }, position) {
    if (this.state.dropIds.indexOf(component) > -1) {
      const Component = components[component];
      this.setState(state => {
        state.components.push({ Component, ...position });
      });
    } else if (id !== undefined) {
      this.setState(state => {
        const newComp = Object.assign(state.components[id], position);
        state.components[id] = newComp;
        return state;
      });
    }
  }

  render() {
    const {
      canDrop,
      isOver,
      allowedDropEffect,
      connectDropTarget
    } = this.props;
    const isActive = canDrop && isOver;
    return connectDropTarget(
      <div style={{ flex: 1, position: "relative" }}>
        <p>{isActive ? "Release to drop" : "Drag a box here"}</p>
        {this.state.components.map(({ Component, ...rest }, i) => (
          <Component key={i} id={i} {...rest} />
        ))}
      </div>
    );
  }
}

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round((item.left || 0) + delta.x);
    const top = Math.round((item.top || 0) + delta.y);
    component.handleDrop(item, { left, top });
    // props.onDrop(item);
  }
};

export default DropTarget("toolbox", boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(SurveySpace);

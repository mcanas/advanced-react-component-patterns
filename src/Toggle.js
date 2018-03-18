import React, { Component } from "react"
import PropTypes from "prop-types"
import Switch from "./Switch"

const TOGGLE_CONTEXT = "__toggle__"

const ToggleOn = ({ children }, context) => {
  const { on } = context[TOGGLE_CONTEXT]
  return on ? children : null
}
ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

const ToggleOff = ({ children }, context) => {
  const { on } = context[TOGGLE_CONTEXT]
  return on ? null : children
}
ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

const ToggleButton = (props, context) => {
  const { on, toggle } = context[TOGGLE_CONTEXT]
  return <Switch on={on} onClick={toggle} {...props} />
}
ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

class Toggle extends Component {
  static defaultProps = { onToggle: () => undefined }
  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  }

  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton

  state = { on: false }

  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on)
      }
    )
  }

  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle
      }
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default Toggle

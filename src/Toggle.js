import React, { Component } from "react"
import PropTypes from "prop-types"
import Switch from "./Switch"

const TOGGLE_CONTEXT = "__toggle__"

const ToggleOn = withToggle(({ children, toggle: { on } }) => {
  return on ? children : null
})

const ToggleOff = withToggle(({ children, toggle: { on } }) => {
  return on ? null : children
})

const ToggleButton = withToggle(({ toggle: { on, toggle }, ...props }) => {
  return <Switch on={on} onClick={toggle} {...props} />
})

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

export function withToggle(Component) {
  const Wrapper = (props, context) => {
    const toggleContext = context[TOGGLE_CONTEXT]
    return <Component {...props} toggle={toggleContext} />
  }
  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  }
  return Wrapper
}

export default Toggle

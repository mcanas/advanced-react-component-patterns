import React, { Component } from "react"
import PropTypes from "prop-types"
import Switch from "./Switch"

const TOGGLE_CONTEXT = "__toggle__"

const ToggleOn = ({ children, toggle: { on } }) => {
  return on ? children : null
}

const ToggleOff = ({ children, toggle: { on } }) => {
  return on ? null : children
}

const ToggleButton = ({ toggle: { on, toggle }, ...props }) => {
  return <Switch on={on} onClick={toggle} {...props} />
}

class Toggle extends Component {
  static defaultProps = { onToggle: () => undefined }
  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  }

  static On = withToggle(ToggleOn)
  static Off = withToggle(ToggleOff)
  static Button = withToggle(ToggleButton)

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
  const Wrapper = ({ innerRef, ...props }, context) => {
    const toggleContext = context[TOGGLE_CONTEXT]
    return <Component {...props} ref={innerRef} toggle={toggleContext} />
  }

  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  }

  Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`

  Wrapper.WrappedComponent = Component

  return Wrapper
}

export default Toggle

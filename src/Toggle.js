import React, { Component } from "react"
import Switch from "./Switch"

const ToggleOn = ({ on, children }) => {
  return on ? children : null
}

const ToggleOff = ({ on, children }) => {
  return on ? null : children
}

const ToggleButton = ({ on, toggle, ...props }) => {
  return <Switch on={on} onClick={toggle} {...props} />
}

class Toggle extends Component {
  static defaultProps = { onToggle: () => undefined }

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

  render() {
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    )

    return <div>{children}</div>
  }
}

export default Toggle

import React, { Component } from "react"

class Toggle extends Component {
  static defaultProps = { onToggle: () => undefined }
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
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle
    })
  }
}

export default Toggle

import React, { Component } from "react"

class MyToggle extends Component {
  focus = () => this.button.focus()

  render() {
    const { toggle: { on, toggle } } = this.props
    return (
      <button onClick={toggle} ref={button => (this.button = button)}>
        {on ? "on" : "off"}
      </button>
    )
  }
}

export default MyToggle

import React, { Component } from "react"
import Toggle, { withToggle } from "./Toggle"
import MyToggle from "./MyToggle"

const MyToggleWrapper = withToggle(MyToggle)

const MyEventComponent = ({ toggle, on, event }) => {
  const props = { [event]: on }
  return toggle.on ? <button {...props}>The {event} event</button> : null
}
const MyEventComponentWrapper = withToggle(MyEventComponent)

class App extends Component {
  render() {
    return (
      <Toggle onToggle={on => (on ? this.myToggle.focus() : null)}>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button />
        <hr />
        <MyToggleWrapper innerRef={myToggle => (this.myToggle = myToggle)} />
        <hr />
        <MyEventComponentWrapper event="onClick" on={e => alert(e.type)} />
      </Toggle>
    )
  }
}

export default App

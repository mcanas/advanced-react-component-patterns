import React from "react"
import Toggle, { withToggle } from "./Toggle"

const MyToggle = ({ toggle: { on, toggle } }) => (
  <button onClick={toggle}>{on ? "on" : "off"}</button>
)
const MyToggleWrapper = withToggle(MyToggle)

const MyEventComponent = ({ toggle, on, event }) => {
  const props = { [event]: on }
  return toggle.on ? <button {...props}>The {event} event</button> : null
}
const MyEventComponentWrapper = withToggle(MyEventComponent)

const App = () => (
  <Toggle onToggle={on => console.log("toggle", on)}>
    <Toggle.On>The button is on</Toggle.On>
    <Toggle.Off>The button is off</Toggle.Off>
    <Toggle.Button />
    <hr />
    <MyToggleWrapper />
    <hr />
    <MyEventComponentWrapper event="onClick" on={e => alert(e.type)} />
  </Toggle>
)

export default App

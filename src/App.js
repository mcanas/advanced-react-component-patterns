import React from "react"
import Toggle, { withToggle } from "./Toggle"

const MyToggle = withToggle(({ on, toggle }) => (
  <button onClick={toggle}>{on ? "on" : "off"}</button>
))

const App = () => (
  <Toggle onToggle={on => console.log("toggle", on)}>
    <Toggle.On>The button is on</Toggle.On>
    <Toggle.Off>The button is off</Toggle.Off>
    <Toggle.Button />
    <hr />
    <MyToggle />
  </Toggle>
)

export default App

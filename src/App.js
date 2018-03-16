import React from "react"
import Toggle from "./Toggle"

const App = () => (
  <Toggle onToggle={on => console.log("toggle", on)}>
    <Toggle.Button />
    <Toggle.On>The button is on</Toggle.On>
    <Toggle.Off>The button is off</Toggle.Off>
  </Toggle>
)

export default App

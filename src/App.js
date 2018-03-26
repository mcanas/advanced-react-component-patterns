import React from "react"
import MyToggle from "./MyToggle"
import Switch from "./Switch"
import Toggle from "./Toggle"

const App = () => (
  <Toggle
    onToggle={on => console.log("toggle", on)}
    render={({ on, toggle }) => (
      <div>
        {on ? "button is on" : "button is off"}
        <Switch on={on} onClick={toggle} />
        <hr />
        <MyToggle on={on} toggle={toggle} />
      </div>
    )}
  />
)

export default App

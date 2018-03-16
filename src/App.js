import React from "react"
import Toggle from "./Toggle"

const App = () => <Toggle onToggle={on => console.log("toggle", on)} />

export default App

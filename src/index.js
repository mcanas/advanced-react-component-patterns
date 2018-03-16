import React from "react"
import { render } from "react-dom"
import App from "./App"

const styles = {
  marginTop: 40,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center"
}

render(
  <div style={styles}>
    <App />
  </div>,
  document.getElementById("root")
)

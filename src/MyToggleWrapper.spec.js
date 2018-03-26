import React from "react"
import ReactDOM from "react-dom"
import MyToggleWrapper from "./MyToggleWrapper"

describe("MyToggleWrapper", () => {
  let root = null,
    toggle = null,
    component = null

  afterEach(() => {
    root = null
    toggle = null
    component = null
  })

  beforeEach(() => {
    root = document.createElement("div")
    document.body.appendChild(root)
    toggle = () => (toggle.called = true)
    component = (
      <MyToggleWrapper.WrappedComponent toggle={{ on: true, toggle }} />
    )

    ReactDOM.render(component, root)
  })

  it("renders without error", () => {})

  it("renders the correct label", () => {
    const labelText = root.innerHTML

    expect(labelText.includes("on")).toBeTruthy()
  })

  it("toggle functionality works as expected", () => {
    const button = root.querySelector("button")
    button.click()

    expect(toggle.called).toBeTruthy()
  })
})

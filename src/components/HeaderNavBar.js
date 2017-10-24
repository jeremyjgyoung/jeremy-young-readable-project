import React, { Component } from 'react'

class HeaderNavBar extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Yeeee!</h1>
        </header>
        <nav className="Nav-bar">
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
          </ul>
        </nav>
      </div>
    )
  }
} 

export default HeaderNavBar

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
            <li>All</li>
            <li>Business</li>
            <li>Education</li>
            <li>Photography</li>
          </ul>
        </nav>
      </div>
    )
  }
} 

export default HeaderNavBar

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// Create a way to create an active link
class HeaderNavBar extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Yeeee!</h1>
        </header>
        <nav className="Nav-bar">
          <ul>
            {this.props.categories.map((category, index) =>
              <NavLink className="NavLink-category" activeClassName="active-category" to={`/${category.path}`} key={category.name}>
                <li>{category.name}</li>
              </NavLink>
            )}
          </ul>
        </nav>
      </div>
    )
  }
} 

export default HeaderNavBar

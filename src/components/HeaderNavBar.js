import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
              <Link className="Category-links" to={`/${category.path}`}>
                <li key={category.name}>{category.name}</li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    )
  }
} 

export default HeaderNavBar

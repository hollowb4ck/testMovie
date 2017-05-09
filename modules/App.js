import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav" className="menu">
        <li><NavLink to="/movie">Movie</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

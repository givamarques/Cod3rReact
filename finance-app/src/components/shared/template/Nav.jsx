import React from 'react'
import {Link} from 'react-router-dom'
import Menu from './Menu'

const Nav = (props) => {
  return(
    <nav>
      <Menu>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/finances">Minhas Finanças</Link>
            </li>
      </Menu>
    </nav>
  )
}

export default Nav
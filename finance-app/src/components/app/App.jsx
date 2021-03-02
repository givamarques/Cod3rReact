import React from 'react'
import Container from '../shared/template/Container'
import Header from '../shared/template/Header'
import Nav from '../shared/template/Nav'
import Toolbar from '../shared/template/Toolbar'
import SideNav from '../shared/template/SideNav'
import Footer from '../shared/template/Footer'
import Content from '../shared/template/Content'
import Topnav from '../shared/template/Topnav'
import Routes from './Routes'
import {BrowserRouter as Router} from "react-router-dom";


const App = props => {
  return(
    <Container>
      <Header>
        <h1>My Finances</h1>
      </Header>
      <Toolbar>
          <span>Toolbar</span>
      </Toolbar>
      <Router>
        <Topnav>
          <span>Topnav</span>
        </Topnav>
        <SideNav>
            <Nav></Nav>
        </SideNav>
        <Routes></Routes>
      </Router>
      <Footer>
          <span>2021 <a href='https://www.linkedin.com/in/givaldo-santos-aa958329/' target="_blank"><strong>Giva</strong></a> - My Finances</span>
      </Footer>
    </Container>
  )
}

export default App
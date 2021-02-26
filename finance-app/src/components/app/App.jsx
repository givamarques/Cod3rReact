import React from 'react'
import Container from '../shared/template/Container'
import Header from '../shared/template/Header'
import Toolbar from '../shared/template/Toolbar'
import SideNav from '../shared/template/SideNav'
import Footer from '../shared/template/Footer'
import Content from '../shared/template/Content'


const App = props => {
  return(
    <Container>
      <Header>
        <h1>My Finances</h1>
      </Header>
      <Toolbar>
          <span>Toolbar</span>
      </Toolbar>
      <SideNav>
          <span>SideNav</span>
      </SideNav>
      <Content>
          <span>Content</span>
      </Content>
      <Footer>
          <span>2021 <a href='https://www.linkedin.com/in/givaldo-santos-aa958329/' target="_blank"><strong>Giva</strong></a> - My Finances</span>
      </Footer>
    </Container>
  )
}

export default App
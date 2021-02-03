import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

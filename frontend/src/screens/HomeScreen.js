import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products.js'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <>
      <h1>HomeScreen</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} test='HelloWorld' />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen

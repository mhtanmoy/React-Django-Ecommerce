import React, { useState, useEffect } from 'react'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'

function ProductScreen({ match, history }) {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()
    const productDetails = useSelector( state => state.productDetails )
    const { error, loading, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch,match])
    
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            { loading ? <Loader/>
            : error ? <Message variant='secondary'>{error}</Message>
            : (
                <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.number_reviews} reviews`} color={'#40bcc9'}/>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            price : ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description : { product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                            <Row>
                                <Col>Price : </Col>
                                <Col><strong>${ product.price }</strong></Col>
                            </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>{product.countInstock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                {product.countInstock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>QTY</Col>
                                            <Col xs='auto' className='my-1'>
                                            <Form.Control
                                                as="select"
                                                value={qty}
                                                onChange={(e)=> setQty(e.target.value)}
                                            >
                                                {
                                                    [...Array(product.countInstock).keys()].map((x)=>(
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <Button 
                                onClick={addToCartHandler}
                                className='btn-block' disabled={product.countInstock===0} type='button'>Add to Cart </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            
            )
            }
        </div>
    )
}

export default ProductScreen

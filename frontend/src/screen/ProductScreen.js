import React, {useState, useEffect} from 'react'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import axios from 'axios'


function ProductScreen({ match }) {

    const [product, setProduct] = useState([])
    useEffect(()=>{
        async function fetchProduct(){
            const{data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
        
    }, [])
    
    return (
        <div>
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
                            Description : { product.dis}
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
                                    <Col>{product.productInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <Button className='btn-block' disabled={product.productInStock===0} type='button'>Add to Cart </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        </div>
    )
}

export default ProductScreen

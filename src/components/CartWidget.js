import React from "react";
import Cart from '../img/Carrito.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function CartWidget(){
    return(
        <Container class="float-right" >
            <Row>
                <Col xs={6} md={4}>
                    <Image src={Cart} rounded />
                </Col>
            </Row>
        </Container>
    )
}


export default CartWidget;
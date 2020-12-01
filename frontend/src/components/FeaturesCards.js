import React from 'react'
import { Card, Image, Container, Row, Col } from 'react-bootstrap'



function FeaturesCards ({ home }) {

    return (
        <>
            <Container>
                <Row>
                    {home.id === 3 || home.id === 2
                    ?   <Col sm={6}>
                            <Card>
                                <Image src={home.photos[2].image} fluid />
                            </Card>
                        </Col>
                    :   null
                    }
                </Row>
            </Container>
        </>
    )
}

export default FeaturesCards;
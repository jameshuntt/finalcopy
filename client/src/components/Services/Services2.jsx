import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone'
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone'
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone'
import DnsTwoToneIcon from '@material-ui/icons/DnsTwoTone'
import DevicesOtherTwoToneIcon from '@material-ui/icons/DevicesOtherTwoTone'
import './Services.scss'

export default class Services extends Component {
    render() {
        return (
            <div className="services-main-container">
                <p className="services-heading">Services</p>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <p>Web Development</p>
                            <ComputerTwoToneIcon style={{fontSize: '100px'}}/>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                        
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <p>App Development</p>
                            <PhoneIphoneTwoToneIcon style={{fontSize: '100px'}}/>                        
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                        
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <p>Custom Software</p>
                            <CodeTwoToneIcon style={{fontSize: '100px'}}/>                        
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <p>No matter what the </p>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Button>Request Quote</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <p>Hosting</p>
                            <DnsTwoToneIcon style={{fontSize: '100px'}}/>                        
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <p>With 99.9% guaranteed uptime, your online presents will never sleep.</p>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Button>Pricing</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <p>Prebuilt Software</p>
                            <DevicesOtherTwoToneIcon style={{fontSize: '100px'}}/>                        
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <p>Just some software we had fun building. Some of you may find these very useful.</p>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Button>Products</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

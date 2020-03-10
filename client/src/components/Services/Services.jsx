import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
                <div className="services-content">
                    <div className="web-dev-info">
                        <ComputerTwoToneIcon style={{fontSize: '100px'}} />
                        <p>WebDevelopment</p>
                    </div>
                    <div className="app-dev-info">
                        <PhoneIphoneTwoToneIcon style={{fontSize: '100px'}} />
                        <p>AppDevelopment</p>
                    </div>
                    <div className="custy-soft-info">
                        <CodeTwoToneIcon style={{fontSize: '100px'}} />
                        <p>CustomSoftware</p>
                    </div>
                    <div className="hosting-info">
                        <DnsTwoToneIcon style={{fontSize: '100px'}} />
                        <p>Hosting</p>
                    </div>
                    <div className="pre-builds-info">
                        <DevicesOtherTwoToneIcon style={{fontSize: '100px'}} />
                        <p>PreBuiltSoftware</p>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-header">
                    <p>Forget Everything You Know About Web Development</p>
                </div>
                <div className="bottom-home-screen">
                    <div className="image1">
                        <img
                            alt="computer-guy"
                            className="computer-guy"
                            src="/assets/computerguy.jpg"
                        />
                    </div>
                    <div className="home-button">
                        <Button type="primary" style={{zIndex: '0'}}>
                            Request Quote
                        </Button>
                    </div>
                    <div className="image2">
                        {/*
                            <img
                                alt="servers"
                                className="servers"
                                src="/assets/computer.png"
                            />
                        */}
                    </div>
                </div>
                <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ height: '60vh', width: '40vw' }}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Est pellentesque elit ullamcorper dignissim cras 
                            tincidunt lobortis feugiat vivamus.
                        </p>
                    </div>
                    <div style={{ height: '40vh', width: '40vw' }}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Est pellentesque elit ullamcorper dignissim cras 
                            tincidunt lobortis feugiat vivamus.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

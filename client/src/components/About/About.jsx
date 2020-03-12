import React, { Component } from 'react'
import { UserCard } from 'react-ui-cards'
import { Jumbotron } from 'react-bootstrap'
import './About.scss'

export default class About extends Component {
    render() {
        return (
            <div className="about-main-container">
                <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column'}}>
                    <div style={{ width: '100vw' }}>
                        <h3>We are WebAmbrosia</h3>
                    </div>
                    <div>
                        <p>

                        </p>
                    </div>
                </div>
                <div className="elijah">
                    <div>
                        <UserCard
                            float
                            className="about-cards"
                            name="Elijah Brown"
                            positionName="Owner"
                            stats={[
                                {
                                    name: 'followers',
                                    value: 21
                                },
                                {
                                    name: 'following',
                                    value: 37
                                },
                                {
                                    name: 'posts',
                                    value: 117
                                }
                            ]}
                        />
                    </div>
                    <Jumbotron>

                    </Jumbotron>
                </div>
                <div className="chase">
                    <div>
                        <UserCard
                            float
                            className="about-cards"
                            name="Chase Heavner"
                            positionName="Owner"
                            stats={[
                                {
                                    name: 'followers',
                                    value: 21
                                },
                                {
                                    name: 'following',
                                    value: 37
                                },
                                {
                                    name: 'posts',
                                    value: 117
                                }
                            ]}
                        />
                    </div>
                    <Jumbotron>
                        
                    </Jumbotron>
                </div>
                <div className="james">
                    <div>
                        <UserCard
                            float
                            className="about-cards"
                            name="James Hunt"
                            positionName="Owner"
                            stats={[
                                {
                                    name: 'followers',
                                    value: 21
                                },
                                {
                                    name: 'following',
                                    value: 37
                                },
                                {
                                    name: 'posts',
                                    value: 117
                                }
                            ]}
                        />
                    </div>
                    <Jumbotron>
                        
                    </Jumbotron>
                </div>
            </div>
        )
    }
}

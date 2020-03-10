import React, { Component } from 'react'
import { UserCard } from 'react-ui-cards'
import { Jumbotron } from 'react-bootstrap'
import './About.scss'

export default class About extends Component {
    render() {
        return (
            <div className="about-main-container">
                <div className="elijah">
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
                    <Jumbotron>

                    </Jumbotron>
                </div>
                <div className="chase">
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
                    <Jumbotron>
                        
                    </Jumbotron>
                </div>
                <div className="james">
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
                    <Jumbotron>
                        
                    </Jumbotron>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from "react-router-dom";   
import { Button } from 'react-bootstrap';

    export default class Evote extends Component {
        state = {
            voteNumberAPC: 0,
            voteNumberPDP: 0,
        }
        incrementAPCVote = () => {
            this.setState({
                voteNumberAPC: this.state.voteNumberAPC + 1
            })
        }
        incrementPDPVote = () => {
            this.setState({
                voteNumberPDP: this.state.voteNumberPDP + 1
            })
        }
        render() {
           
            return (
                <div>
                        <form class="form-signin" id='signin' >
                            <div>
                                <h1>APC</h1>
                                <span class='font'>{this.state.voteNumberAPC}</span>
                            <Button onClick={this.incrementAPCVote} variant="primary">Vote</Button>
                            </div>
                            <div>
                                <h1>PDP</h1>
                                <span class='font'>{this.state.voteNumberPDP}</span>
                            <Button onClick={this.incrementPDPVote} variant="primary">Vote</Button>
                            </div>
                        </form>
                </div>
            )
        }
    }
    

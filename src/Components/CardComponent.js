import React, { Component } from 'react'
import './CardComponent.css';
import my_pic from './my_pic2.jpg';
var MY_NAME = "Snir Sharristh";
var DESCRIPTION = "Hi! My name is Snir, I've always loved programming. Ever since I remember my-self I loved programming, puzzles and games."
export default class CardComponent extends Component {
    componentDidMount() {
        var body = document.body
        setTimeout(function() {
            body.className = body.className.replace(/\bis-loading\b/, 'is-playing');
            setTimeout(function() {
                body.className = body.className.replace(/\bis-playing\b/, 'is-ready');
            }, 1250);
        }, 100);
    }
    
    render() {
        return (
            <div className="card-div">
                <img src={my_pic} alt="my_pic" className="my_pic"></img>
                <div className="card-text">
                    <h1 className="card-header">{MY_NAME}</h1>
                    <p className="card-inner-text">{DESCRIPTION}</p>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div class="center">
                        <div id="social-test">
                            <ul class="social">
                                <li><a href="https://facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://twitter.com/"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="https://instagram.com/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="https://github.com/snirsh"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

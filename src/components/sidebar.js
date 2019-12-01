import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SideBar extends Component {
    constructor() {
        super();
        this.state = {scrolled: false}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            scrolled: scrolled > 0,
        })
    }

    render() {
        console.log(this.state)
        return (
            <div id="sidebar" className={this.state.scrolled ? "sidebar scroll" : "sidebar"}>
                <a className="main-link" href="/" className="btn"><div><b>MD</b>+<b>ML</b></div></a>
                <Link to="/about">About</Link>
                <a target="_blank" href="https://repl.it/classroom/invite/db61PxD" className="btn">Sign up</a>
            </div>
        )
    }
}
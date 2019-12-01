import React from 'react'
import ReactMarkdown from 'react-markdown';

import Header from './header'
import Footer from './footer'

export default class PetCtPage extends React.Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentDidMount() {
        window.location.replace('http://www.google.com')
    }

    render() {
        const { markdown } = this.state;
        return (
            <div>
                <Header/>
                <div className="notes-wrapper">
                    <ReactMarkdown source={markdown} />
                </div>
            </div>
        )
    }
}

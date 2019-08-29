import React from 'react'
import ReactMarkdown from 'react-markdown';

import Header from './header'
import Footer from './footer'

export default class AboutPage extends React.Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/geoffreyangus/md-ml/master/data/about/about.md")
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
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

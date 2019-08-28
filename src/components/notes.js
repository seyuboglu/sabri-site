import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class NotesPage extends Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentDidMount() {
        fetch(this.props.link)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    render() {
        console.log('hello')
        const { markdown } = this.state;
        return <ReactMarkdown source={markdown} />;
    }
}
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class NotesPage extends Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/geoffreyangus/md-ml/master/data" + this.props.location.pathname)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return <ReactMarkdown source={markdown} />;
    }
}
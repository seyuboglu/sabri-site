import React from 'react'
import ReactMarkdown from 'react-markdown';

import Header from './header'
import Footer from './footer'

export default class MilieuPage extends React.Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentDidMount() {
        window.location.replace('https://cs.stanford.edu/people/sabrieyuboglu/mutual-interactors.pdf')
    }

    render() {
        const { markdown } = this.state;
        return (
            <div> Fetching paper
            </div>
        )
    }
}


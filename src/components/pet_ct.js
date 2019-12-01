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
        window.location.replace('https://cs.stanford.edu/people/sabrieyuboglu/petct.pdf')
    }

    render() {
        const { markdown } = this.state;
        return (
            <div> Fetching paper
            </div>
        )
    }
}

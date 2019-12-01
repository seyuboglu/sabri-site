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
        window.location.replace('https://raw.githubusercontent.com/seyuboglu/sabri-site/master/data/papers/pet_ct/main.pdf')
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

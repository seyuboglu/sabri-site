import React, { Component } from 'react'

import NavBar from './navbar'

export default class Header extends Component {
    render() {
        return (
            <div id="navbar-wrapper">
                <NavBar 
                    setHighlightedCard={this.props.setHighlightedCard}
                    clearHighlightedCard={this.props.clearHighlightedCard}
                    showAllPapers={this.props.showAllPapers}
                    togglePapersView={this.props.togglePapersView}
                    researchData={this.props.researchData}
                />
            </div>
        )
    }
}
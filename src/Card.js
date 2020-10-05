import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://placehold.it/75" alt="none" />
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Company here...</div>
                </div>
            </div>
        );
    }
}

export default Card;
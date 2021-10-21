import React from 'react';

//function CharacterCard() {
class Card extends React.Component{
    render(){
        return (
            <div
                className="CharacterCard"
                style={{ backgroundImage: `url(${this.props.image})` }}
            >
            <div className="CharacterCard__name-container text-truncate">
                {this.props.name}
            </div>
            </div>
        );
    
    };
}

export default Card;

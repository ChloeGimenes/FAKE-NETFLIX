import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../css/Poster.css';

class Poster extends Component {
  
state = {
    hover: false,
    wished: false,
}

showOverlay = () => {
    console.log('mouse enter')
    if (this.state.hover) {
        return;}

    this.setState ({ hover: true})
}

hideOverlay = () => {
    console.log('mouse leave')
    this.setState ({hover : false})
}



    render() {
        return (
            <div  
            onMouseEnter={this.showOverlay} 
            onMouseLeave={this.hideOverlay} 
            className="poster">

            <img className="poster--img" src={this.props.imgSrc} alt="poster" />

            {this.state.hover ?
            ( 
            <div className="poster--overlay">
                <h3 className="poster--overlay__text">LISTE DE SOUHAITS</h3>
                {this.props.wished ?
                ( 
                    <FontAwesome  onClick={this.remove} className="poster--icon" name="heart" size="3x" />
                ) : (
                    <FontAwesome onClick={this.add}className="poster--icon__not" name="heart-o" size="3x" />
                )
                }

                </div>

                ) : null }

            </div>
        )
    }
}

export { Poster };


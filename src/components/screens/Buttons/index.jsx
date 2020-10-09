import './styles.css';
import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            b1: this.props.name,
            b2: this.props.year
        }
    }

    render() {
        return(
            <div className="containerButtons">
                <button >{this.props.b1}</button>
                <button>{this.props.b2}</button>
            </div>
        )
    }
}

export default Buttons;
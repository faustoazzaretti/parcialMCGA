import './styles.css';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
class Count extends React.Component {
    constructor(props) {
        super(props);
        var d = new Date();
        this.state = {
            count: 1,
            newDate: d.toLocaleString()
        };
    }

    decrement =() => {
        console.log('decccc')
        let newValue = this.state.count;
        this.setState({
            count: (newValue - 1),
            newDate : this.state.newDate
        });
    }

    increment = () => {
        let newValue = this.state.count;
        this.setState({
            count: (newValue + 1),
            newDate : this.state.newDate
        });
    }

    render() {
        return (
            <div className="containerCount" >
                <div className="textCount">
                    Contador Nro: {this.props.id}<br/>
                    Creado: {this.props.date}<br/>
                    Actualizado: {this.state.newDate}
                </div>
                <div className="buttonsCount">
                    <IconButton aria-label="delete">
                        <RemoveIcon 
                            onClick={this.decrement}
                            style={{ fontSize: '50px' }} 
                        />
                    </IconButton> 
                    <h1>{this.state.count}</h1>
                    <IconButton aria-label="delete">
                        <AddIcon 
                            onClick={this.increment}
                            style={{ fontSize: '50px' }} 
                        />
                    </IconButton> 
                </div>
                <IconButton aria-label="delete"
                    onClick={this.props.delete}
                >
                        <DeleteIcon/>
                        Delete Count
                </IconButton>
            </div> 
        )       
    }
}

export default Count;
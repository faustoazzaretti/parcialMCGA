import './styles.css';
import React from 'react';
import Count from '../Count/index';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import NoteAddIcon from '@material-ui/icons/Save';

class ListCounts extends React.Component {
    constructor(props) {
        super(props)
        this.countID = 0
        this.state = {
            countsArray: [],
            id: ""
        }
    }

    addCount = () => {
        this.countID = this.countID + 1;
        const copyCountsArray = Object.assign([], this.state.countsArray)
        copyCountsArray.push({
            id: this.countID
        })
        this.setState({
            countsArray: copyCountsArray,
            date: this.state.date
        })
        console.log(this.state.countsArray)
    }

    deleteCount = (index) => {
        const copyCountsArray = Object.assign([], this.state.countsArray);
        copyCountsArray.splice(index, 1);
        this.setState({
            countsArray: copyCountsArray
        })
    }

    render() {
        return (
            <div className="containerListCounts">
                <h1>Lista de Contadores{this.state.name}</h1>
                <div className="topButtons">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<NoteAddIcon />}
                        onClick={this.addCount}
                    >
                        Agregar Contador
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<SaveIcon />}
                        
                    >
                        <Link to="/">VOLVER AL INICIO</Link>
                    </Button>
                </div>
                <div className="countsList">
                    {
                        this.state.countsArray.map((count, index) => {
                            return (
                                <Count
                                    key={count.id}
                                    id={count.id}
                                    delete={this.deleteCount.bind(this, index)}
                                />
                            ) 
                        })
                    }
                </div>
            </div >
        )
    }
}

export default ListCounts;

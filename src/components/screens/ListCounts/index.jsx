import './styles.css';
import React from 'react';
import Count from '../Count/index';
import { Link } from 'react-router-dom';

class ListCounts extends React.Component {
    constructor(props) {
        super(props)
        this.countID = 0;
        this.countNumber = 0;
        var d = new Date();
        this.state = {
            countsArray: [],
            id: "",
            name: props.name,
            date: d.toLocaleString(),
            number: 1
        }
    }

    addCount = () => {
        this.countID = this.countID + 1;
        this.countNumber = this.countNumber;
        const copyCountsArray = Object.assign([], this.state.countsArray)
        copyCountsArray.push({
            id: this.countID,
            countNumber: this.countNumber
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
                <h1>Lista de Contadores de {this.state.name}</h1>
                <div className="topButtons">
                    <button onClick={this.addCount}>Agregar Contador</button>
                    <button><Link to="/">Back To Home</Link></button>
                </div>
                <div className="countsList">
                    {
                        this.state.countsArray.map((count, index) => {
                            return (
                                <Count
                                    key={count.id}
                                    id={count.id}
                                    delete={this.deleteCount.bind(this, index)}
                                    date={this.state.date}
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

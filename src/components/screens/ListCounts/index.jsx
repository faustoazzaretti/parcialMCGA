import './styles.css';
import React from 'react';
import Count from '../Count/index';
import {Link} from 'react-router-dom';

class ListCounts extends React.Component {
    constructor(props) {
        super(props)
        this.countID = 0;
        this.state = {
            date:props.date,
            countsArray:[],
            id: "",
        }
    }
    
    addCount = () => {
        this.countID = this.countID + 1;
        const copyCountsArray = Object.assign([], this.state.countsArray)
        copyCountsArray.push({
            id: this.countID,

        })
        this.setState({
            countsArray : copyCountsArray
        })
    }

    deleteCount = (index) => {
        const copyCountsArray = Object.assign([],this.state.countsArray);
        copyCountsArray.splice(index,1);
        this.setState({
            countsArray : copyCountsArray
        })
    }

    render() {
        return(
            <div className="containerListCounts">
                <h1>Lista de Contadores</h1>
                <button onClick={this.addCount}>Agregar Contador</button>
                <button><Link to="/">Back To Home</Link></button>
                    <div className="countsList">
                        {
                        this.state.countsArray.map((count,index)=>{
                            return(
                                <Count
                                    key={count.id}
                                    id={count.id}
                                    delete={this.deleteCount.bind(this,index)}
                                    date={this.props.date}
                                />
                            )
                        })
                        }
                    </div>               
            </div>
        )
    }

}


export default ListCounts;

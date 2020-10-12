import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Buttons = (props) => {
    return (
        <div className="containerButtons">
            {
                props.status ?
                    <>
                        <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={props.onClick}
                        >
                            {props.b1}
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary"
                        >
                            <Link to="/counters">LISTA CONTADORES</Link>
                        </Button>
                    </> : <>
                    <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={props.onClick}
                        >
                            {props.b1}
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary"
                        >
                            <Link to="/counters">LISTA CONTADORES</Link>
                        </Button>
                    </>
            }
        </div >                                     
    )
}

export default Buttons;
import './styles.css';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';

const Card = (props) => (
    <>
        <div className="containerCard">
            <Avatar>
                <FolderIcon/>
            </Avatar>
            <p>{props.name}</p>
            <p>{props.year}</p>
        </div>
    </>
)

export default Card;
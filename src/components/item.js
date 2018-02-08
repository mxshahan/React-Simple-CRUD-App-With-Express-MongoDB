import React from 'react';

export default class Item extends React.Component{
    render(){
        return (
            <div>
                <span id="item">{this.props.item}</span>
                
                <span 
                    ref="edit" 
                    onClick={this.handleEdit} 
                    className="hover badge badge-danger">Edit
                </span>
                <span
                    ref="delete"
                    onClick={this.handleRemove} 
                    className="hover badge badge-danger">X
                </span>
            </div>
        )
    }
}
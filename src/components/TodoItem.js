import React from 'react';

class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    render(){
        return (
            <p className="list-group-item" >
                {this.props.item}
                <span 
                    onClick={this.handleEdit} 
                    className="hover badge badge-danger">Edit
                </span>
                <span 
                    onClick={this.handleRemove} 
                    className="hover badge badge-danger">X
                </span>
            </p>
        )
    }

    handleRemove(){
        this.props.handleRemove(this.props.itemID);
    }

    handleEdit(){
        this.props.handleEdit(this.props.itemID);
    }
}

export default TodoItem;
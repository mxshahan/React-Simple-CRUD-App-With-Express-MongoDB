import React from 'react';
import Edit from './Edit';

class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
        this.state = {
            edit : true
        }
    }
    
    render(){        
        return (
            <div>
                {
                    (this.state.edit) ?                
                    <p className="list-group-item" ref="item">
                        <span id="item">{this.props.item}</span>                    
                        <span 
                            ref="edit" 
                            onClick={this.toggleEdit} 
                            className="hover badge badge-danger">Edit
                        </span>
                        <span
                            ref="delete"
                            onClick={this.handleRemove} 
                            className="hover badge badge-danger">X
                        </span>
                    </p> : <Edit submitEdit={this.submitEdit} Edititems={this.props.items} />
                }
            </div>
        )
    }


    handleRemove(){
        this.props.handleRemove(this.props.itemID);
    }

    toggleEdit(e){
        this.setState({
            edit: false
        })
    }

    submitEdit(item, id){
        // console.log(item, id);
        this.props.handleEdit(item, id);
        this.setState({
            edit: true
        })
        
    }
}

export default TodoItem;
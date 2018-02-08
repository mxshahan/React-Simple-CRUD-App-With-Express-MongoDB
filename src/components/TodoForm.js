import React from 'react';

export default class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.state = {
            error: undefined
        }
    }
    onSubmitForm(e){
        e.preventDefault();
        // console.log("Hello");
        
        const option = e.target.elements.todoItem.value;  
        let error = this.props.onSubmitForm(option);

        this.setState(()=>{
            return {error}
        })

        e.target.elements.todoItem.value = '';           
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form 
                    className="form-inline" 
                    onSubmit={this.onSubmitForm}>
                    <input type="text" name="todoItem" className="form-control mb-2"/>
                    <input type="submit" name="submit" value="Add Item" className="btn btn-default mb-2"/>
                </form>
            </div>
        )
    }
}
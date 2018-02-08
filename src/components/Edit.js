import React from 'react';

export default class Edit extends React.Component{
    constructor(props){
        super(props);
        this.submitEdit = this.submitEdit.bind(this);
    }
    render(){        
        return (
            <div>
                <form className=" row form-group " onSubmit={this.submitEdit}>
                    <div className="col-sm-10">
                    <input 
                        ref="EditValue"
                        type="text" 
                        className="form-control form-control-lg" 
                        id="inlineFormInput" 
                        defaultValue={this.props.Edititems.item}
                        id="lgFormGroupInput"/>
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary pull-right col-md-2"
                    >Update</button>
                </form>
            </div>
        )
    }

    submitEdit(e){
        e.preventDefault();
        this.props.submitEdit(this.refs.EditValue.value, this.props.Edititems._id);
    }
}
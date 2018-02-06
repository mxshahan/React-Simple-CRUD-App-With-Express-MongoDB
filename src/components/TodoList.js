import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import axios from 'axios';

export default class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            option: [this.handleData()]
        };
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleData = this.handleData.bind(this);
    }

    

    onSubmitForm(option){



        if(!option){
            return 'Please Enter a Valid Data'
        }
        else if(this.state.option.indexOf(option)>-1){
            return 'Option is Already Exists'
        }
        
        // let axiosConfig = {
        //     headers: {
        //         'access-control-allow-origin' : '*',
        //         'content-type': 'application/json; charset=utf-8'
    
        //     }
        // };
        axios.post('http://localhost:3000/api/', {item: option})
        .then((response)=>{
            console.log(response);            
        })
        .catch(error => {
            if (!error.response) {
                // network error
                this.errorStatus = 'Error: Network Error';
            } else {
                this.errorStatus = error.response.data.message;
            }
          })

        // let data = this.state.option;
        
        // data.push(option); 
        // this.setState({
        //     option: data
        // })     
        
    }

    handleRemove(itemID){
        // console.log(this.state.option);
        // let data = this.state.option;
        // let updatedOption = data.filter((value,index)=>{            
        //     return itemID !== index
        // });        
        // this.setState({
        //     option: updatedOption
        // })

        let Data = [];
        axios.delete('http://localhost/3000/api/'+itemID)
        .then((res)=>{
            console.log(res);            
        })        
        .catch((error) => {
            console.log(error);
        });  
    }

    handleData(){
        let Data = [];
        axios.get('http://localhost:3000/api/')
        .then((res) => {
            res.data.map((value, i)=>{
                Data.push(value.item);
            })  
            this.setState({option: Data})
        })
        .catch((error) => {
            console.log(error);
        });  
        // console.log(Data);
    }

    render(){               
        return (
            <div className="list-group">
                {this.state.option.map((value, id)=>{
                    return (
                        <TodoItem itemID={id} key={id} item={value} handleRemove={this.handleRemove}/>
                    )
                })}
                <TodoForm kbb="hey"  onSubmitForm={this.onSubmitForm}/>
            </div>
        )
    }
}
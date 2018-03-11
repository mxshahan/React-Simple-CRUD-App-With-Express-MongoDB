import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import axios from 'axios';
import io from 'socket.io-client';

export default class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            option : []
        };
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleData = this.handleData.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    } 

    componentDidMount(){
        this.handleData();
        this.socket = io('http://localhost:1200/');
        this.socket.on('message', body=>{
            console.log(body);
        })
    }
    
    // componentDidUpdate(){
    //     this.handleData();
    //     console.log('updated/deleted');        
    // }


    onSubmitForm(option){
        // console.log(this.state.option)
        if(!option){
            return 'Please Enter a Valid Data'
        }
        
        axios.post('http://localhost:1200/api/', {item: option})
        .then((response)=>{
            this.handleData();          
        })
        .catch(error => {
            if (!error.response) {
                // network error
                this.errorStatus = 'Error: Network Error';
            } else {
                this.errorStatus = error.response.data.message;
            }
        })        
    }

    handleRemove(itemID){
        let url = 'http://localhost:1200/api/'+itemID;
        let Data = [];
        axios.delete(url)
        .then((res)=>{
            this.handleData();           
        })        
        .catch((error) => {
            console.log(error);
        });  
    }


    handleEdit(item, itemID){
        // console.log("Item: ", item, itemID);
        let url = 'http://localhost:1200/api/'+itemID;
        let Data = [];
        axios.put(url, {item : item})
        .then((res)=>{
            // console.log('Updated', res);
            this.handleData();
        })
        .catch(err=>{
            console.log('Error:', err);            
        })
        
    }

    handleData(){
        // let Data = [];
        axios.get('http://localhost:1200/api/')
        .then((res) => {
            console.log("Updated");            
            // res.data.map((value, i)=>{
            //     Data.push(value);
            // })  
            this.socket.emit('message', res.data);
            // this.setState({option: res.data})
        })
        .catch((error) => {
            console.log(error);
        });
    }


    render(){ 
        return (
            <div className="list-group" ref="edit">
                {this.state.option && this.state.option.map((value, id)=>{
                    return (
                        <TodoItem 
                            itemID={value._id} 
                            key={id} 
                            item={value.item} 
                            handleRemove={this.handleRemove}
                            handleEdit={this.handleEdit}
                            items={value}
                            ref="handleEdit"
                        />
                    )
                })}
                <TodoForm kbb="hey"  onSubmitForm={this.onSubmitForm}/>
            </div>
        )
    }
}
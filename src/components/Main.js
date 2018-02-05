import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <Header title="React Todo App" subtitle="This is a simple todo app that you can add or remove"/>
                <TodoList/>
            </div>
        )
    }
}
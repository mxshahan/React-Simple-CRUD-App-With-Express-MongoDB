class Main extends React.Component{
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

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        )
    }
}

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            option: ['One', 'Two', 'Three']
        };
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    onSubmitForm(option){
        if(!option){
            return 'Please Enter a Valid Data'
        }
        else if(this.state.option.indexOf(option)>-1){
            return 'Option is Already Exists'
        }
        this.setState( () => {
            this.state.option.push(option);
            //console.log(this.state.option);                        
        })
    }

    handleRemove(itemID){
        // console.log(itemID)
        // let data = this.state.option;
        let updatedOption = this.state.option.filter((value,index)=>{
            // console.log(itemID, value, index);
            
            return itemID !== index
        });
        // console.log(updatedOption);
        
        this.setState({
            option: updatedOption
        })
    }

    render(){
        return (
            <div className="list-group">
                {this.state.option.map((value,id)=>{
                    return (
                        <TodoItem itemID={id} key={id} item={value} handleRemove={this.handleRemove}/>
                    )
                })}
                <TodoForm kbb="hey"  onSubmitForm={this.onSubmitForm}/>
            </div>
        )
    }
}

class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.handleRemove = this.handleRemove.bind(this);
    }
    render(){
        return (
            <a className="list-group-item" >{this.props.item}
                <span onClick={this.handleEdit} className="hover badge badge-danger">
                    Edit
                </span>
                <span 
                    onClick={this.handleRemove} 
                    className="hover badge badge-danger">X
                </span>
            </a>
        )
    }

    handleEdit(){
        console.log("Edit Active");
        
    }

    handleRemove(){
        this.props.handleRemove(this.props.itemID)
    }
}

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.state = {
            error: undefined
        }
    }
    onSubmitForm(e){
        e.preventDefault();
        const option = e.target.elements.todoItem.value;  
        const error = this.props.onSubmitForm(option);  

        this.setState(()=>{
            return {error}
        })

        // axios.post('http://localhost:3000/')
        // .then((res)=>{
        //     console.log(res);        
        // })
        // .catch((err) => {
        //    console.log(err)
        // })

        e.target.elements.todoItem.value = '';           
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form method="POST" action="http://localhost:3000/" className="form-inline" onSubmit={this.onSubmitForm}>
                    <input type="text" name="todoItem" className="form-control mb-2"/>
                    <input type="submit" name="submit" value="Add Item" className="btn btn-default mb-2"/>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<Main/>, document.getElementById('app'));
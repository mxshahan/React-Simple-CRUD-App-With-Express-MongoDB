class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handlerAdd = this.handlerAdd.bind(this);
        this.handlerMinus = this.handlerMinus.bind(this);
        this.handlerReset = this.handlerReset.bind(this);
        this.state = {
            counter: 0
        }
        
    }
    handlerAdd(){
        this.setState(()=>{
            return{
                counter: this.state.counter+1
            }
        });        
    }

    handlerMinus(){
        this.setState(()=>{
            return{
                counter: this.state.counter-1
            }
        })     
    }

    handlerReset(){
        this.setState(()=>{
            return{
                counter: 0
            }
        })       
    }

    render(){
        return (
            <div>
                <h3>Counter: {this.state.counter}</h3>
                <button  onClick={this.handlerAdd}>+1</button>
                <button onClick={this.handlerMinus}>-1</button>
                <button onClick={this.handlerReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'))
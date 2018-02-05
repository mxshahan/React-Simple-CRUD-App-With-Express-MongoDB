console.log("Doing problem");

// JSX - JavaScript XML
let info = {
    name: 'Shahan Chy',
    age: 13 
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    }
}


const template = (
    <div>
        <h1>{info.name}</h1>
        {info.age>=18 && <p>My age : {info.age}</p>}
        <p> {info.location}</p>
    </div>
);

const temp2 = (
    <div>
        <h1>Country: Bangladesh</h1>
        <p>Live in Sylhet</p>
    </div>
)

let count = 0;

const addOne = () => {
    count++;
    
}
const app = {
    cities : ['Dhaka', 'Sylhet', 'Chittagong', 'Barishal', 'Rajshahi', 'Rongpur'],
    name: 'Shahan'
}

const formSubmit = (e) => {
    e.preventDefault();
    const item = e.target.elements.items.value ;
    if(item)
        app.cities.push(item);
    e.target.elements.items.value = '';
    render();
    
}

const removeAll = () => {
    app.cities = [];
    render();
}

const appRoot = document.getElementById('app');

let visibility = false;

const visibilityToggle = () => {
    visibility  = !visibility;
    render();
}

const render = () =>{
    const tempTwo = (
        <div>
            <h2>Count : {app.cities.length}</h2>    
            <ul>
                {app.cities.map((city, index)=>{
                    return <li key={index}>{city}</li>
                })}
            </ul>
            <button onClick={removeAll} disabled={app.cities.length===0}>Remove All</button>
            <form onSubmit={formSubmit}>
                <input name="items" type="text"/>
                <input type="submit" value="Add item"/>
            </form>
                <br/>
            <div>
                <button onClick={visibilityToggle}>{visibility ? 'Hide Details' : 'Show Details'}</button>
                <div>{visibility && (
                    <p>Hey, Here is your visible details</p>
                )}</div>
            </div>

        </div>
    )
    ReactDOM.render(tempTwo, appRoot);
};
render();
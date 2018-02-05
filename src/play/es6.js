var fullName = "Misbauddin Chowdhury";
name = fullName.split(' ');

const temp = (
    <div>
        {name && name[0]}
    </div>
)

var appRoot = document.getElementById('app');
ReactDOM.render(temp, appRoot)
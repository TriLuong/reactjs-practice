function getName(name1){
    alert(name1);
}

class InputTag extends React.Component{
    showtt(){
        var text = this.textInput.value;
        alert(text);
    }

    constructor(props){
        super(props);
        this.showtt = this.showtt.bind(this);
    }

    render(){
        return(
            <div>
                <input type="text" ref={(input)=>{this.textInput=input}}></input>
                <button onClick={this.showtt}>Done</button>
            </div>
        );
    }
}

class HelloWorld extends React.Component{
    callgetName(){
        getName(this.props.name);
    }
    getInfor(){
        alert(this.props.children);
    }

    increaseNumber(){
        this.state.TotalNumber = parseInt(this.state.TotalNumber) + 1;
        this.setState(this.state);
    }

    increaseNumber2(){
        this.state.TotalNumber2 = parseInt(this.state.TotalNumber2) + 1;
        this.setState(this.state);
    }
   
    constructor(props){
        super(props);
        this.getInfor = this.getInfor.bind(this);
        this.callgetName = this.callgetName.bind(this);
        
        this.state ={
            TotalNumber: this.props.TotalNumber,
            TotalNumber2: this.props.TotalNumber2,
        }
        this.increaseNumber = this.increaseNumber.bind(this);
        this.increaseNumber2 = this.increaseNumber2.bind(this);
    }

    render(){
        return(
            <div>
                <h1 className="yellowColor">{this.props.name} - {this.props.number}</h1>
                <p>{this.props.children}</p>
                <p>Total Number: {this.state.TotalNumber}</p>
                <p>Total Number2: {this.state.TotalNumber2}</p>
                <HiEveryone></HiEveryone>
                {/* Option 1 */}
                <button onClick={this.callgetName}>Click</button>
                {/* Option 2 */}
                <button onClick={()=>{this.callgetName(this.props.name)}}>Click 2</button>
                
                <button onClick={this.increaseNumber}>Increase Number</button>
                <button onClick={this.increaseNumber2}>Increase Number 2</button>
            </div>
        );
    }
}

class HiEveryone extends React.Component{
    render(){
        return(
            <h3> Hi Everyone</h3>
        );
    }
}

ReactDOM.render(
    <div>
        <InputTag></InputTag>
        <hr></hr>
        <h1>Hello World!!!</h1>
        <hr></hr>
        <HelloWorld name="ABC" number="123" TotalNumber="30" TotalNumber2="122">Type props children here 1</HelloWorld>
        <hr></hr>
        <HelloWorld name="CDF" number="456" TotalNumber="40" TotalNumber2="200">Type props children here 2</HelloWorld>
        
    </div>
    , document.getElementById("root")
);
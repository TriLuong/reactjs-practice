function getName(name1){
    alert(name1);
}

class InputTag extends React.Component{
    showtt(){
        var text = this.textInput.value
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

class Com extends React.Component{
    add(){
        this.state.number3 = parseInt(this.state.number3) + 1;
        this.setState(this.state);
    }

    constructor(props){
        super(props);
        this.state = {
            number3: 5,
        }
        this.add = this.add.bind(this);
    }
    render(){
        return(
            <div>
                <button onClick={this.add}> Hello {this.state.number3}</button>
            </div>
        );

    }
}

class Album extends React.Component{
    nextImg(){
        this.state.flag = 0;
        this.state.image = parseInt(this.state.image) + 1;
        if(parseInt(this.state.image)> 4){
            this.state.image = 1;
        }
        this.setState(this.state);
    }

    previousImg(){
        this.state.flag = 0;
        this.state.image = parseInt(this.state.image) - 1;
        if(parseInt(this.state.image) < 1){
            this.state.image = 4;
        }
        this.setState(this.state);
    }

    autoChange(){
        this.state.flag = ~(parseInt(this.state.flag));
        this.state.image = parseInt(this.state.image) - 1;
        if(parseInt(this.state.image) < 1){
            this.state.image = 4;
        }
        this.setState(this.state);
    }

    constructor(props){
        super(props);
        this.state = {
            image: 1,
            flag: 0,
        }
        
        this.nextImg = this.nextImg.bind(this);
        this.previousImg = this.previousImg.bind(this);
        this.autoChange = this.autoChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    render (){
        return (
            <div className="div-album">
                <img src={"images/img" + this.state.image+".png"}></img>
                <hr></hr>
                <button onClick={this.nextImg}>Next</button>
                <button onClick={this.previousImg}>Previous</button>
                <button onClick={this.autoChange}>Auto</button>
            </div>
        );
    }
    componentDidMount(){
            setInterval(this.autoChange, 1000);
        
            
    }
}

class Note extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

class List extends React.Component{
    addElement(){
        this.state.mang.push("Iniesta","Xavi");
        this.setState(this.state);
    }

    constructor(props){
        super(props);
        this.state = {
            mang: ["Lionel", "Messi", "Barcelona"],
        }

        this.addElement = this.addElement.bind(this);
    }

    render(){
        return(
            <div>
                <button onClick={this.addElement}>Add</button>
                {
                    this.state.mang.map(function(note, index){
                        return <Note key={index}>{note}</Note>
                    })
                }
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <List></List>
        <Album></Album>
        <Com></Com>
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
class HelloWorld extends React.Component{
    getInfor(){
        alert(this.props.children);
    }
    constructor(props){
        super(props);
        this.getInfor = this.getInfor.bind(this);
    }
    render(){
        return(
            <div>
                <h1 className="yellowColor">{this.props.name} - {this.props.number}</h1>
                <p>{this.props.children}</p>
                <HiEveryone></HiEveryone>
                <button onClick={this.getInfor}>Click</button>
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
        <h1>Hello World!!!</h1>
        <hr></hr>
        <HelloWorld name="ABC" number="123" >Type props children here 1</HelloWorld>
        <hr></hr>
        <HelloWorld name="CDF" number="456">Type props children here 2</HelloWorld>
    </div>
    , document.getElementById("root")
);
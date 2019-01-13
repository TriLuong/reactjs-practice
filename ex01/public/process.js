class HelloWorld extends React.Component{
    render(){
        return(
            <div>
                <h1 className="yellowColor">{this.props.name} - {this.props.number}</h1>
                <HiEveryone></HiEveryone>
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
        <HelloWorld name="ABC" number="123" ></HelloWorld>
        <HelloWorld name="CDF" number="456"/>
    </div>
    , document.getElementById("root")
);
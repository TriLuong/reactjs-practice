class HelloWorld extends React.Component{
    render(){
        return(
            <div>
                <h1 className="yellowColor">Hello World!!!</h1>
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
        <HelloWorld></HelloWorld>
        <HelloWorld />
    </div>
    , document.getElementById("root")
);
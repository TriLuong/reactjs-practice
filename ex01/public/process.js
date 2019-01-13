class HelloWorld extends React.Component{
    render(){
        return(
            <h1 className="yellowColor">Hello World!!!</h1>
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
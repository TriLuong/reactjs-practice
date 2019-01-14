var list;

function addDiv(){
    ReactDOM.render(<InputDiv></InputDiv>, document.getElementById("div-add"))
}

class Note extends React.Component{
    delete(){
        $.post("/delete",{idDelete: this.props.id}, function(data){
            list.setState({language: data});
        });
    }

    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
    }

    render(){
        return(
            <div className="div-note">
                <p>{this.props.children}</p>
                <button onClick={()=>{this.delete(this)}}>Delete</button>
            </div>
        );
    }
}

class List extends React.Component{
     
    constructor(props){
        super(props);
        
        this.state = {
            language: [],
        }

        list = this;
        
        

    }

    render(){
        return(
            <div className="div-list">
            <div id="div-add"></div>
            <button onClick={addDiv}>Add</button>
            {
                this.state.language.map(function(note, index){
                    return <Note key={index} id={index}>{note}</Note>
                })
            }
                
            </div>
        );
    }

    componentDidMount(){
        var that = this;
        //Get data from server
        $.post("/getNotes",function(data){
            that.setState({language: data});
        });
    }
}

class InputDiv extends React.Component{
    send(){
        //send data to server
        $.post("/add", {note: this.refs.txt.value}, function(data){
            list.setState({language: data});
        });
        ReactDOM.unmountComponentAtNode(document.getElementById("div-add"));
    }

    constructor(props){
        super(props);
        this.send = this.send.bind(this);
        
    }

    render(){
        return(
            <div>
                <input type="text" ref="txt" placeholder="Enter yout note!"></input>
                <button onClick={()=>{this.send(this)}}>Send</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <List></List>        
    </div>
    , document.getElementById("root")
);
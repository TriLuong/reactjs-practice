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

    edit(){
        this.setState({onEdit: true});
    }

    save(){
        var note = this;
        $.post("/update", {idEdit: this.props.id, content: this.refs.txt.value}, function(data){
            list.setState({language: data});
            note.setState({onEdit: false});
        });
    }

    cancel(){
        this.setState({onEdit: false});
    }

    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
        this.edit = this. edit.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.state = {
            onEdit: false,
        }
    }

    render(){
        if(this.state.onEdit){
            return(
                <div className="div-note">
                        <input defaultValue={this.props.children} type="text" ref="txt"></input>
                        <button onClick={()=>{this.save(this)}}>Save</button>
                        <button onClick={()=>{this.cancel(this)}}>Cancel</button>
                </div>
            );
        }
        else {
            return(
                <div className="div-note">
                    <p>{this.props.children}</p>
                    <button onClick={()=>{this.delete(this)}}>Delete</button>
                    <button onClick={()=>{this.edit(this)}}>Edit</button>
                </div>
            );
        }
        
    }
}

class List extends React.Component{
     
   

    reset(){
        
        this.setState({onReset: true})
        
    }
    constructor(props){
        super(props);
        
        this.state = {
            language: [],
            onReset: false,
        }

        list = this;
        this.reset = this.reset.bind(this);
        
        

    }

    render(){
        return(
            <div className="div-list">
            <div id="div-add"></div>
            <button onClick={addDiv}>Add</button>
            <button onClick={()=>{this.reset(this)}}>Reset</button>
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
        if(that.state.onReset){
            $.post("/reset",function(data){
                that.setState({language: data});
                this.setState({onReset: false});
            });
        }
        else {
            $.post("/getNotes",function(data){
                that.setState({language: data});
            });
        }
        
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
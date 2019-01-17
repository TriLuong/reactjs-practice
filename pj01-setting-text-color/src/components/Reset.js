import React, { Component } from 'react';


class App extends Component {

    clickReset(value){
        this.props.cReset(value);
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={()=>this.clickReset(true)}>Reset</button>
            </div>
                
            
        );
    }
}

export default App;

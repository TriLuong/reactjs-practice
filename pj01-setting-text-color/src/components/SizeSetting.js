import React, { Component } from 'react';


class SizeSetting extends Component {
    constructor(props){
        super(props);
        this.changeSize = this.changeSize.bind(this);
    }

    changeSize(value){
        this.props.changeFontSize(value);

    }

    render() {
        return (            
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.fontSize}</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-warning" onClick={()=>{this.changeSize(2)}}>Increase</button>
                    <button type="button" className="btn btn-warning" onClick={()=>{this.changeSize(-2)}}>Decrease</button>
                </div>
            </div>
                        
                
            
        );
    }
}

export default SizeSetting;

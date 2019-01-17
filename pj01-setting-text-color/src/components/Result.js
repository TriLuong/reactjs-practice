import React, { Component } from 'react';


class Result extends Component {
    setStyle(){
        return ({
            color:    this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize,
        });
    }

    render() {
        return (
            <div>               
                <p>
                    Color : {this.props.color} -
                    FontSize : {this.props.fontSize}px
                </p>
                <div className="content-setting" style={this.setStyle()}>
                    Content of setting
                </div>
            </div>
    
                
            
        );
    }
}

export default Result;

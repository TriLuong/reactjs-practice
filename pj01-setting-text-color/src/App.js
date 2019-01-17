import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset'
import Result from './components/Result'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'red',
            fontSize: 15,
        };
        this.onSetColor = this.onSetColor.bind(this);
        this.onChangeFontSize = this.onChangeFontSize.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onSetColor(params){
        this.setState ({
            color: params,
        });
    }

    onChangeFontSize(value){
        if(this.state.fontSize + value >= 8 && this.state.fontSize + value <=36){
            this.setState ({
                fontSize: this.state.fontSize + value,
            });
        }
    }
    onReset(value){
        console.log(value);
        if(value){
            this.setState ({
                color: 'red',
                fontSize: 15,
            });
        }
    }

    render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}>
                            
                        </ColorPicker>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting fontSize={this.state.fontSize} changeFontSize={this.onChangeFontSize}></SizeSetting>
                        <Reset cReset={this.onReset}></Reset>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Result color={this.state.color} fontSize={this.state.fontSize} ></Result>
                    </div>
                </div>
            </div>            
            
        );
    }
}

export default App;

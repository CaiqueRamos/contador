import React, { Component } from 'react';
import './Calculadora.css';

export default class Calculadora extends Component{

    constructor(props){
        super(props)

        this.state = {
            value: 0
        }

        this.somar = this.somar.bind(this)
    }

    somar = () => {
        this.setState({value: this.state.value + 1})
    }
    subtrair = () => {
        this.setState({value: this.state.value - 1})
    }
    dividir = () => {
        this.setState({value: this.state.value - 1})
    }
    multiplicar = () => {
        this.setState({value: this.state.value - 1})
    }

    render() {
        return(
            <div className="content">
                <div className="result" onClick={this.subtrair}>
                    <label className="resultContent">-</label>
                </div>
                <div className="result">
                    <label className="resultContent">{this.state.value}</label>
                </div>
                <div className="result" onClick={this.somar}>
                    <label className="resultContent">+</label>
                </div>
            </div>
        )
    }
};
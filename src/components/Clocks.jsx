import React, { Component } from 'react';
import InputForm from './InputForm';
import ClocksField from './ClocksField';

export default class Clocks extends Component {
    static propTypes = { };
  
    state = {
    clocks: [],
    }

    handleAdd = (clock) => {
        this.setState(prevState => ({ clocks: [...prevState.clocks, clock] }) );
    }

    handleRemove = (id) => {
        this.setState((prevState) => ({
            clocks: prevState.clocks.filter((o) => o.id !== id),
        }));
    }


    render() {
        return (
        <div className='clocks'>
            <InputForm onAdd={this.handleAdd}/>
            <ClocksField item={this.state.clocks} onRemove={this.handleRemove}/>
        </div>
        )
    }



}
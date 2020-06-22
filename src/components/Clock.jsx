import React, { Component } from 'react';
import moment from 'moment';

export default class Clocks extends Component {
  
  state = {
    time: moment().utcOffset(this.props.timeZone)
  }

  time = () => {
    this.setState({ time: moment().utcOffset(this.props.timeZone) });
  }

  handleRemove = (event) => {
    this.props.onRemove(event.target.dataset.id);
  }

  componentDidMount() {
    this.timer = setInterval(this.time, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }


  render() {
    return (
      <div className='clock_item'>
        <span className='delete' data-id={this.props.id} onClick={this.handleRemove}>&#10006;</span>
        <span className='clock_name'>{this.props.name}</span>
        <span className='clock_time'>{this.state.time.format('HH:mm:ss')}</span>
      </div>
    )
  }



}
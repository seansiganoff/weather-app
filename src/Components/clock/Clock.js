import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div className='clock'>Your current time is {this.state.date.toLocaleTimeString()}</div>;
  }

  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
}
import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    )
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({date: new Date()});
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

}

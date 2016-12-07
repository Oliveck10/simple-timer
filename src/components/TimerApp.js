import React from 'react';

class TimerApp extends React.Component {
  constructor(props) {
    super(props);
    // This is called before our render function. The object that is
    // returned is assigned to this.state, so we can use it later.
    this.state = {
      begin: 0,
      elapsed: 0,
      interval: 0,
      former: 0,
    };
    this.start = this.start.bind(this);
    this.tick = this.tick.bind(this);
    this.stop = this.stop.bind(this);
    this.zero = this.zero.bind(this);
  }

  // componentDidMount() {
  //   // componentDidMount is called by react when the component
  //   // has been rendered on the page. We can set the interval here:
  //   this.timer = setInterval(this.tick, 50);
  // }

  // componentWillUnmount() {
  //   // This method is called immediately before the component is removed
  //   // from the page and destroyed. We can clear the interval here:
  //   clearInterval(this.timer);
  // }

  start() {
    this.state.begin = new Date();
    this.timer = setInterval(this.tick, 50);
  }

  tick() {
    this.state.interval = new Date() - this.state.begin; // new Date() - this.props.startPoint
    this.setState({ elapsed: this.state.former + this.state.interval });
  }

  stop() {
    this.state.former = this.state.elapsed;
    clearInterval(this.timer);
  }

  zero() {
    this.setState({ elapsed: 0, begin: 0, interval: 0, former: 0 });
    clearInterval(this.timer);
  }

  render() {
    // Calculate elapsed to tenth of a second:
    const elapsed = Math.round(this.state.elapsed / 100);

    // This will give a number with one digit after the decimal dot (xx.x):
    const seconds = (elapsed / 10).toFixed(1);

    // Although we return an entire <p> element, react will smartly update
    // only the changed parts, which contain the seconds variable.

    return (
      <div>
        <StartBtn start={this.start} />
        <br />
        <br />
        <StopBtn stop={this.stop} />
        <br />
        <br />
        <ZeroBtn zero={this.zero} />
        <br />
        <br />
        <p>This example was started <b>{seconds} seconds</b> ago.</p>
        <p>Timer: {this.timer}</p>
      </div>
    );
  }

}

class StartBtn extends React.Component {
  render() {
    return <button className="start" onClick={this.props.start} >Start/Resume</button>
  }
}

class StopBtn extends React.Component {
  render() {
    return <button className="stop" onClick={this.props.stop} >Stop</button>
  }
}

class ZeroBtn extends React.Component {
  render() {
    return <button className="zero" onClick={this.props.zero} >Zero</button>
  }
}

export default TimerApp;

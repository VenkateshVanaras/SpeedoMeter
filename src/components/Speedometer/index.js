// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <div>
          <img
            alt="speedometer"
            className="img-props"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
        </div>
        <div className="details-card">
          <h1>Speed is {count}mph</h1>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              onClick={this.onAccelerate}
              className="button1"
              type="button"
            >
              Accelerate
            </button>
            <button
              onClick={this.onDecrement}
              className="button2"
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer

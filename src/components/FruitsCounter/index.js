// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangos : 0, bananas: 0}
  mango = () => {
    this.setState((prevState) => ({mangos:prevState.mangos+1}))
  }
  banana = () => {
    this.setState((prevState) => ({bananas:prevState.bananas + 1}))
  }
  render() {
    const {mangos,bananas} = this.state
    return (
      <div className="fruits-bg-con">
        <div className="fruits-container">
          <h1 className="desp">
            Bob ate <span> {mangos} </span> mangoes <span> {bananas}</span> bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="image"
              alt="alt should be mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              alt="alt should be banana"
              className="image"
            />
            <div>
              <button className="button" onClick = {this.mango}>Eat Mango</button>
              <button className="button" onClick = {this.banana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

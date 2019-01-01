class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck() {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    var msg = this.state.checked ? "checked" : "not checked"

    return (
      <div>
        <input type="checkbox" 
               onChange={this.handleCheck}
               defaultChecked={this.state.checked}/>
        <p>This box is {msg}.</p>
      </div>
    )
  }
}

/*
ReactDOM.render(
  <Hello/>,
  document.getElementById('react-container')
)
*/

ReactDOM.render(
  <Checkbox />,
  document.getElementById('react-container')
)

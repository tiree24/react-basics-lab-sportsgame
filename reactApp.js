class Team extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shots: 0,
      score: 0
    }
  }

  shotHandler = () => {
    this.setState((state, props) => ({
      shots: state.shots + 1,

    }))

    if (Math.random() > 0.5) {
      this.state.score++
    }

  }

  render() {
    return (<h1>
      Yay! I'm the {this.props.name}
      <img alt="team logo" width="100px" src={this.props.logo} />

      shots: {this.state.shots}
      score: {this.state.score}
      <button onClick={this.shotHandler}>shoot</button>
    </h1>)

  }
}


// Deafault App component that all other compents are rendered through
function App(props) {
  return (
   
    <div>
      
       <div className="stats">

      <Team name=" home Team" logo="Uzumaki_logo.png" />
      <div className="versus">
        <h1>VS</h1>
      </div>
      <Team name=" away Team" logo="uchiha_logo.jpg" />
    
      </div>
    </div>
  )
}

//Render the application
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
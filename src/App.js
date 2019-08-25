import React, {Component} from 'react'
import Person from './components/person'
import persons from './seeds/person.json'
import './App.scss'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      persons: []
    }
  }

  componentDidMount = () =>{
    this.setState({
      persons: persons.persons
    })
  }

  render(){
    return (
      <div className="app-container">
            <h1> Test de React </h1>
            {this.state.persons.map((person, index) => (
                <Person
                  person = {person}
                />
            ))}
        </div>
    )
  }
}

export default App
import React, { Component } from 'react';
import HOC from './HOC'
import ReactDOM from 'react-dom';
import  './styles.css';
import axios from 'axios'
import PropTypes from 'prop-types'
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      todos:[],
      show:false,iddar:[]
    };
  }
  componentDidMount=()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos').
    then(res=>{console.log('hiii',res)
  this.setState({todos:res.data})}).catch(er=>console.log(er))

  }
  indexarr=(id)=>{
    const iddar=[...this.state.iddar]
    iddar.push(id)
this.setState({iddar})
  }
  deletor=()=>{
    const iddar=[...this.state.iddar]
    let persons=[...this.state.todos]
    let per=[]
    for(let i of iddar){
    per=persons.filter(ft=>ft.id!==i)
    persons=per}

    this.setState({todos:persons})


  }
  render() {
    console.log(this.props.name)
    return (
      <div>
        {this.props.name}
        {this.props.func}
       <button onClick={()=>this.setState({show:!this.state.show})}>Show</button>
       <button onClick={this.deletor}>Delete</button>
        <p>
          {this.state.todos.map(td=><li key={td.id}>{td.title}{this.state.show?
          <input type="checkbox" onChange={()=>this.indexarr(td.id)}/>:null}</li>)}
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

App.propTypes={
  name:PropTypes.string
}
App.defaultProps={
  name:'gow'
}
export default HOC(App)


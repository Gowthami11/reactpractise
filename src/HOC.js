import React,{Component} from 'react'
const HOC=(Wrapp)=>{
class Newcomp extends Component{

  getNAme=()=>{
    return <div>hi</div>
  }
  render(){
    return(
      <div>
        <Wrapp  func={this.getNAme}/>
      </div>
    )
  }
}
return Newcomp
}

export default HOC
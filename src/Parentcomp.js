import React from 'react'
import Regcomp from './Regcomp'
import Purecomp from './Purecomp'

class Parentcomp extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name : "Veera"
        }
    }
   
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : "Veera "
            })
        }, 2000)
    }
    render(){
        return(
            <div>
                <h1> Reg Comp </h1>
                <Regcomp  name={this.state.name}/>
                <Purecomp name={this.state.name}/>
            </div>
        )
    }
}
export default Parentcomp;
import React,{PureComponent} from 'react'

class Regcomp extends PureComponent{
    render(){
        console.log('Pure Component*******')
        return(
            <div>
                 <h1> Prer My Name: {this.props.name} </h1>
            </div>
        )
    }
}
export default Regcomp;
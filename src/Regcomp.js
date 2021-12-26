import React from 'react'

class Regcomp extends React.Component{
    render(){
        console.log('Reg Component*******')
        return(
            <div>
                <h1> My Name: {this.props.name} </h1>
            </div>
        )
    }
}
export default Regcomp;
import React, { Component } from 'react';
import axios from 'axios'
class Info extends Component{
    state={info:''}
    changeinfo=()=>{
        
        const changedval= prompt('Wanna change your '+this.props.field)
        const devfield=this.props.devname
        const tosend={}
        tosend[devfield]=changedval
        tosend._id=this.props.id
        axios.post('http://localhost:3300/update/'+this.props.devname,tosend).then(
            this.setState({info:this.props.childern}),
            window.location.reload(false)
        )  

    }
    render(){
        
        if(this.state!=undefined){
            return(
                <div>
                    {this.props.children}<br></br>
                    <button onClick={this.changeinfo}>Change</button>
                </div>
            )
        }
        return(
            <div>Loading..</div>
        )
    }
}


export class Header extends Component{
    state={fname:""}
    componentDidMount=()=>{
        console.log(this.props)
        this.setState({fname:this.props.firstname})
    }
    render(){
        
        return(
            <h1>{ `Hello! ${this.state.fname}. How's the day goin man!!`  }</h1>
        )
    }

}
    
    

export default Info
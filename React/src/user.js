import React, { Component } from 'react';
import axios from 'axios'
import Info from './info'
import {Header} from './info'
export default class User extends Component{
    
    state={user:''}
    componentDidMount(){
        console.log("Refer ho hai yo!!")
        console.log(document.referrer)
        console.log("Location Printed")
        console.log(this.props)
        axios.get( `http://localhost:3300${this.props.location.pathname}`)
        .then((user)=>{
            console.log(user.data)
            this.setState({user:user.data.bakra})
        })
    }



    render(){
        console.log(this.props)
        console.log(this.state.user)
        if(this.state.user!==''){
            console.log("state change hai!!")
            var {fname,email,lname}=this.state.user
            return(
            <div>
                <Header firstname={fname}></Header>
                <Info  id={this.state.user._id} devname="fname" field="First name">{fname}</Info>
                <Info id={this.state.user._id} devname="email" field="Email">{email}</Info>
                <Info id={this.state.user._id} devname="lname" field="Last name">{lname}</Info>
                
            </div>
        )
            
        }else{
            console.log("Null Cha State")
            return(
                <div>Loading..</div>
            )
        }
        
        
    }
}
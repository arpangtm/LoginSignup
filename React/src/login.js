import React, { Component } from 'react';
import validator from './validate'
import './signup.css'
import axios from 'axios'
export default class Login extends Component{

    signup=(data)=>{
        data.preventDefault()
        validator(data,"email","password")
        let {email,password}=data.target
        axios.post('http://localhost:3300/login',{
            email:email.value,
            password:password.value
        }).then(
            ({data})=>{
                console.log(data.cur_user)
                if(!data.err){
                    window.location.replace(`/user/${data.cur_user.fname}/${data.cur_user._id}`)
                }else{
                    alert (data.err)
                }
                
            }
        )

    }



    render(){
        return(
            <form onSubmit={this.signup}>
                <div className="element">
                    <input className="inputfield" id="email" placeholder="Email Address"></input>
                </div>
                <div className="element">
                    <input className="inputfield" id="password" type="password" placeholder="Password"></input>
                </div>
                <div id="submitbtn">
                        
                            <button id="submit" type="submit">Submit</button>
                        
                    </div>
            </form>
        )
    }
}
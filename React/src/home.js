import React from 'react'
import axios from 'axios'
import './signup.css'
import validator from './validate'
import {validatepassword} from './validate'

export default class App extends React.Component{
    
    validatedata=({email,password,fname,lname,repassword})=>{
        
        if(fname.value===""){
            document.getElementById('fname').style.borderColor="red"
            return false
        } 
        else if(lname.value===""){
            document.getElementById('lname').style.borderColor="red"
            return false
        } 

        else if(email.value===""){
            document.getElementById('email').style.borderColor="red"
            return false
        }
        else if(password.value===""){
            document.getElementById('password').style.borderColor="red"
            return false
        }
        else if(repassword.value===""){
            document.getElementById('repassword').style.borderColor="red"
            return false
        }
        else if(password.value!=repassword.value){
            document.getElementById("forerr").innerHTML="The passwords are not shame!"
        } 
        else{
            return true
        } 
     
    }
    ///////////////////////////////////GOOGLE SIGNUP CLICKED/////////////////////////////////////////////


    onSignIn(googleUser){
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }


//////////////////////////Google Signin Finished///////////////////////////////////


    signup=(data)=>{
        data.preventDefault()
        console.log(data.target)
        
        let {email,password,repassword,fname,lname}=data.target
        
        // var final=this.validatedata(data.target)
        var final=validator(data,"fname","lname","email","password","repassword")
        console.log(final)
        var passvalid=validatepassword("The password are not same",{
           'forerr': [password.value,repassword.value]
        })
        console.log(passvalid)
    
        if(final && passvalid){
            document.getElementById('submitbtn').innerHTML="<div class='loader'></div><div>Keep Kalm Don't Panik</div>"
        axios.post('http://localhost:3300/signup',{
            
            email:email.value,
            password:password.value,
            fname:fname.value,
            lname:lname.value,
            
        })
        .then((data)=>{
            console.log(data)
            
            if(data.data.err){
                
                window.alert(data.data.err)
                document.getElementById('submitbtn').innerHTML="<div id='submitbtn'><button id='submit' type='submit'>Submit</button></div>"
                
        }
        else{
            
            window.location.replace( `/user/${fname.value}/${data.data.id}`)
        }

        })

         } 
    }

    gs=()=>{
        document.getElementById('realgoogle').click()
    }


    profileins=()=>{
        const file=document.getElementById("fileopener").click()
        console.log(file)
    }
    render(){
        
        return(
        <div id="signupform">
            <center><h1 id="signuptxt">SignUp</h1></center>
            <form  onSubmit={this.signup} >
                <div >
                    <center>
                    <div id="realgoogle" class="g-signin2" data-onsuccess="onSignIn" ><img id="googlesu" src="/google.jpg"></img></div>
                    
                    </center> 
                </div>
                <hr id="divider"></hr>
                <div className="element">
                    <center>
                        <input className="inputfield" id="fname" placeholder="First name"></input>
                        <input className="inputfield" id="lname" placeholder="Last name"></input>
                    </center>
                </div>
                <div className="element">
                    <input className="inputfield" id="email" placeholder="Email Address"></input>
                </div>
                <div className="element">
                    <input className="inputfield" id="password" type="password" placeholder="Password"></input>
                </div>
                <div className="element">
                    <input className="inputfield" id="repassword" type="password" placeholder="Re-Enter Password"></input>
                    <p id="forerr" style={{color:'red'}}></p>
                </div>
                <center>
                    <div id="submitbtn">
                        
                            <button id="submit" type="submit">Submit</button>
                        
                    </div>
                </center>
                
            

            </form>
          
        </div>
        )
        
    }

}
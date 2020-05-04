import React from 'react'
import axios from 'axios'
export default class About extends React.Component{
    state={content:""}
    componentDidMount(){
        axios.get('http://localhost:3300/about')
        .then((content)=>{
            console.log(content)
            this.setState({content:content.data})
        })
    }
    render(){ 
        return(
            <div>
                {this.state.content}
            </div>
        )
    }
}
import React from 'react'
import ReactDOM from 'react-dom'
import App from './home'
import About from './about'
import Login from './login'
import User from './user'

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

const Routing=()=>{
    return(
        <Router>
            <Switch>
                <Route path="/signup" component={App}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/user/:name/:id" component={User}></Route>
            </Switch>
            
        </Router>
    )
}

ReactDOM.render(<Routing/>,document.getElementById('root'))
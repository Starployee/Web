import React from "react"
import { Switch, Route } from 'react-router-dom'
import About from '../pages/About'
import Feed from '../pages/Feed'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/"> 
                <Feed />
            </Route>
            <Route path="/About">
                <About />
            </Route>
        </Switch>
    </main>
)

export default Content
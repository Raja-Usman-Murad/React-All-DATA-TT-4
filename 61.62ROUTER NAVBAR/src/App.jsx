import React from 'react';
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Error from './Error'
import Menu from './Menu'
import {Route,Switch} from 'react-router-dom'

const App=()=>{
    return(
        <>
        <Menu />
    <Switch>
        <Route exact path='/' component={Home}  />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route   component={Error} />
    </Switch>
    </>
    )
}
export default App;
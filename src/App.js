import React from 'react'
import './App.css'
import Layout from './Layout/Layout';
import { Route, Switch} from 'react-router-dom'



const  App= ()=>  {

  // render(){
  
    // const [count, setCount] = useState(0)

  return (
      // <Login />
    <div>
      {/* <Layout /> */}

    <Switch>
      <Route exact path="/" component={Layout}/>
    </Switch>
    </div>
  )}

export default App;

import React from 'react'
import './App.css'
import Layout from './Layout/Layout';
import { Route, Switch} from 'react-router-dom'
import MenuCategory from './Components/MenuCategory/MenuCategory'
import AddProduct from './Components/AddProduct/AddProduct';
// import Login from './component/Login/Login';



const  App= ()=>  {

  // render(){
  
    // const [count, setCount] = useState(0)

  return (
      // <Login />
    <div>
      {/* <Layout /> */}

    <Switch>
      <Route exact path="/" component={Layout}/>
      <Route path="/addProduct" component={AddProduct}/>
    </Switch>
    </div>
  )}

export default App;

import React from 'react'
import './App.css'
import Layout from './Layout/Layout';
import { Route, Switch} from 'react-router-dom'
// import MenuCategory from './Components/MenuCategory/MenuCategory'
import AddProduct from './pages/AddProduct/AddProduct';
// import Login from './component/Login/Login';
import Contact from './Components/Contact'
import AboutUs from './Components/AboutUs'
import Settings from './Components/Settings';



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
      <Route path="/contact" component={Contact}/>
      <Route path="/aboutUs" component={AboutUs}/>
      <Route path="/settings" component={Settings}/>
    </Switch>
    </div>
  )}

export default App;

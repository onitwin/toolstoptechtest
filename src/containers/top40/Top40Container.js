import React from 'react';
import './top40Style.scss';
import Top40Header from './Top40Header';
import Top40Grid from './Top40Grid';
import Top40Branded from './Top40Branded';
import { BrowserRouter as Router,Route ,Switch} from "react-router-dom";


const Top40Container=()=>{

  return(
    <div className="top-40-outer">
    <Router>
    <Top40Header/>
    <Switch>
    <Route exact path="/" component={Top40Grid}/>

    <Route exact path="/top-40-all" render={(props)=>{
      return <Top40Branded brand=""/>
    }}/>
    
    <Route exact path="/:id" render={(props)=>{
      const brand=props.match.params.id;
      return <Top40Branded brand={brand}/>
    }}/>
    </Switch>
    </Router>
    </div>
  )
}

export default Top40Container;


// <Route exact path ='/pirates/new' render={(props)=>{
//         return <PirateForm ships ={this.state.ships} onCreate={this.handlePost}/>

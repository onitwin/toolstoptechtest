import React from 'react';
import './top40Style.scss';
import Top40Header from './Top40Header';
import Top40Grid from './Top40Grid';
import Top40Branded from './Top40Branded';
import ErrorPage from '../errors/ErrorPage';
import PageHeader from "../header/PageHeader";
import { BrowserRouter as Router,Route ,Switch} from "react-router-dom";


//CHILD OF <MainContainer>
//returns routes based on URL inputs
//Main routes are <Top40Grid> (logos with brand links) and <Top40Branded>(individual brand page)

const Top40Routes=()=>{

  return(
    <div className="top-40-outer">
    <Router>
    <PageHeader/>
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
    <Route component={ErrorPage}/>
    </Switch>
    </Router>
    </div>
  )
}

export default Top40Routes;

import './App.css';
import React, { Component } from 'react';
import {Cardlist} from './components/card-list/card-listcomponents';
import {SearchBox} from './components/searchbox/searchbox1';
class app extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchfield : ''  
    };
     
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json() )
    .then(users => this.setState({monsters:users}));
  }
  handlechange=(e)=>{
    this.setState({searchfield:e.target.value}
     )}
  render(){
    const{monsters,searchfield}= this.state;
    const FilteredMonsters = monsters.filter(monster =>monster.name.toLowerCase().includes(searchfield.toLowerCase()))
  return (
    <div className="App">
    
       <h1>Monster Rolodex</h1>
       <SearchBox
       placeholder='search-monsters'
      // 
      handlechange={this.handlechange}
          />
          <Cardlist monsters={FilteredMonsters} />
       
    </div>
  );
  }
}

export default app;

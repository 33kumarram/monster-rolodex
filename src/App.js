import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {Cardlist} from './components/card-list/card-listcomponents';
import {SearchBox} from './components/searchbox/searchbox1';
class app extends Component {
  constructor(){
    super();
    this.state={
      monsters:[
        // {
        //   name:'Photoshop',
        //   id:'ps'
        // },
        // {
        //   name:'Illustrator',
        //   id:'ai'
        // },
        // {
        //   name:'Figma',
        //   id:'fg'
        // },
      ],
      searchfield : ''
     
      // string:'hello'
    };
    // this.handlechange=this.handlechange.bind(this);
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
      {/* <input type="search" placeholder='search monsters' onChange={e=>{
        this.setState({searchfield:e.target.value},
          ()=>console.log(this.state)
        );
        } }
        />
     <Cardlist name='yuha'>yuhaa</Cardlist>
     <Cardlist name='yuha'>
     { this.state.monsters.map(monster => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
       </Cardlist>   
       <Cardlist monsters={this.state.monsters} /> */}
       <h1>Monster Rolodex</h1>
       <SearchBox
       placeholder='search-monsters'
      // 
      handlechange={this.handlechange}
          />
          <Cardlist monsters={FilteredMonsters} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.string}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button onClick={()=>this.setState({string:'Hello mc'})}>Learn more</button>
        </a> */}
       
          {/* <button onClick={()=>this.setState({string:'Hello mc'})}>donotpress</button>
      </header> */}
    
    </div>
  );
  }
}

export default app;

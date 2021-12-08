import react from "react";
import './card-list.style.css';
import { Card } from "../components1/card.component";
export const Cardlist=props=>{
//  return(
//  console.log(props),
//  <div>Hello</div>,
//  <div>{props.name}</div>,
// <div className='card-list'>{props.children}</div>
   
//  )
return(
<div className='card-list'>
{props.monsters.map(monster => (
<Card key={monster.id} monster={monster}/>
))}
</div>
);
}
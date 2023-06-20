import React from 'react'
import userData from "../data/data";
import ImageUser from './ImageUser';
import "../../src/css/CardActive.css"
const CardMightKnow = () => {
    const data = userData[0];
    const styleItem = {
      borderBottom: "none",
    };
  return (
    <div className='cardActive'>
        <h3> You Might Know</h3>
    <ItemMightKnow image={data.image} name={data.firstName} last={data.lastName} status={data.email}/>
    <ItemMightKnow image={data.image} name={data.firstName} last={data.lastName} status={data.email}/>
    <ItemMightKnow image={data.image} name={data.firstName} last={data.lastName} status={data.email}/>
    <ItemMightKnow image={data.image} name={data.firstName} last={data.lastName} status={data.email}/>
    </div>
  )}
  function ItemMightKnow(props) {
    return (
      <div class="ItemActive">
      <ImageUser image={props.image} width={50}/>
      <div>
        <h5>{props.name} {props.last}</h5>
        <span>{props.status}</span>
      </div>
      </div>
    );
}

export default CardMightKnow


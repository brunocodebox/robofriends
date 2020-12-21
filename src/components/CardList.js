import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  // No need to use the index passed in second argument of map
  //const cardComponent = robots.map((robot, i) => {
  
  const cardArray = robots.map((robot) => {
    // When doing a loop always remember to give a unique key
    return(
    <Card 
      key={robot.id} 
      id={robot.id}  
      name={robot.name } 
      email={robot.email }
      />
    );
});

  return cardArray;

  // return(
  //   <div>
  //     <Card id={ robots[0].id}  name={ robots[0].name } email={ robots[0].email }/>
  //     <Card id={ robots[1].id}  name={ robots[1].name } email={ robots[1].email }/>
  //     <Card id={ robots[2].id}  name={ robots[2].name } email={ robots[2].email }/>
  //     <Card id={ robots[3].id}  name={ robots[3].name } email={ robots[3].email }/>
  //   </div>
  // );
}

export default CardList;
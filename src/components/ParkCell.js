import React from 'react';
import north from '../assets/bus-n.jpg';
import south from '../assets/bus-s.jpg';
import east from '../assets/bus-e.jpg';
import west from '../assets/bus-w.jpg';

const ParkCell = ({row, col, dir}) => {
  let cell = <div />
  if(dir == 1){
    cell = <img src={north} alt='NORTH'/>
  } else if(dir == 2){
    cell = <img src={south} alt='SOUTH'/>
  } else if(dir == 3){
    cell = <img src={east} alt='EAST'/>
  } else if(dir == 4){
    cell = <img src={west} alt='WEST'/>
  } 
  return (<div> {cell} </div>);
}
export default ParkCell;

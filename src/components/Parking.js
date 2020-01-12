import React from 'react';
import ParkCell from './ParkCell';
import EmptyCell from './EmptyCell';

const Parking = ({settingsValue, operationsValue}) =>{
  let rows = [];
  for(let row = 1; row <= settingsValue.rows; row++) {
     let cols = [];
     for(let col = 1; col <= settingsValue.cols; col++) {
       let visible = row == operationsValue.row && col == operationsValue.col;
       if(visible){
         cols.push(<div className='col' key={col}><ParkCell row={row} col={col} dir={operationsValue.dir}/></div>);
       }else {

         cols.push(<div className='col' key={col}><EmptyCell row={row} col={col} dir={operationsValue.dir}/></div>);
       }
     }
     rows.push(<div className='row' key={row}>{cols}</div>);
  }
  return (
  <div className='col'>
      {rows}
  </div>
  )
}
export default Parking;


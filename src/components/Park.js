import React from 'react';

const Park = ({verb, onParkSelectRow, onParkSelectCol, onParkSelectDir, rows, cols, row,col,dir, move,right,left,report}) =>{
  let rowsOptions = [];
  let colsOptions = [];
  for(let r = 1; r<= rows; r++){
    rowsOptions.push(<option value={r} key={r}>{r} </option>); 
  }
  for(let c = 1; c<= cols; c++){
    colsOptions.push(<option value={c} key={c}>{c} </option>); 
  }
  return <div className='col'>
      <p className='alert alert-primary'>Parking Operations</p>
      <select onChange={e => onParkSelectRow(e.target.value)} value={row}>
            <option value="0">Select Row</option>
            {rowsOptions}
      </select>
      <select onChange={e => onParkSelectCol(e.target.value)} value={col}>
        <option value="0">Select Col</option>
        {colsOptions}
      </select>
      <select onChange={e => onParkSelectDir(e.target.value)} value={dir}>
        <option value="1">NORTH</option>
        <option value="2">SOUTH</option>
        <option value="3">EAST</option>
        <option value="4">WEST</option>
      </select>
      <button className='btn btn-info' onClick={() => verb()}>PARK</button>
      <button className='btn btn-info' onClick={() => move(rows,cols)}>MOVE</button>
      <button className='btn btn-info' onClick={() => right()}>RIGHT</button>
      <button className='btn btn-info' onClick={() => left()}>LEFT</button>
      <button className='btn btn-info' onClick={() => report()}>REPORT</button>
  </div>
}
export default Park;

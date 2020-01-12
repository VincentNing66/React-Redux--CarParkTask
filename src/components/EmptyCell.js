import React from 'react';
import available from '../assets/available.png';

const EmptyCell = ({row, col}) => {
  return (<div><img src={available} alt='available'/></div>);
}
export default EmptyCell;

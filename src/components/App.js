import React from 'react';
import { connect } from 'react-redux';
import Park from './Park';
import Parking from './Parking';

const App = ({settings, operations, onReset,onSelectRows, onSelectCols, onPark,onParkInit, onParkSelectRow,onParkSelectCol, onParkSelectDir, onParkMove, onParkRight, onParkLeft, onParkReport}) =>
  <div className='container'>
      <h2>CAR PARK TASK</h2>
        <div className='row'>
        <Park 
          verb={onPark}
          onParkSelectRow={onParkSelectRow} 
          onParkSelectCol={onParkSelectCol} 
          onParkSelectDir={onParkSelectDir} 
          rows={settings.rows} 
          cols={settings.cols} 
          row={operations.selected_row} 
          col={operations.selected_col} 
          dir={operations.selected_dir} 
          move={onParkMove} 
          right={onParkRight} 
          left={onParkLeft} 
          report={onParkReport} 
        />
        </div>
        <div className='row'>
        <Parking  settingsValue={settings} operationsValue={operations} />
        </div>
  </div>

const Setup = dispatch => {
   dispatch({type: 'RESET'});
   dispatch({type: 'PARK_INIT'});
}

const mapStateToProps = state => ({
  settings: state.settingsState,
  operations: state.operationsState
});

const mapDispatchToProps = dispatch => ({
  onReset: () => Setup(dispatch),//TODO: SAGA should be used here...
  onSelectRows: (rows) => dispatch({ type: 'SELECT_ROWS', rows: rows}),
  onSelectCols: (cols) => dispatch({ type: 'SELECT_COLS', cols:cols}),
  onPark:  () => dispatch({ type: 'PARK'}),
  onParkInit:  () => dispatch({ type: 'PARK_INIT'}),
  onParkMove:  (rows, cols) => dispatch({ type: 'PARK_MOVE', max_rows: rows, max_cols: cols}),
  onParkRight:  () => dispatch({ type: 'PARK_RIGHT'}),
  onParkLeft:  () => dispatch({ type: 'PARK_LEFT'}),
  onParkReport:  () => dispatch({ type: 'PARK_REPORT'}),
  onParkSelectRow: (row) => dispatch({ type: 'SELECT_ROW',row:row}),
  onParkSelectCol: (col) => dispatch({ type: 'SELECT_COL',col:col}),
  onParkSelectDir: (dir) => dispatch({ type: 'SELECT_DIR',dir:dir})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

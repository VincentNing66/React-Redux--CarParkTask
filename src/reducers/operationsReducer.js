const INITIAL_STATE = {
  row: 0,
  col: 0,
  dir: 0,
  selected_row: 0,
  selected_col: 0,
  selected_dir: 1
};

const operationsReducer = (state = INITIAL_STATE, action)  => {
  const dirReport = (num) => {
    switch (num) {
      case 1:
        return "NORTH";
      case 2:
        return "SOUTH";
      case 3:
        return "EAST";
      case 4:
        return "WEST";
      case 0:
        return "NONE";
      default:
        break;
    }
  }
  const turningLeft  = (turn) => {
    switch (Number(turn)) {
      case 1:
        return 4;
      case 4:
        return 2;
      case 2:
        return 3;
      case 3:
        return 1;
      default:
        break;
    }
  }
  const turningRight  = (turn) => {
    switch (Number(turn)) {
      case 1:
        return 3;
      case 3:
        return 2;
      case 2:
        return 4;
      case 4:
        return 1;
      default:
        break;
    }
  }
  //alert(`CALL ${action.type} ${action.rows}`);
  switch (action.type) {
    case 'PARK':
      return { ...state, row: state.selected_row, col: state.selected_col, dir:state.selected_dir};
    case 'PARK_INIT':
      return { row: 0, col: 0, dir:1, selected_row: 0, selected_col:0,selected_dir: 0};
    case 'SELECT_ROW':
      return { ...state, selected_row: action.row};
    case 'SELECT_COL':
      return { ...state, selected_col: action.col};
    case 'SELECT_DIR':
      return { ...state, selected_dir: action.dir};
    case 'PARK_MOVE':
      //alert(`CALL ${action.max_rows} x ${action.max_cols}`);
      if(state.dir == 1 && state.row != 1){
         return { ...state, row:state.row - 1};
      }
      if(state.dir == 2 && state.row < action.max_rows){
         return { ...state, row: Number(state.row) + 1};
      }
      if(state.dir == 3 && state.col < action.max_cols){
         return { ...state, col: Number(state.col) + 1};
      }
      if(state.dir == 4 && state.col != 1 ){
         return { ...state, col:state.col - 1};
      }
      return { ...state};
    case 'PARK_LEFT':
      return { ...state, dir: turningLeft(state.dir)};
    case 'PARK_RIGHT':
      return { ...state, dir: turningRight(state.dir)};
    case 'PARK_REPORT':
      alert(`REPORT -> ROW: ${state.row} | COL: ${state.col} | DIRECTION: ${dirReport(state.dir)}`);
      return { ...state};
    default: return state;
  }
}

export default operationsReducer;

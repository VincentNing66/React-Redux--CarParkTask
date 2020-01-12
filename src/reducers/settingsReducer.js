const INITIAL_STATE = {
  rows: 5,
  cols: 5,
  selected_rows: 0,
  selected_cols: 0
};

const settingsReducer = (state = INITIAL_STATE, action)  => {
  //alert(`CALL ${action.type} ${action.rows}`);
  //TODO: in case we need to manage parking size otherwise can be deleted!!...
  switch (action.type) {
    case 'RESET':
      return { ...state, rows:5, cols:5};
    case 'SELECT_ROWS':
      return { ...state, selected_rows: action.rows};
    case 'SELECT_COLS':
      return { ...state, selected_cols: action.cols};
    default: return state;
  }
}

export default settingsReducer;

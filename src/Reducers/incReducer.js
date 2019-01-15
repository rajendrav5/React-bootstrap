function incReducer(state = {
  count: 0,
} , action) {
    switch (action.type) {
      case "INC_COUNT":
        return Object.assign({}, state, 
          {
            count: (parseInt(state.count) + 1),
          }
        );

      case "DEC_COUNT":
        let count;
        if (state.count > 0){
          count = (parseInt(state.count) - 1)
        } else {
            count = 0;
        }

        return Object.assign({}, state, { count }); 
        
        default:
        return state
    }
  }
  

export default incReducer;
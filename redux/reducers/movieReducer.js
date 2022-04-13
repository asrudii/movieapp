const init_state = {
  data: [],
  total_result: 0,
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case 'MOVIE_LIST':
      return { ...state, data: action.payload };
    case 'TOTAL_RESULT':
      return { ...state, total_result: action.payload };
    default:
      return state;
  }
};

export default reducer;

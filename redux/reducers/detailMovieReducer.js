const init_state = {};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case 'MOVIE_DETAIL':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;

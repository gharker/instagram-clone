export const initialState = {
  user: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_CURRENT_USER':
      return {
        ...state,
        user: [...state.user, action.user],
      };

    default:
      return state;
  }
};

export default reducer;

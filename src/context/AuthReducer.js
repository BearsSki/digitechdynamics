// src/context/AuthReducer.js
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
      };
    case "SET_ROLE":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          role: action.payload,
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;

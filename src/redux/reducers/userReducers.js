const initialState = {
  allUsers: [],
  editUser: {},
};
// const productReducer = (state = initialState, action) => {
const userReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "ADD_NEW_USER":
      debugger;
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };

    case "DELETE_THIS_USER":
      debugger;
      const uid = action.payload;
      const updatedValues = state.allUsers.filter((user) => user.id != uid);
      debugger;
      return {
        ...state,
        allUsers: updatedValues,
      };

    case "EDIT_THIS_USER":
      debugger;
      return {
        ...state,
        editUser: action.payload,
      };

    case "UPDATE_THIS_EDITED_USER":
      debugger;
      const updatedUser = action.payload;
      const updatedListUsers = state.allUsers.map((u) =>
        u.id == updatedUser.id ? updatedUser : u
      );
      debugger;
      return {
        ...state,
        allUsers: updatedListUsers,
        editUser: [],
      };

    default:
      return state;
    //   return {
    //     ...state,
    //     allUsers: [...state.allUsers, action.payload],
    //   };
  }
};

export default userReducer;
